import { FormEvent, useState } from 'react';
import style from '../styles/pages/auth.module.scss';
import FormField from '@/components/FormField';
import Button from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className={style.container}>
      <div>
        <div className={style.background}>
          <div className={style.first_line}></div>
          <div className={style.second_line}></div>
          <div className={style.head_mobile}>
            <h1>Sign in</h1>
            <p>Log in to your account</p>
          </div>
          <div className={style.circle}>
            <div className={style.first_line}></div>
            <div className={style.circle}></div>
            <Image
              src="/img/musician_euphonium.png"
              alt="a musician with a euphonium"
              width="300"
              height="700"
            />
            <div className={style.second_line}></div>
          </div>
          <div className={style.sign_other_service_desktop}>
            <span>Or sign in with</span>
            <div>
              <button>
                <Image
                  src="/icons/fb.svg"
                  alt="facebook icon"
                  width="25"
                  height="25"
                />
                <span>Facebook</span>
              </button>
              <button>
                <Image
                  src="/icons/google.png"
                  alt="me"
                  width="25"
                  height="25"
                />
                <span>Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className={style.desktop_title}>
            <h1>Sign in</h1>
            <p>Log in to your account</p>
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
          <Link href="">Forgot password?</Link>
          <Button size="lg">Login</Button>
          <p>
            Don’t have an account? <Link href="/register">Register</Link>
          </p>
        </form>
        <div className={style.sign_other_service_mobile}>
          <span>Or sign in with</span>
          <div>
            <button>
              <Image src="/icons/fb.svg" alt="me" width="25" height="25" />
              <span>Facebook</span>
            </button>
            <button>
              <Image src="/icons/google.png" alt="me" width="25" height="25" />
              <span>Google</span>
            </button>
          </div>
          <p>
            You don&apos;t have an account?
            <Link href="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
