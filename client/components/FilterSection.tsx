import FormField from "@/components/FormField";
import Search from "@/public/icons/search";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import FormFilter from "@/components/FormFilter";
import {useState} from "react";
import style from "@/styles/components/FilterSection.module.scss";

type FilterSectionProps<T extends Record<string, any>> = {
  filterFields: T;
  setSelectedFilter: (value: T ) => void;
}

export default function FilterSection<T extends Record<string, any>>({filterFields, setSelectedFilter}: FilterSectionProps<T>) {

  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpen = (toggle: boolean) => {
    setOpenModal(toggle);
  };

  return (
    <section className={style.section_filter}>
      <div className={style.search_and_filter_inputs}>
        <FormField
          label="search"
          type="search"
          sizeInput="md"
          placeholder="Search"
          icon={<Search fill={'#000'} />}
          value={filterFields}
          onChange={function (value) {
            setSelectedFilter(value);
          }}
        />
        <div
          className={style.filter_button}
          onClick={() => handleOpen(true)}
          style={openModal ? { zIndex: 0 } : { zIndex: 1 }}
        >
          <Button size={'sm'}>Filter</Button>
        </div>
        <Modal setOpenModal={handleOpen} open={openModal}>
          <FormFilter setSelectedFilter={setSelectedFilter} filterFields={filterFields} />
        </Modal>
      </div>
      <FormField
        label="search"
        type="search"
        sizeInput="md"
        placeholder="Search instrument component"
        value={filterFields}
        onChange={function (value) {
          setSelectedFilter(value);
        }}
      />
    </section>
  );
}