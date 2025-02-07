import Image from "next/image";
import styles from "./ofertasItem.module.css";
import { Game } from "@/actions/gameInfo-get";

export default function OfertasItem({ content, index }: { content: Game, index: number }) {
  return (
    <div key={index} className={styles.carrosselConteudo}>
      <Image
        src={content.header_image}
        alt="Banner"
        width={616}
        height={353}
      />
      <div className={styles.descricao}>
        <Image
          src={content.header_image}
          alt="Banner"
          width={184}
          height={69}
        />
        <p>{content.short_description}</p>
      </div>
    </div>
  )
}