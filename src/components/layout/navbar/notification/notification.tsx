import { useState } from 'react'
import styles from './notification.module.scss'
import { Modal, Col, Row } from 'react-bootstrap'
import UltilityItem  from 'components/utility-item'

interface Utility {
    icon: string
    label: string
    active: boolean
}

const items: Utility[] = [
    {
        icon: '/assets/icons/smartphone-tablet.svg',
        label: 'Tablet mode',
        active: true
    },
    {
        icon: '/assets/icons/network.ico',
        label: 'Network',
        active: true
    },
    {
        icon: '/assets/icons/settings.svg',
        label: 'Settings',
        active: true
    },
    {
        icon: '/assets/icons/share.svg',
        label: 'Nearby sharing',
        active: true
    },
    {
        icon: '/assets/icons/flight.ico',
        label: 'Flight mode',
        active: true
    },
    {
        icon: '/assets/icons/moon.svg',
        label: 'Focus assist',
        active: true
    },
    {
        icon: '/assets/icons/pin.svg',
        label: 'Location',
        active: true
    },
    {
        icon: '/assets/icons/flight.ico',
        label: 'Flight mode',
        active: true
    },
    {
        icon: '/assets/icons/flight.ico',
        label: 'Flight mode',
        active: true
    },
    {
        icon: '/assets/icons/flight.ico',
        label: 'Flight mode',
        active: true
    },
    {
        icon: '/assets/icons/flight.ico',
        label: 'Flight mode',
        active: true
    },

    {
        icon: '/assets/icons/flight.ico',
        label: 'Flight mode',
        active: true
    },
    {
        icon: '/assets/icons/flight.ico',
        label: 'Flight mode',
        active: true
    },
    {
        icon: '/assets/icons/flight.ico',
        label: 'Flight mode',
        active: true
    },
    {
        icon: '/assets/icons/flight.ico',
        label: 'Flight mode',
        active: true
    },
    {
        icon: '/assets/icons/flight.ico',
        label: 'Flight mode',
        active: true
    }
]

const Notification = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className={`nav-item ${styles.notification}`} onClick={() => setShow(true)}>
                <img alt="" src={`${process.env.assetPath}/assets/icons/sms.svg`} />
            </div>
            <Modal className={`nav-modal`} show={show} onHide={() => setShow(false)} animation={false} keyboard={false}>
                <Modal.Body className={styles['modal-content']}>
                    <div className={styles['modal-wrapper']}>
                        <p className={styles.title}>No new notifications</p>
                        <div className={styles['utility-container']}>
                            <p>Collapse</p>
                            
                            <Row noGutters>
                                {items.map((elt: Utility, index: number) => (
                                    <Col md="3" key={index}>
                                        <UltilityItem {...elt}/>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Notification
