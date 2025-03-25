import Biblioteca from '@/components/biblioteca/biblioteca';
import OfertasCarrossel from '@/components/ofertas/ofertasCarrossel/ofertasCarrossel';

export default function Home() {
  return (
    <main className="mainContainer">
      <OfertasCarrossel />
      <Biblioteca />
    </main>
  );
}
