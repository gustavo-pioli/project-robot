/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Card from './card/card';
import styles from './biblioteca.module.css';
import React from 'react';
import useFetch from '@/hooks/useFetch';
import { BibliotecaItem, PrecoResponse } from '@/services/types';
import { ParseIdFromURL } from '@/utils/parseId';
import LoadingError from '../Error/loadingError';
import { useTranslation } from 'react-i18next';

function buildCardRows(
  data: PrecoResponse,
  appIds: string[],
  sizes = [2, 3, 4],
) {
  const result = [];
  let index = 0;
  let start = 0;
  while (start < appIds.length) {
    const size = sizes[index % sizes.length];
    const group: PrecoResponse = {};

    appIds.slice(start, start + size).forEach((appId) => {
      group[appId] = data[appId];
    });

    result.push(group);
    start += size;
    index++;
  }
  return result;
}

function showCardRows(cardRows: PrecoResponse[]) {
  let mobile = false;
  return cardRows.map((group: PrecoResponse, i) => {
    const appIds = Object.keys(group);
    if (appIds.length >= 4) mobile = true;
    else mobile = false;
    return (
      <div key={i} className={styles.cardsRow}>
        {appIds.map((appId) => (
          <Card
            key={appId}
            appId={appId}
            preco={group[appId].data.price_overview}
            mobile={mobile}
          />
        ))}
      </div>
    );
  });
}

export default function Biblioteca() {
  const { t } = useTranslation();
  const { loading, error, request } = useFetch();
  const [cards, setCards] = React.useState<BibliotecaItem[] | null>(null);
  const [cardRows, setCardRows] = React.useState<PrecoResponse[] | null>(null);
  const [blocos, setBlocos] = React.useState(1);

  function handleClick() {
    setBlocos(blocos + 1);
  }
  React.useEffect(() => {
    async function fetchCards(page: number, numItems = 9) {
      const url = `/api/biblioteca/${page}`;
      const { response } = await request(url);
      if (error) return;
      const json = response?.data;
      const info = json
        ? (json.items as BibliotecaItem[]).slice(0, numItems)
        : [];

      setCards((prev) => {
        const prevIds = new Set(prev?.map((item) => ParseIdFromURL(item.logo)));

        const novosItens = info.filter(
          (item) => !prevIds.has(ParseIdFromURL(item.logo)),
        );
        return [...(prev || []), ...novosItens];
      });
    }
    fetchCards(blocos);
  }, [blocos]);

  React.useEffect(() => {
    async function fetchCardsPreco(cards: BibliotecaItem[]) {
      const sizes = [2, 3, 4];
      const appIds = cards
        .map((item) => ParseIdFromURL(item.logo))
        .filter((appId): appId is string => appId !== null);
      const url = `/api/preco/${appIds.join(',')}`;
      const { response } = await request(url);
      if (error) return;
      const json = response?.data as PrecoResponse;
      setCardRows(buildCardRows(json, appIds, sizes));
    }
    if (cards) {
      fetchCardsPreco(cards);
    }
  }, [cards]);

  return (
    <section className={styles.bibContainer}>
      <h1>{t('bib.title')}</h1>
      {(loading || !cardRows) && !error ? (
        <div className={styles.skeleton}> </div>
      ) : cardRows ? (
        <>
          <div className={styles.cardsHolder}>{showCardRows(cardRows)}</div>
          <button className={styles.exibirMais} onClick={handleClick}>
            {t('bib.show-more')}
          </button>
        </>
      ) : (
        <LoadingError />
      )}
    </section>
  );
}
