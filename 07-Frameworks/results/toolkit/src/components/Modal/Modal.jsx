import React, {useEffect, useMemo} from 'react';
import {createPortal} from "react-dom";

const modalElement = document.getElementById('modal')

function Modal({children, closeModal, isModal}) {
    const element = useMemo(() => {
        document.createElement('div')
    }, [])

    useEffect(() => {
        if(isModal) {
            modalElement.appendChild(element)
            return () => {
                modalElement.removeChild(element)
            }
        }
    }, [])

    if(isModal) {
        return createPortal(
            <div className='h-screen w-screen bg-slate-300/[.6] fixed inset-0' onClick={closeModal}>
                <div  className='flex items-center justify-center flex-col'>
                    {children}
                </div>
            </div>,
            modalElement
        );
    }

    return null
}

export default Modal;