import { useState } from "react";
import {Modal} from 'react-bootstrap'
import styles from './network.module.scss'

const Network = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className={`nav-item`}>
                <img alt="" src={`${process.env.assetPath}/assets/icons/network2.ico`} />
            </div>
            <Modal className={`nav-modal`} show={show} onHide={() => setShow(false)} animation={false} keyboard={false}>
                <Modal.Body className={styles['modal-content']}>
                   
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Network
