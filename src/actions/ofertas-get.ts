'use server'

export type SpecialItem = {
  id: number;
  type: number;
  name: string;
  discounted: boolean;
  discount_percent: number;
  original_price: number;
  final_price: number;
  currency: string;
  large_capsule_image: string;
  small_capsule_image: string;
  windows_available: boolean;
  mac_available: boolean;
  linux_available: boolean;
  streamingvideo_available: boolean;
  discount_expiration: number;
  header_image: string;
}

export type SpecialResponse = {
  specials: {
    id: string;
    name: string;
    items: SpecialItem[];
  };
}

export default async function ofertasGet() {
  const response = await fetch("http://store.steampowered.com/api/featuredcategories/?l=brazilian");

  const data = await response.json() as SpecialResponse;

  if (data.specials?.items.length > 0) {
    data.specials.items.forEach(item => {
      console.log(`Jogo: ${item.name}`);
      console.log(`Desconto: ${item.discount_percent}%`);
      console.log(`Preço original: R$ ${(item.original_price / 100).toFixed(2)}`);
      console.log(`Preço com desconto: R$ ${(item.final_price / 100).toFixed(2)}`);
      console.log("--------------");
    });
  } else {
    console.log("Nenhuma oferta disponível.");
  }


  return data.specials.items as SpecialItem[];
}