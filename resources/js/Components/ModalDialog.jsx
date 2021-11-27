import React, { Children } from 'react'

export default function ModalDialog({ trigger, title, children, size }) {
    return (

        <div ref={trigger} className="modal" fade="true" tabIndex="-1" >
            <div className={`modal-dialog modal-${size} modal-dialog-centered`} >
                <div className="modal-content ">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>

                </div>
            </div>
        </div>

    )
}
