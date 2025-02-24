import { PriceOverview } from './preco-get';

export type Game = {
  bundle?: boolean;
  name: string;
  short_description: string;
  header_image: string;
  price_overview: PriceOverview;
  genres: [
    {
      id: number;
      description: string;
    },
  ];
  screenshots: [
    {
      id: number;
      path_thumbnail: string;
      path_full: string;
    },
  ];
  movies: [
    {
      name: string;
      thumbnail: string;
      webm: {
        '480': string;
        max: string;
      };
      mp4: {
        '480': string;
        max: string;
      };
    },
  ];
};

export default async function GamesGet(appids: number[], numOfertas = 3) {
  const results: Game[] = [];
  let index = 0;

  while (results.length < numOfertas && index < appids.length) {
    const id = appids[index];

    try {
      const response = await fetch(
        `https://store.steampowered.com/api/appdetails?appids=${id}&l=brazilian`,
      );

      if (!response.ok) throw new Error(`Erro ao buscar ID ${id}`);

      const content = await response.json();

      if (content[id]?.success) {
        results.push(content[id].data);
      }
    } catch (error) {
      console.error(`Erro ao buscar ID ${id}:`, error);
    }

    index++;
  }
  return results;
}
