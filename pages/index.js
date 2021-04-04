import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/client'

export default function Home() {
  const [session] = useSession();
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        {! session ?
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">MyChama Manager</a>
        </h1>
        :
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Chama List&rarr;</h3>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Membership &rarr;</h3>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Accounts &rarr;</h3>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Reports &rarr;</h3>
          </a>
        </div>
          }
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
