import './index.css'
function Modal({isModal, setModal}) {
    return (
        <div className={isModal ? "modal active" : "modal"} onClick={() => setModal(false)}>
            <div className={isModal ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
                You entered incorrect data
            </div>
        </div>
    )
}

export default Modal;