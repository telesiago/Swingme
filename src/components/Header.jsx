import { FunnelSimple } from '@phosphor-icons/react';
import styles from './Header.module.css';

export function Header(){
    return(
        <div className={styles.wrapper}>
            <button title='Title'>
                <p>Pesquisar @ ou <FunnelSimple size={20}/></p>
            </button>
            <button title='Title'>
                <p>Feed</p>
            </button>
            <button title='Title'>
                <p>Publicar</p>
            </button>
        </div>
    )
}