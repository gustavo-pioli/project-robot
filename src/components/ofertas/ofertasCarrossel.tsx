import Image from 'next/image';
import styles from './ofertasCarrossel.module.css';

export default async function OfertasCarrossel() {
  return (
    <div className="container">
      <h1 className={styles.title}>OFERTAS</h1>
      <section className={styles.carrossel}>
        <div className={styles.carrosselConteudo}>
          <Image
            src={'/assets/robot.svg'}
            alt="Banner"
            width={74}
            height={74}
          />
          <div className={styles.descricao}>
            <Image
              src={'/assets/robot.svg'}
              alt="Banner"
              width={74}
              height={74}
            />
            <p>Muito texto</p>
          </div>
        </div>
      </section>
    </div>
  );
}
