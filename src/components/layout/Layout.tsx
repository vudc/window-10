import styles from './layout.module.scss'
import Navbar from './navbar/navbar'

const Layout = ({ children }: any) => {
    return (
        <div style={{ backgroundImage: `url(${process.env.assetPath}/assets/images/background.jpg` }} className={styles.wrapper}>
            {children}
            <Navbar />
        </div>
    )
}

export default Layout
