import { useState } from 'react'
import styles from './navbar.module.scss'
import SwichLanguage from './switch-language/switch-language'

const WINDOW_START_SRC = "/assets/icons/window.svg"
const WINDOW_START_HOVER_SRC = "/assets/icons/window-hover.svg"
const TASK_VIEW_SRC = "/assets/icons/task-view.svg"
const TASK_VIEW_HOVER_SRC = "/assets/icons/task-view.svg"

const Navbar = () => {
    
    const [windowSrc, setWindowSrc] = useState(WINDOW_START_SRC)
    const [taskViewSrc, setTaskViewSrc] = useState(TASK_VIEW_SRC)

    return (
        <div className={styles.wrapper}>

            <div className={styles.left}>
                {/* Window icon */}
                <div onMouseOver={()=>setWindowSrc(WINDOW_START_HOVER_SRC)} onMouseOut={()=>setWindowSrc(WINDOW_START_SRC)} className={styles['nav-item']}>
                    <img  src={windowSrc}/>
                </div>
                <div onMouseOver={()=>setTaskViewSrc(TASK_VIEW_HOVER_SRC)} onMouseOut={()=>setTaskViewSrc(TASK_VIEW_SRC)} className={styles['nav-item']}>
                    <img src={taskViewSrc} />
                </div>
            </div>
        
            <div className={styles.right}>
                <div className={`${styles['nav-item']} ${styles.language}`}><SwichLanguage /> </div>
                <div className={`${styles['nav-item']} ${styles.date}`}>
                    4:22 PM <br />
                    3/15/2021
                </div>

                <div className={styles.clear}>  </div>
            </div>
        </div>
    )
}

export default Navbar
