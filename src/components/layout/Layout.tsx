
import styles from './layout.module.scss'
import Navbar from './navbar/navbar'


const Layout = ({ children }: any) => {
    return (
        <div className={styles.wrapper}>
         {children}
        <Navbar />
        
        </div>
    );
};

export default Layout;
