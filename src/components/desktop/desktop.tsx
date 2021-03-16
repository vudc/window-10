import Shortcut from './shortcut/shortcut'

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
    return (
        <div>
            {shortcuts.map((elt, index) => (
                <Shortcut key={index} icon={elt.icon} label={elt.label} />
            ))}
        </div>
    )
}

export default Desktop
