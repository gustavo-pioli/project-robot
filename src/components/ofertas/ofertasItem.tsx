import { SpecialItem } from "@/actions/ofertas-get";
import Image from "next/image";
import styles from "./ofertasItem.module.css";

export default function OfertasItem({ specialItem, index }: { specialItem: SpecialItem, index: number }) {
  return (
    <div key={index} className={styles.carrosselConteudo}>
      <Image
        src={specialItem.large_capsule_image}
        alt="Banner"
        width={616}
        height={353}
      />
      <div className={styles.descricao}>
        <Image
          src={specialItem.small_capsule_image}
          alt="Banner"
          width={184}
          height={69}
        />
        <p>Muito texto</p>
      </div>
    </div>
  )
}