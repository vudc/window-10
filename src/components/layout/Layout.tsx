import Header from './header';
import styles from './layout.module.scss'


const Layout = ({ children }: any) => {
    return (
        <div className={styles.wrapper}>
            <Header />
    
        </div>
    );
};

export default Layout;
