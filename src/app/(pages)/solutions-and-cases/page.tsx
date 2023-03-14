import Styles from './solutions-and-cases.module.css'
import CommonStyles from '@/styles/common.module.css'
import teste from '@/assets/teste.png'

import { Card } from '@/components/Card'

export const metadata = {
  title: 'Soluçõe e Cases',
}

export default function SolutionsAndCases() {
  return (
    <main className={Styles.container}>
      <section className={Styles.cover}>
        <h1 className={CommonStyles.heading}>
          Transformamos o impossível em realidade
        </h1>
      </section>

      <section>
        <h1 className={CommonStyles.title}>Um pouco do nosso trabalho</h1>
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
      </section>

      <section>
        <div className={Styles.cards}>
          <Card
            title="Lorem ipsum dolor sit amet consectetur. Arcu at eget turpis a."
            subtitle="Lorem ipsum dolor sit amet consectetur. Sit egestas in sed faucibus amet vitae sit."
            image={teste}
          />
          <Card
            title="Lorem ipsum dolor sit amet consectetur. Arcu at eget turpis a."
            subtitle="Lorem ipsum dolor sit amet consectetur. Sit egestas in sed faucibus amet vitae sit."
            image={teste}
          />
          <Card
            title="Lorem ipsum dolor sit amet consectetur. Arcu at eget turpis a."
            subtitle="Lorem ipsum dolor sit amet consectetur. Sit egestas in sed faucibus amet vitae sit."
            image={teste}
          />
          <Card
            title="Lorem ipsum dolor sit amet consectetur. Arcu at eget turpis a."
            subtitle="Lorem ipsum dolor sit amet consectetur. Sit egestas in sed faucibus amet vitae sit."
            image={teste}
          />
        </div>
      </section>
    </main>
  )
}
