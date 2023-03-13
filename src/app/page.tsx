import Image from 'next/image'
import profilePic from '@/assets/cover-home.png'
import vision from '@/assets/vision.png'
import ia from '@/assets/ia.png'
import iot from '@/assets/iot.png'
import robotic from '@/assets/robotic.png'

import Styles from './home.module.css'
import CommonStyles from '@/styles/common.module.css'
import { Card } from '@/components/Card'

export default function Home() {
  return (
    <main className={Styles.container}>
      <section className={Styles.cover}>
        <h1 className={CommonStyles.heading}>
          Olá, Seja bem-vindo ao Núcleo de Automação, Visão, Inteligência
          Artificial e Robótica
        </h1>
        <Image
          className={CommonStyles.img}
          src={profilePic}
          alt="Picture of the author"
        />
      </section>

      <section>
        <h1 className={CommonStyles.title}>Somos especialistas em inovação</h1>
        <p className={CommonStyles.paragraph}>
          Isso está em nosso DNA, aqui oferecemos soluções tecnológicas para o
          mercado local e global, por meio de menter brilhantes que atuam
          conosco com o desejo de transformar o imporssivel em realiadade.
          Confira nossas soluções
        </p>

        <div className={Styles.cards}>
          <Card
            title="Visão Computacional: revolucionando a forma como o mundo é
              percebido"
            subtitle="Desvendando o poder da análise de imagens e vídeos por meio da
              tecnologia."
            image={vision}
          />
          <Card
            title=" A revolução IoT: Transformando
              o mundo conectado"
            subtitle="Explorando as possibilidades e desafios da Internet das coisas."
            image={iot}
          />
          <Card
            title="Robótica: a evolução da automação"
            subtitle="Explorando as aplicações e desafios da robótica na indústria e na sociedade"
            image={robotic}
          />
          <Card
            title="Inteligência Artificial: mudando o futuro da tecnologia"
            subtitle="Entendendo a evolução e os desafios da IA na automação de processos e na tomada de decisões"
            image={ia}
          />
        </div>
      </section>

      <section>
        <h1 className={CommonStyles.title}>Parceiros</h1>
        <p className={CommonStyles.paragraph}>
          Veja quem faz parte da nossa história e inova conosco
        </p>
      </section>
    </main>
  )
}
