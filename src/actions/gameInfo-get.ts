export type Game = {
  name: string,
  short_description: string,
  header_image: string,
  price_overview: {
    discount_percent: number,
    initial_formatted: string,
    final_formatted: string,
  },
  genres: [
    {
      description: string
    }
  ],
  movies: [
    {
      name: string,
      thumbnail: string,
      webm: {
        "480": string,
        max: string
      },
      mp4: {
        "480": string,
        max: string
      }
    }
  ]
}

type GameResponse = {
  success: boolean,
  data: Game
}
type GameGetResponse = Record<string, GameResponse>[];
// type GameGetResponse = {
//   [key: string]: GameResponse
// }

export default async function GamesGet(appids: number[]) {
  try {
    const results = await Promise.all(
      appids.map(async (id) => {
        const response = await fetch(`https://store.steampowered.com/api/appdetails?appids=${id}&l=brazilian`);
        // console.log(`fetch em ${id}`)
        if (!response.ok) throw new Error(`Erro ao buscar ID ${id}`);
        const teste = await response.json();
        return teste[id].data;
      })
    );
    // const games: Game[] = Object.keys(results).map((key: string) => results[key as keyof GameGetResponse]);
    return results as Game[];
  } catch (error) {
    console.error(error);
    return [];
  }
}