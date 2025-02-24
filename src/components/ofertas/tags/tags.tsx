import styles from './tags.module.css';

interface GenreProps {
  id: number;
  description: string;
}

export default function Tags({ content }: { content: GenreProps[] }) {
  return (
    <ul className={styles.tagList}>
      {content.map((tag, index) => (
        <li key={index}>{tag.description}</li>
      ))}
    </ul>
  );
}
