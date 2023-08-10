import React from "react";
import style from "@/styles/components/Modal.module.scss";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Cross from "@/public/icons/cross";

type ModalProps = {
    setOpenModal: (b: boolean) => void;
    open: boolean;
    children: React.ReactNode;
};

export default function Modal({setOpenModal, open, children}: ModalProps){
    //console.log(open);
    if(!open){
        return "";
    }
    return(
        <div className={style.modal}>
            <div  className={style.modal_card}>
                <div className={style.close_icon} onClick={() => setOpenModal(false)}>
                    <Cross></Cross>
                </div>
                <div className={style.separator}></div>
                <h2>Filter</h2>
                {children}
            </div>
        </div>)
}