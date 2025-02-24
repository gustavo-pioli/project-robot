import { BibliotecaItem } from '@/api/biblioteca-get';
import PrecoGet, { PrecoResponse } from '@/api/preco-get';
import Card from './card/card';
import styles from './biblioteca.module.css';

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
        ))}
      </div>
    );
  });
}

export default async function Biblioteca({
  items,
}: {
  items: BibliotecaItem[];
}) {
  const data = await PrecoGet(items);
  const cardRows = buildCardRows(data);

  return (
    <section className={styles.bibContainer}>
      <h1>Mais Jogados</h1>
      <div className={styles.cardsHolder}>{showCardRows(cardRows)}</div>
      <button className={styles.exibirMais}>Exibir Mais</button>
    </section>
  );
}
