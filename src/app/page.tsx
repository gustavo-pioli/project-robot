import BibliotecaGet from '@/api/biblioteca-get';
import GamesGet from '@/api/gameInfo-get';
import OfertasGet from '@/api/ofertas-get';
import Biblioteca from '@/components/biblioteca/biblioteca';
import OfertasCarrossel from '@/components/ofertas/ofertasCarrossel/ofertasCarrossel';

export default async function Home() {
  const appids = await OfertasGet();
  const ofertaGames = await GamesGet(appids);
  const bibItems = await BibliotecaGet();

  return (
    <main className="mainContainer">
      <OfertasCarrossel items={ofertaGames} />
      <Biblioteca items={bibItems} />
    </main>
  );
}
