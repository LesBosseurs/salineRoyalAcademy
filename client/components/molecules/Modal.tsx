import React from 'react';
import style from '@/styles/components/molecules/Modal.module.scss';
import Cross from '@/public/icons/others/cross';

type ModalProps = {
  title:string,
  setOpenModal: (state: boolean) => void;
  open: boolean;
  children: React.ReactNode;
};

export default function Modal({ title, setOpenModal, open, children }: ModalProps) {
  if (!open) {
    return '';
  }
  return (
    <div className={style.modal}>
      <div className={style.modal_card}>
        <div className={style.close_icon} onClick={() => setOpenModal(false)}>
          <Cross fill={'#000'} />
        </div>
        <div className={style.separator}></div>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}
