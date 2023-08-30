import FormField from "@/components/molecules/FormField";
import Search from "@/public/icons/search";
import Button from "@/components/atoms/Button";
import Modal from "@/components/molecules/Modal";
import FormFilter from "@/components/organisms/FormFilter";
import {useState} from "react";
import style from "@/styles/components/organisms/FilterSection.module.scss";
import FilterInstruments from "@/components/molecules/FilterInstruments";

type FilterSectionProps<T extends Record<string, any>> = {
  haveFilter: boolean,
  filterFields: T;
  setSelectedFilter: (value: T ) => void;
}

export default function FilterSection<T extends Record<string, any>>({haveFilter, filterFields, setSelectedFilter}: FilterSectionProps<T>) {

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
        {haveFilter ? (
          <>
            <div
              className={style.filter_button}
              onClick={() => handleOpen(true)}
              style={openModal ? { zIndex: 0 } : { zIndex: 1 }}
            >
              <Button size={'sm'}>Filter</Button>
            </div>
            <Modal title={"Filter"} setOpenModal={handleOpen} open={openModal}>
              <FormFilter setSelectedFilter={setSelectedFilter} filterFields={filterFields} />
            </Modal>
          </>
        ) : (
          ''
        )}
      </div>
      <FilterInstruments navigation={true}/>
    </section>
  );
}