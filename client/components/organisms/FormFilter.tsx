import React, {FormEvent} from "react";
import style from "@/styles/components/molecules/FormFilter.module.scss";
import FormField from "@/components/molecules/FormField";
import Button from "@/components/atoms/Button";

type FormFilterProps<T extends Record<string, any>> = {
  filterFields: T;
  setSelectedFilter: (value: T ) => void;
}

export default function FormFilter<T extends Record<string, any>>({filterFields, setSelectedFilter}: FormFilterProps<T>) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(filterFields)
  };

  return (
      <form onSubmit={handleSubmit} className={style.filter_form}>
        <div className={style.filter_inputs}>
          {Object.keys(filterFields).map((filter, key) => (
            <FormField
              key={key}
              label={filter}
              type={filter}
              sizeInput="md"
              value={filterFields}
              onChange={function (value) {
                console.log(value);
                setSelectedFilter(value);
              }}
            />
          ))}
        </div>
        <div className={style.submit_filter}>
          <a
            /*
            TODO undo filter  not working : error TS2345 : setSelectedFilter(test) not type T
            onClick={function (value) {
              let test = {};
              for (let testKey in filterField) {
                test = {
                  ...test,
                  [testKey] : '',
                };
              }
              setSelectedFilter(test);
              console.log(test);
            }}*/
          >
            Undo Filter
          </a>
          <Button size={'sm'}>Filter</Button>
        </div>
      </form>
  )
}

