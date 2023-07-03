import React, { ChangeEvent } from 'react';
import style from '../styles/components/FormField.module.scss';

type FormFieldProps<T> = {
  label: string;
  type: string;
  value: T;
  onChange: (value: T) => void;
};

export default function FormField<T extends Record<string, any>>({
  label,
  type,
  value,
  onChange,
}: FormFieldProps<T>) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = {
      ...value,
      [e.target.name]: e.target.value,
    };
    onChange(newValue);
  };

  return (
    <div className={style.FormField}>
      <label>
        {label.charAt(0).toUpperCase() + label.slice(1).replace(/_/g, ' ')}:
      </label>
      <input
        type={type}
        id={label}
        name={label}
        value={value[label]}
        onChange={handleInputChange}
      />
    </div>
  );
}
