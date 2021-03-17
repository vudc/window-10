import { useState } from 'react'
import { Modal, Col, Row } from 'react-bootstrap'
import styles from './speaker.module.scss'

const Speaker = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className={`nav-item`} onClick={() => setShow(true)}>
                <img alt="" src={`${process.env.assetPath}/assets/icons/volume.svg`}/>
            </div>
            <Modal className={`nav-modal`} show={show} onHide={() => setShow(false)} animation={false} keyboard={false}>
                <Modal.Body className={styles['modal-content']}>
                    speaker
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Speaker
