interface BibliotecaResponse {
  items: [
    {
      name: string;
      logo: string;
    },
  ];
}

export interface BibliotecaItem {
  name: string;
  logo: string;
}

export default async function BibliotecaGet() {
  try {
    const numItems = 9;
    const response = await fetch(
      'https://store.steampowered.com/search/results/?filter=topsellers&json=1&page=1',
    );

    const data = (await response.json()) as BibliotecaResponse;
    return data.items.splice(0, numItems) as BibliotecaItem[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
