import { useState } from 'react'
import { Modal, Row, Col } from 'react-bootstrap'
import styles from './network.module.scss'

interface ItemNetWorkProps {
    key: number
    label: string
    active?: boolean
    onClick?: any
    className?: string
    contentClassName?: string
}

const NETWORKS = [
    {
        key: 1,
        label: 'COFFEE HOUSE',
        active: false
    },
    {
        key: 2,
        label: 'Public_wifi',
        active: false
    },
    {
        key: 3,
        label: 'UNKNOWN',
        active: false
    },
    {
        key: 4,
        label: 'private_wifi',
        active: false
    },
    {
        key: 5,
        label: 'UNKNOWN',
        active: false
    },
    {
        key: 6,
        label: 'private_wifi',
        active: false
    },
    {
        key: 7,
        label: 'UNKNOWN',
        active: false
    },
    {
        key: 8,
        label: 'private_wifi',
        active: false
    }
]

const NetworkItem = ({ label, active, className, contentClassName }: ItemNetWorkProps) => {
    return (
        <Row className={className || ''} noGutters>
            <Col md="1">
                <img alt="" src={`${process.env.assetPath}/assets/icons/network.ico`} />
            </Col>
            <Col md="11" className={contentClassName}>
                <div className={styles.name}>{label}</div>
                <div className={styles.status}>{active ? 'Connected' : 'Secured'}</div>
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
            <Modal className={`nav-modal`} show={show} onHide={() => setShow(false)} animation={false} keyboard={false}>
                <Modal.Body className={styles['modal-content']}>
                    <div>
                        <NetworkItem label="NAME" className={styles.item} contentClassName={styles.content} key={0} active={true} />

                        <hr />

                        {NETWORKS.map(({ label, active, key }: ItemNetWorkProps) => (
                            <NetworkItem
                                className={styles.item}
                                contentClassName={styles.content}
                                label={label}
                                active={active}
                                key={key}
                            />
                        ))}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Network
