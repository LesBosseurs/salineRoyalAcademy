import {FormEvent, SetStateAction, useState} from 'react';
import Button from '@/components/Button';
import FormField from '@/components/FormField';
import style from '../styles/pages/auth.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { useRouter } from 'next/router';
import { registerUser } from '@/store/features/userSlice';

interface FormData {
  email: string;
  password: string;
  confirm_password: string;
}

export default function Register() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  if (user.token) {
    push('/dashboard');
  }

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirm_password: '',
  });

  function onChange (value: Record<string, any>) {
    setFormData(value as SetStateAction<FormData>);
  }


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    dispatch(registerUser(formData));
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
            <h1>Sign up</h1>
            <p>Create your account</p>
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
            <h1>Sign up</h1>
            <p>Create your account</p>
          </div>
          <FormField
            label="email"
            type="email"
            sizeInput="lg"
            value={formData}
            onChange={onChange}
          />
          <FormField
            label="password"
            type="password"
            sizeInput="lg"
            value={formData}
            onChange={onChange}
          />
          <FormField
            label="confirm_password"
            type="password"
            sizeInput="lg"
            value={formData}
            onChange={onChange}
          />
          <div className={style.terms}>
            <input type="checkbox" name="" id="" />
            <p>I agree to our Terms and Conditions Agreement </p>
          </div>
          <Button size="lg">Sign up</Button>
          <p>
            You already have an account? <Link href="/login">Login</Link>
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
            You already have an account? <Link href="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
