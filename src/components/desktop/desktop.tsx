import Shortcut from './shortcut/shortcut'
import styles from './desktop.module.scss'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Image from 'next/image'

const shortcuts = [
    {
        icon: '/assets/desktop/recycle-bin.ico',
        label: 'Recycle bin'
    },
    {
        icon: '/assets/desktop/this-pc.ico',
        label: 'This PC'
    }
]

const Desktop = () => {
    const [activeShortcut, setActiveShortcut] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onShortcutClick = (label: string) => {
        setActiveShortcut(label)
    }

    return (
        <div className={styles.desktop}>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                animation={false}
                size='xl'

            >
                <div className='py-1 shadow-2xl'>
                    <div className='px-1'>
                        <button className=""> <Image className='inline-block mr-1' src="/assets/icons/imageres_36.ico" width={20} height={20} alt="" /></button> |
                        <button className="ml-2 hover:bg-sky-700">  <Image className='inline-block' src="/assets/icons/imageres_5367.ico" width={20} height={20} alt="" /></button>
                        <button className="hover:bg-sky-700">  <Image className='inline-block' src="/assets/icons/folder_win10.png" width={20} height={20} alt="" /></button> |
                        <span className='ml-4'> This PC</span>
                    </div>

                    <div className='flex mt-1'>
                        <div className='px-4 py-1 bg-blue-600 text-white'>File</div>
                        <div className='px-4 py-1 bg-slate-200 border-t border-r border-gray-300'>Computer </div>
                        <div className='px-4 py-1'>View</div>
                    </div>

                </div>
            </Modal>
            {shortcuts.map((elt, index) => (
                <Shortcut
                    onDoubleClick={() => setShow(true)}
                    onClick={onShortcutClick}
                    key={index}
                    icon={process.env.assetPath + elt.icon}
                    label={elt.label}
                    active={activeShortcut === elt.label}
                />
            ))}
        </div>
    )
}

export default Desktop
