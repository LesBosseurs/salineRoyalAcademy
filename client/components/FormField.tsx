import React, {ChangeEvent, ReactElement} from 'react';
import style from '../styles/components/FormField.module.scss';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type: string;
    sizeInput: 'md' | 'lg';
    onChange: (value) => void;
    icon: React.ReactNode;
    iconIsLeft?: boolean;
};

const FormField = ({

                              label,
                              type,
                              sizeInput,
                              value,
                              onChange,
                              icon,
                              iconIsLeft,
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
                    {label.charAt(0).toUpperCase() + label.slice(1).replace(/_/g, ' ')}
                </label>
            ):''}
            <input
                {...props}
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
export default FormField;