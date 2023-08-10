
import { DotsThreeOutline, Eye, Image, LockKey, Star } from '@phosphor-icons/react';
import styles from './App.module.css';
import { Carduser } from './components/Carduser';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';

function App() {

  return (
    <section className={styles.wrapper}>
      <Sidebar className={styles.sidebar}/>
      <Header className={styles.header}/>
      <main className={styles.main}>
          <p><Star color='white' size={20} weight='fill'/> Destaque</p>
        <div className={styles.destaque}>
          <Carduser />
          <Carduser />
        </div>
        <div className={styles.mainContent}>
          <Carduser />
          <Carduser />
        </div>
      </main>
      <main className={styles.content}>
        <header>
          <div className={styles.contentAuthor}>
            <strong>Anita_98</strong>
            <span>24 anos</span>
          </div>
          <div>
            <span>Opções</span>
            <DotsThreeOutline color='#8d8d99' weight='fill' size={20}/>

          </div>
        </header>
        <div className={styles.infoUser}>
          
          <img className={styles.avatar} 
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11bGhlciUyMHBlcmZpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=50'
                />
          <p>Hey! Sou Anita e gosto muito de 
            momentos a dois e três, tudo 
            dependendo do combinado hehehe. Se 
            te interessou, me adiciona aqui para eu 
            saber onde será meu próximo role. 😎</p>
        </div>
        <div className={styles.footerInfoUser}>
          <div>
            <span>3</span>
            <span>nível</span>
          </div>
          <div>
            <span>2045</span>
            <span>amigos</span>
          </div>
          <div>
            <span>1mi</span>
            <span>visualizações</span>
          </div>
          <div>
            <span>14</span>
            <span>recomendações</span>
          </div>
        </div>

        <div className={styles.btnDetail}>
          <Image size={30} />
          <LockKey size={30}/>
          <Eye size={30}/>
        </div>

        <div className={styles.contentImages}>
            <img className={styles.itemImage} 
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11bGhlciUyMHBlcmZpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=50'
              />
            <img className={styles.itemImage} 
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11bGhlciUyMHBlcmZpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=50'
              />
            <img className={styles.itemImage} 
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11bGhlciUyMHBlcmZpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=50'
              />
            <img className={styles.itemImage} 
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11bGhlciUyMHBlcmZpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=50'
              />
            <img className={styles.itemImage} 
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11bGhlciUyMHBlcmZpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=50'
              />
            <img className={styles.itemImage} 
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11bGhlciUyMHBlcmZpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=50'
              />
        </div>
      </main>

    </section>
  )
}

export default App
