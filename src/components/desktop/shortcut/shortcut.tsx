import styles from './shortcut.module.scss'

interface ShortcutProps {
    icon: string
    label: string
    active?: boolean
    onClick: any
}

const Shortcut = ({ icon, label, active, onClick }: ShortcutProps) => {
    return (
        <div onClick={() => onClick(label)} className={`${styles.shortcut} ${active ? styles.active : ''}`}>
            <img src={icon} alt="" />
            <p>{label}</p>
        </div>
    )
}

export default Shortcut
