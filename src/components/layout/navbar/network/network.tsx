import { useState } from 'react'
import { Modal, Row, Col } from 'react-bootstrap'
import styles from './network.module.scss'

interface ItemNetWorkProps {
    label: string
    active: boolean
    onClick? : any
}

const NETWORKS = [
    {
        label: 'Public wifi',
        active: false
    },
    {
        label: 'Public wifi',
        active: false
    },
    {
        label: 'Public wifi',
        active: false
    },
    {
        label: 'Public wifi',
        active: false
    }
]

const NetworkItem = ({ label, active }: ItemNetWorkProps) => {
    return (
        <Row>
            <Col md="2">
                <img alt="" src={`${process.env.assetPath}/assets/icons/network.ico`} />
            </Col>
            <Col md="10">
                <div className={styles.name}>{label}</div>
                <div className={styles.status}>Secured</div>
            </Col>
        </Row>
    )
}

const Network = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className={`nav-item`} onClick={() => setShow(true)}>
                <img alt="" src={`${process.env.assetPath}/assets/icons/network2.ico`} />
            </div>
            <Modal className={`nav-modal`} show={true} onHide={() => setShow(false)} animation={false} keyboard={false}>
                <Modal.Body className={styles['modal-content']}>
                    <div>
                        {NETWORKS.map(({ label, active }: ItemNetWorkProps) => (
                            <NetworkItem label={label} active={active} />
                        ))}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Network
