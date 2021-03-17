import Shortcut from './shortcut/shortcut'
import styles from './desktop.module.scss'
import { useState } from 'react'

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

    const onShortcutClick = (label: string) => {
        console.log(label)
        setActiveShortcut(label)
    }

    return (
        <div className={styles.desktop}>
            {shortcuts.map((elt, index) => (
                <Shortcut onClick={onShortcutClick} key={index} icon={elt.icon} label={elt.label} active={activeShortcut === elt.label} />
            ))}
        </div>
    )
}

export default Desktop
