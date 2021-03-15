import styles from './switch-language.module.scss'
import { Modal, Row, Col } from 'react-bootstrap'
import { useState } from 'react';

const SwitchLanguage = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className={`nav-item`} onClick={() => setShow(true)}> ENG
            </div>
            <Modal

                className={`nav-modal`}
                show={show}
                onHide={() => setShow(false)}
                animation={false}
                keyboard={false}
            >
                <Modal.Body className={styles['modal-content']}>
                    <div className={styles.item}>
                        <Row>
                            <Col md="3" className={styles.title}>ENG</Col>
                            <Col md="9" className={styles.text}>English (United States) <br /> US Keyboard</Col>
                        </Row>
                    </div>
                    <div className={styles.item}>
                        <Row >
                            <Col md="3" className={styles.title}>VIE</Col>
                            <Col md="9" className={styles.text}>Vietnamese  <br /> Vietnamese Telxe</Col>
                        </Row>
                    </div>

                    <hr />
                    <div className={styles.item}>
                        <Row >
                            <Col md="3" className={styles.title}>VIE</Col>
                            <Col md="9" className={styles.text}>Language references </Col>
                        </Row>
                    </div>
                </Modal.Body>

            </Modal>
        </>

    )

}

export default SwitchLanguage