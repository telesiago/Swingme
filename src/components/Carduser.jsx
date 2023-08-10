import { User, MapPin, Eye, BookmarkSimple } from '@phosphor-icons/react';
import styles from './Carduser.module.css';


export function Carduser(){
    return(
        <div className={styles.wrapper}>
            <img className={styles.avatar} 
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11bGhlciUyMHBlcmZpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=50'
                />
            <strong>anita_98</strong>
            <span>24 anos</span>

            <div className={styles.authorInfo}>
                
                <span><User size={15}/> Mulher</span>
                <span><MapPin size={15}/> São Paulo/SP</span>
                <span><Eye size={15}/> Casais (Ele/Ela), Homens</span>
                <span><BookmarkSimple size={15}/> Ingressou em Maio de 2023</span>
            </div>

            <footer className={styles.footerInfo}>
                <div>
                    <span>nível</span>
                    <span>3</span>
                </div>
                <div>
                    <span>disponibilidade</span>
                    <span>hoje</span>
                </div>
                <div>
                    <span>local de encontro</span>
                    <span>em casa</span>
                </div>
            </footer>

        </div>
    )
}