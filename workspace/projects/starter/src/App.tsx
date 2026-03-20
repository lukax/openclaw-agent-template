import { useState } from 'react';
import styles from './App.module.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Starter App</h1>
      <p className={styles.description}>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <button
        className={styles.button}
        onClick={() => setCount((c) => c + 1)}
      >
        Count: {count}
      </button>
    </main>
  );
}
