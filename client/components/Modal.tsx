import React from "react";
import style from "@/styles/components/Modal.module.scss";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Cross from "@/public/icons/cross";

type ModalProps = {
    setOpen: (b: boolean) => void;
    open: boolean;
    children: React.ReactNode;
};

export default function Modal({setOpen, open, children}: ModalProps){
    console.log(open);
    if(!open){
        return "";
    }
    return(
        <div className={style.background}>
            <div  className={style.modal_card}>
                <div className={style.close_icon} onClick={() => setOpen(false)}>
                    <Cross></Cross>
                </div>
                <div className={style.separator}></div>
                <h2>Filter</h2>
                {children}
            </div>
        </div>
    )
}