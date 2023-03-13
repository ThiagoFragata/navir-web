import Image from 'next/image'
import Styles from './card.module.css'

interface CardProps {
  title: string
  subtitle: string
  image: string | any
}

export function Card({ image, subtitle, title }: CardProps) {
  return (
    <div className={Styles.cardVertical}>
      <Image
        className={Styles.img}
        src={image}
        width={340}
        alt="Picture of the author"
      />
      <div className={Styles.information}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}
