import ofertasGet from '@/actions/ofertas-get';
import OfertasCarrossel from '@/components/ofertas/ofertasCarrossel';

export default async function Home() {
  const data = await ofertasGet();

  return (
    <main className="mainContainer">
      <OfertasCarrossel specialItems={data} />
    </main>
  );
}
