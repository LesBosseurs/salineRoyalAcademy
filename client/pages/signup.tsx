import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { Inter } from 'next/font/google'
import styles from '@/styles/Form.module.css';
import { ChangeEvent, FormEvent, useState } from 'react'

export default function Home() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
    axios({
      method: 'POST',
      url: '/api/signup'
    }).then((rep) => console.log(rep))
    .catch((err) => console.warn(err))
    // Réinitialiser le formulaire
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className={styles.signupFormContainer}>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Prénom:
          <input
            className={styles.formInput}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className={styles.formLabel}>
          Nom:
          <input
            className={styles.formInput}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
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
        <button className={styles.formButton} type="submit">S'inscrire</button>
      </form>
    </div>)
}
