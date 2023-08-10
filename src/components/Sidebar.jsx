import { Bell, HouseSimple } from '@phosphor-icons/react'

import logo from '../assets/Logotipo.png';
import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <div className={styles.bartop}>
                <img className={styles.logo} src={logo}/>
                <button>
                    <HouseSimple color='white' size={50} />
                </button>
                <button>
                    <Bell className={styles.bell} color='white' size={30} />
                </button>
            </div>
            <div className={styles.barbottom}>
            ,<img className={styles.avatar}
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=50" />
            </div>
        </aside> 
    )
}