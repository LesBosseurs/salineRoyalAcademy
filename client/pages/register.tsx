import { FormEvent, useState } from 'react';
import Button from '@/components/Button';
import FormField from '@/components/FormField';
import style from '../styles/pages/auth.module.scss';
import fonts from '../styles/fonts.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface FormData {
  email: string;
  password: string;
  confirm_password: string;
}

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
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
          <div className={style.first_line}></div>
          <div className={style.second_line}></div>
          <div className={style.head_mobile}>
            <h1 className={fonts.head}>Sign up</h1>
            <p className={fonts.paragraph_regular}>Create your account</p>
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
            <span className={fonts.paragraph_medium}>Or sign in with</span>
            <div>
              <button>
                <Image src="/icons/fb.svg" alt="me" width="25" height="25" />
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
        <div className={style.sign_other_service_mobile}>
          <span className={fonts.paragraph_medium}>Or sign in with</span>
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
          <p className={fonts.paragraph_medium}>
            You already have an account?{' '}
            <Link href="/login" className={fonts.paragraph_semi_bold}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
