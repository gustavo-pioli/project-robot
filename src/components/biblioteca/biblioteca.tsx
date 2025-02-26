/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Card from './card/card';
import styles from './biblioteca.module.css';
import React from 'react';
import useFetch from '@/hooks/useFetch';
import { BibliotecaItem, PrecoResponse } from '@/services/types';
import { ParseIdFromURL } from '@/utils/parseId';
import LoadingError from '../Error/loadingError';

function buildCardRows(data: PrecoResponse) {
  const sizes = [2, 3, 4];
  const result = [];
  let index = 0;
  let start = 0;
  const appIds = Object.keys(data);

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
  return cardRows.map((group: PrecoResponse, i) => {
    const appIds = Object.keys(group);
    return (
      <div key={i} className={styles.cardsRow}>
        {appIds.map((appId) => (
          <Card
            key={appId}
            appId={appId}
            preco={group[appId].data.price_overview}
          />
          // <p key={appId}>Card</p>
        ))}
      </div>
    );
  });
}

export default function Biblioteca() {
  const { loading, error, request } = useFetch();
  const [cards, setCards] = React.useState<BibliotecaItem[] | null>(null);
  const [cardRows, setCardRows] = React.useState<PrecoResponse[] | null>(null);

  React.useEffect(() => {
    async function fetchCards() {
      const url = '/api/biblioteca';
      const response = await request(url);
      const json = response?.data;
      const info = json ? (json.items as BibliotecaItem[]) : [];
      setCards(info);
    }
    fetchCards();
  }, []);

  React.useEffect(() => {
    async function fetchCardsPreco(cards: BibliotecaItem[], numItems = 9) {
      let appIds = cards.map((item) => {
        const appId = ParseIdFromURL(item.logo);
        return appId;
      });
      appIds = appIds.slice(0, numItems);
      const url = `/api/preco/${appIds.join(',')}`;
      const response = await request(url);
      const json = response?.data as PrecoResponse;
      setCardRows(buildCardRows(json));
    }
    if (cards) fetchCardsPreco(cards);
  }, [cards]);

  return (
    <section className={styles.bibContainer}>
      <h1>Mais Jogados</h1>
      {(loading || !cardRows) && !error ? (
        <div className={styles.skeleton}> </div>
      ) : cardRows ? (
        <>
          <div className={styles.cardsHolder}>{showCardRows(cardRows)}</div>
          <button className={styles.exibirMais}>Exibir Mais</button>
        </>
      ) : (
        <LoadingError />
      )}
    </section>
  );
}
