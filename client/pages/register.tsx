import Button from '@/components/Button';
import FormField from '@/components/FormField';
import style from '../styles/pages/auth.module.scss';
import fonts from '../styles/fonts.module.scss';
import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm_password: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: '',
      password: '',
      confirm_password: '',
    });
  };

  return (
    <div className={style.container}>
      <div>
        <div className={style.background}>
          <div className={style.circle}>
            <div className={style.first_line}></div>
            <div className={style.circle}></div>
            <div className={style.second_line}></div>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className={style.desktop_title}>
            <h1 className={fonts.title_regular}>Sign up</h1>
            <p className={fonts.paragraph_regular}>Create your account</p>
          </div>
          <FormField
            label="email"
            type="email"
            value={formData}
            onChange={function (value) {
              setFormData(value);
            }}
          />
          <FormField
            label="password"
            type="password"
            value={formData}
            onChange={function (value) {
              setFormData(value);
            }}
          />
          <FormField
            label="confirm_password"
            type="password"
            value={formData}
            onChange={function (value) {
              setFormData(value);
            }}
          />
          <div className={style.terms}>
            <input type="checkbox" name="" id="" />
            <p className={fonts.paragraph_medium}>
              I agree to our Terms and Conditions Agreement{' '}
            </p>
          </div>
          <Button size="lg">Sign up</Button>
          <p className={fonts.paragraph_medium}>
            You already have an account?{' '}
            <Link href="/login" className={fonts.paragraph_semi_bold}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
