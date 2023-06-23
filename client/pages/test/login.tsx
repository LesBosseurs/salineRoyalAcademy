import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { Inter } from 'next/font/google'
import styles from '@/styles/Form.module.css';
import { ChangeEvent, FormEvent, useState } from 'react'

interface FormData {
  email: string;
  password: string;
}

export default function LoginForm() {
    const [formData, setFormData] = useState<FormData>({
      email: '',
      password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      // Envoyer les données du formulaire au backend
      console.log(formData);
      // Réinitialiser le formulaire
      setFormData({
        email: '',
        password: ''
      });
    };

    return (
      <div className={styles.loginFormContainer}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <label className={styles.formLabel}>
            Email:
            <input
              className={styles.formInput}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label className={styles.formLabel}>
            Mot de passe:
            <input
              className={styles.formInput}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button className={styles.formButton} type="submit">Se connecter</button>
        </form>
      </div>
    );
  }