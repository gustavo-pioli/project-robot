import Biblioteca from '@/components/biblioteca/biblioteca';
import OfertasCarrossel from '@/components/ofertas/ofertasCarrossel/ofertasCarrossel';

export default async function Home() {
  return (
    <main className="mainContainer">
      <OfertasCarrossel />
      <Biblioteca />
    </main>
  );
}
