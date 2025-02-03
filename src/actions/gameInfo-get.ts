export default async function ofertasGet(appid: number) {
  const response = await fetch(`https://store.steampowered.com/api/appdetails?appids=${}&l=brazilian`);

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