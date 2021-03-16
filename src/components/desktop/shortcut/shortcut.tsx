interface ShortcutProps {
    icon: string
    label: string
}

const Shortcut = ({ icon, label }: ShortcutProps) => {
    return (
        <div>
            <img src={icon} alt="" />
            <p>{label}</p>
        </div>
    )
}

export default Shortcut
