'use client'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Styles from './contact.module.css'
import CommonStyles from '@/styles/common.module.css'
import Image from 'next/image'

import contact from '@/assets/contact.png'

const schema = yup
  .object({
    name: yup.string().required('Esse campo é obrigátorio!'),
    email: yup
      .string()
      .email('E-mail deve ser um e-mail válido')
      .required('Esse campo é obrigátorio!'),
    subject: yup.string().required('Esse campo é obrigátorio!'),
    message: yup.string().required('Esse campo é obrigátorio!'),
  })
  .required()

type FormData = yup.InferType<typeof schema>

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: FormData) => {
    alert('Messagem enviada com sucesso!')
    console.log(data)
  }

  return (
    <main className={Styles.container}>
      <section className={Styles.contact}>
        <Image
          priority
          className={CommonStyles.img}
          src={contact}
          alt="Picture of the author"
        />

        <form className={Styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className={CommonStyles.title}>Fale conosco</h1>
            <p className={CommonStyles.paragraph}>
              Olá, tudo bem? Criamos este canal para facilitar a sua comunicação
              com os departamentos do laboratório. Caso tenha dúvidas ou queira
              informações, fique à vontade para nos enviar. Ficaremos felizes em
              responder.
            </p>
          </div>

          <fieldset className={Styles.formGroup}>
            <div className={Styles.inputGroup}>
              <label htmlFor="name">Nome</label>
              <input id="name" {...register('name')} />
              <p>{errors.name?.message}</p>
            </div>

            <div className={Styles.inputGroup}>
              <label htmlFor="email">E-mail</label>
              <input id="email" {...register('email')} />
              <p>{errors.email?.message}</p>
            </div>
          </fieldset>

          <div className={Styles.inputGroup}>
            <label htmlFor="subject">Assunto</label>
            <input id="subject" {...register('subject')} />
            <p>{errors.subject?.message}</p>
          </div>

          <div className={Styles.inputGroup}>
            <label htmlFor="message">Messagem</label>
            <textarea id="message" {...register('message')} />
            <p>{errors.message?.message}</p>
          </div>

          <input type="submit" />
        </form>
      </section>
    </main>
  )
}
