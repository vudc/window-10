
import styles from './ultility-item.module.scss'

const UltilityItem = ({ icon, label }) => {
    return (
        <div className={styles.utility}>
            <img src={`${process.env.assetPath}${icon}`} /> <p>{label}</p>
        </div>
    )
}

export default UltilityItem
