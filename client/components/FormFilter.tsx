import React, {FormEvent} from "react";
import style from "@/styles/components/FormFilter.module.scss";
import FormField from "@/components/FormField";
import Button from "@/components/Button";

type FormFilterProps<T extends Record<string, any>> = {
  filterField: T;
  setSelectedFilter: (value: T ) => void;
}

export default function FormFilter<T extends Record<string, any>>({filterField, setSelectedFilter}: FormFilterProps<T>) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(Object.keys(filterField))
  };


  return (
      <form onSubmit={handleSubmit} className={style.filter_form}>
        <div className={style.filter_inputs}>
          {Object.keys(filterField).map((filter, key) => (
            <FormField
              key={key}
              label={filter}
              type={filter}
              sizeInput="md"
              value={filterField}
              onChange={function (value) {
                setSelectedFilter(value);
              }}
            />
          ))}
        </div>
        <div className={style.submit_filter}>
          <a>
            Undo Filter
          </a>
          <Button size={'sm'}>Filter</Button>
        </div>
      </form>
  )
}

