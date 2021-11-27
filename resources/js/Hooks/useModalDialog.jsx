import React, { useRef } from 'react'
import { Modal } from 'bootstrap';
export default function useModalDialog() {

    const modal = useRef(null);
    // cara open modal
    // const openModal = () => {
    //     new Modal(modal.current).show();
    // }

    // cara menutup modal / hide
    // const closeModal = () => Modal.getInstance(modal.current).hide();

    return [
        // open close bawaan dari modal dialog nya sendiri
        open = () => new Modal(modal.current).show(),
        close = () => Modal.getInstance(modal.current).hide(),
        modal
    ];
}
