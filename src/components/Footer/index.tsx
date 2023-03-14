import Link from 'next/link'
import Styles from './footer.module.css'

import {
  BsBookmarkHeartFill,
  BsInstagram,
  BsLinkedin,
  BsMenuAppFill,
  BsPinMapFill,
} from 'react-icons/bs'

export function Footer() {
  return (
    <footer className={Styles.container}>
      <div className={Styles.content}>
        <div className={Styles.menu}>
          <h2>
            <BsMenuAppFill /> Menu
          </h2>

          <Link href="/">Home</Link>
          <Link href="/about">Quem somos</Link>
          <Link href="/solutions-and-cases">Soluções e cases</Link>
          <Link href="/contact">Contato</Link>
        </div>

        <div className={Styles.map}>
          <div className={Styles.address}>
            <h2>
              <BsPinMapFill /> Onde ficamos
            </h2>
            <p>R. Nossa Sra. do Rosário, 3863,Tiradentes,</p>
            <p>Itacoatiara - Amazonas, 69100-000</p>
            <p>Instituto de Ciências Exatas e Tecnologia</p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8168006628134!2d-58.43409208462772!3d-3.143012741357536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926f544683d24e45%3A0xc4edbccd8574a7df!2sBloco%20A%20-%20Campus%20I%20-%20UFAM%2FICET!5e0!3m2!1spt-BR!2sbr!4v1678765408174!5m2!1spt-BR!2sbr"
            // width="400"
            height="250"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className={Styles.social}>
          <h2>
            <BsBookmarkHeartFill /> Nossas redes
          </h2>

          <div>
            <Link
              href="https://www.linkedin.com/company/navir-ufam/"
              target="_blank"
            >
              <BsLinkedin size="2em" />
            </Link>
            <Link href="https://www.instagram.com/navir_ufam/" target="_blank">
              <BsInstagram size="2em" />
            </Link>
          </div>
        </div>
      </div>
      <small className={Styles.copyright}>
        Desenvolvido por{' '}
        <Link href="https://tucandev.com.br" target="_blank">
          tucandev
        </Link>{' '}
        - Todos direitos reservados 2023
      </small>
    </footer>
  )
}
