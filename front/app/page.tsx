"use client";

import { FormEvent, useState } from "react";
import styles from './page.module.css'
import axios, { AxiosError } from 'axios';

export default function Home() {
  const [error, setError] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    console.log('aaa')
    e.preventDefault();
    
    try {
      const response = await axios.post(' http://localhost:4000/api/signup', { username, password });
    } catch (err: any | AxiosError) {
      setError(err.response.data.error);
    }
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSignup}>
        <h2>Signup</h2>
        {error && <p>{error}</p>}
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </main>
  )
}
