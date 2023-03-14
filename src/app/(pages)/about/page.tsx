import Image from 'next/image'
import Styles from './about.module.css'
import CommonStyles from '@/styles/common.module.css'

import coverAbout from '@/assets/about.png'

export const metadata = {
  title: 'Quem Somos',
}

export default function About() {
  return (
    <main className={Styles.container}>
      <section className={Styles.cover}>
        <h1 className={CommonStyles.heading}>Prazer, somos o Lab N.A.V.I.R</h1>
        <Image
          className={CommonStyles.img}
          src={coverAbout}
          alt="Picture of the author"
        />
      </section>

      <section>
        <h1 className={CommonStyles.title}>Nossa história</h1>
        <p className={CommonStyles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Cras nibh venenatis et nunc
          curabitur eu euismod tortor. Mauris in gravida tincidunt leo non
          pellentesque adipiscing purus in. At viverra mi nisl eget. Mauris amet
          mattis ipsum egestas. Elit platea a faucibus sagittis dolor morbi.
          Etiam arcu eros molestie convallis dolor urna. Sit dolor odio faucibus
          tincidunt malesuada. Integer ullamcorper sem ornare sed. Augue cursus
          eu luctus nisi aenean mi tortor. Volutpat lacus pellentesque aliquet
          in fames. Aliquam nec blandit eu scelerisque. Rutrum sit lectus quam
          dictum odio vel in diam ultrices.
        </p>
        <p className={CommonStyles.paragraph}>
          Lobortis placerat ipsum et tincidunt velit adipiscing vel sagittis.
          Varius aenean eget cras malesuada id. Tortor id rhoncus aliquet at.
          Odio senectus enim bibendum elementum in natoque consectetur tortor.
          Et ac a eget et. Tempor vehicula nisl ultrices mattis sed magna amet.
          Vel sed lectus feugiat tortor scelerisque. Vitae cursus blandit tempus
          sem ipsum velit volutpat neque consequat. Mattis senectus viverra vel
          aliquet vel in feugiat. Quis massa parturient lacus non proin vel
          faucibus fermentum. Pharetra cras dui sit eget tempor eros. Sem neque
          ut mollis tincidunt. Semper in porta purus at. Sollicitudin posuere
          magna molestie iaculis nisl faucibus porttitor quis turpis. Integer
          condimentum turpis cursus id scelerisque nibh ut neque. Consequat vel
          in accumsan ut id pharetra. Eget donec lacus nec rutrum sem amet arcu.
          Euismod at netus ultrices sed metus tellus. Egestas maecenas donec et
          nunc sit nec. At malesuada sed quis at eu nibh est faucibus et. Mauris
          dignissim venenatis blandit eget laoreet sit tristique. Amet justo id
          eget volutpat non sagittis. Ultricies id arcu pretium id nisl amet
          urna purus. Auctor tempus urna nullam ut at. Orci quis tellus aliquet
          pretium quis vulputate. Sit curabitur consequat sit tristique blandit
          urna nulla quis urna. Nunc tincidunt tristique hendrerit luctus ac.
          Viverra enim tincidunt turpis aliquam turpis vitae. Aliquet eget dui
          quisque aliquam nibh sit mi hendrerit. Velit amet etiam
        </p>
        <p className={CommonStyles.paragraph}></p>
      </section>

      <div className={CommonStyles.flex}>
        <section>
          <h1 className={CommonStyles.title}>Missão</h1>
          <p className={CommonStyles.paragraph}>
            Lorem ipsum dolor sit amet consectetur. Cras nibh venenatis et nunc
            curabitur eu euismod tortor. Mauris in gravida tincidunt leo non
            pellentesque adipiscing purus in. At viverra mi nisl eget. Mauris
            amet mattis ipsum egestas.
          </p>
        </section>

        <section>
          <h1 className={CommonStyles.title}>Valores</h1>
          <p className={CommonStyles.paragraph}>
            Elit platea a faucibus sagittis dolor morbi. Etiam arcu eros
            molestie convallis dolor urna. Sit dolor odio faucibus tincidunt
            malesuada. Integer ullamcorper sem ornare sed. Augue cursus eu
            luctus nisi aenean mi tortor. Volutpat lacus pellentesque aliquet in
            fames. Aliquam nec blandit eu scelerisque. Rutrum sit lectus quam
            dictum odio vel in diam ultrices.
          </p>
        </section>
      </div>
    </main>
  )
}
