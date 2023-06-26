import styles from './shortcut.module.scss'

interface ShortcutProps {
    icon: string
    label: string
    active?: boolean
    onClick: (label: string) => void
    onDoubleClick?: (label: string) => void
}

const Shortcut = ({ icon, label, active, onClick, onDoubleClick }: ShortcutProps) => {
    return (
        <div
            onDoubleClick={() => { if (typeof onDoubleClick === 'function') onDoubleClick(label) }}
            onClick={() => onClick(label)}
            className={`${styles.shortcut} ${active ? styles.active : ''}`}
        >
            <img src={icon} alt="" />
            <p>{label}</p>
        </div>
    )
}

export default Shortcut
