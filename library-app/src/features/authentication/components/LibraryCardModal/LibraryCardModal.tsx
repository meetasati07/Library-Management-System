import React from "react";
import { AppDispatch } from "../../../../redux/ReduxStore";
import { useDispatch } from "react-redux";
import { setDisplayLibraryCard } from "../../../../redux/slices/ModalSlices";
import { Modal } from "../../../../components";
import { RegisterLibraryCardForm } from "../RegisterLibraryCardForm/RegisterLibraryCardForm";

export const LibraryCardModal:React.FC = () => {
    const dispatch:AppDispatch = useDispatch();

    const closeModal = () => {
        dispatch(setDisplayLibraryCard(false))
    }

    return <Modal content={<RegisterLibraryCardForm />} toggleModal={closeModal} />
}