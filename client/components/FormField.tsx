import React, { ChangeEvent } from 'react';
import style from '../styles/components/FormField.module.scss';

type FormFieldProps<T> = {
  label: string;
  type: string;
  size: 'md' | 'lg';
  value: T;
  onChange: (value: T) => void;
  icon: React.ReactNode;
  iconIsLeft?: boolean;
};

export default function FormField<T extends Record<string, any>>({
  label,
  type,
  size,
  value,
  onChange,
  icon,
  iconIsLeft
}: FormFieldProps<T>) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = {
      ...value,
      [e.target.name]: e.target.value,
    };
    onChange(newValue);
  };

  const aspectButton = () => {
    switch (size) {
      case 'md':
        return style.md;
      case 'lg':
        return style.lg;
    }
  };

  return (
    <div className={style.FormField}>
      <label>
        {label.charAt(0).toUpperCase() + label.slice(1).replace(/_/g, ' ')}
      </label>
      <input
        type={type}
        id={label}
        name={label}
        value={value[label]}
        className={aspectButton()}
        onChange={handleInputChange}
      />
    </div>
  );
}
