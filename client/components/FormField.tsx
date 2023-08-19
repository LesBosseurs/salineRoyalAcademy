import React, {ChangeEvent,InputHTMLAttributes} from 'react';
import style from '../styles/components/FormField.module.scss';

type A = InputHTMLAttributes<HTMLInputElement>;

type FormFieldProps<T> = {
  label: string;
  type: string;
  sizeInput: 'md' | 'lg';
  value: T,
  onChange: (value: T) => void;
  icon?: React.ReactNode;
}& Omit<A, 'value'>;

export default function FormField<T extends Record<string, any>>({
  label,
  type,
  sizeInput,
  value,
  onChange,
  icon,
  ...props
  }:FormFieldProps<T> ) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = {
      ...value,
      [e.target.name]: e.target.value,
    };
    onChange(newValue);
  };

  const aspectButton = () => {
    switch (sizeInput) {
      case 'md':
        return style.md;
      case 'lg':
        return style.lg;
    }
  };

  return (
    <div className={type !== "search"? style.FormField : style.searchField}>
      {type !== "search" ? (
        <label>
          {icon}
          {label.charAt(0).toUpperCase() + label.slice(1).replace(/_/g, ' ')}
        </label>
      ):(<>{icon}</>)}
      <input
        {...props}
        type={type}
        id={label}
        name={label}
        value={value[label]}
        className={aspectButton()}
        onChange={handleInputChange}
      ></input>
    </div>
  );
}
