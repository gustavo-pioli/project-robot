import styles from './loadingError.module.css';
export default function LoadingError() {
  return (
    <div className={styles.reload}>
      <div className={styles.reloadConteudo}>
        <h2>Não foi possível carregar conteúdo</h2>
        <p>Clique aqui para tentar novamente</p>
        <button onClick={() => window.location.reload()}>Recarregar</button>
      </div>
    </div>
  );
}
