'use server';

export type SpecialResponse = {
  specials: {
    id: string;
    name: string;
    items: [{ id: number }];
  };
};

export default async function OfertasGet() {
  const numOfertas = 3;
  const response = await fetch(
    'http://store.steampowered.com/api/featuredcategories/?l=brazilian',
  );

  const data = (await response.json()) as SpecialResponse;

  const appids = data.specials.items.map((item) => item.id);
  console.log(`AppIds: ${appids}`);
  // return appids.splice(0, numOfertas);
  return appids;
}
