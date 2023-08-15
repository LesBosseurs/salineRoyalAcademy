import React, {ChangeEvent} from 'react';
import style from '../styles/components/FormField.module.scss';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  sizeInput: 'md' | 'lg';
  value: object,
  onChange: (value) => void;
  icon?: React.ReactNode;
}

const FormField = ({
  label,
  type,
  sizeInput,
  value,
  onChange,
  icon,
  ...props
  }:FormFieldProps ) => {
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

export default FormField;