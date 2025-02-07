import GamesGet from '@/actions/gameInfo-get';
import OfertasGet from '@/actions/ofertas-get';
import OfertasCarrossel from '@/components/ofertas/ofertasCarrossel';

export default async function Home() {
  const appids = await OfertasGet();
  const data = await GamesGet(appids);
  return (
    <main className="mainContainer">
      <OfertasCarrossel items={data} />
    </main>
  );
}
