import Image from 'next/image'

import { Container } from '@/components/default/container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: '¿Qué tipos de fertilizantes ofrece BC Fertilis?',
      answer:
        'Ofrecemos una amplia gama de fertilizantes, incluyendo orgánicos, minerales y foliares, adaptados a las necesidades de diferentes cultivos.',
    },
    {
      question: '¿Cómo puedo realizar un pedido?',
      answer: 'Puedes realizar un pedido directamente en nuestro sitio web o contactando a nuestro equipo de ventas.',
    },
    {
      question: '¿BC Fertilis realiza envíos a todo el país?',
      answer:
        'Sí, hacemos envíos a nivel nacional, asegurando que nuestros productos lleguen a tu puerta en el menor tiempo posible.',
    },
  ],
  [
    {
      question: '¿Cómo puedo obtener asesoramiento sobre qué fertilizante usar?',
      answer:
        'Nuestro equipo de agrónomos está disponible para ayudarte a seleccionar el fertilizante más adecuado según tu tipo de cultivo y las condiciones de tu suelo.',
    },
    {
      question: '¿BC Fertilis ofrece productos ecológicos?',
      answer:
        'Sí, contamos con una línea completa de fertilizantes ecológicos certificados para quienes buscan opciones más sostenibles.',
    },
    {
      question:
        '¿Cuál es el tiempo de entrega habitual para un pedido?',
      answer:
        'El tiempo de entrega puede variar según la ubicación, pero generalmente nuestros pedidos se entregan dentro de 3 a 5 días hábiles.',
    },
  ],
  [
    {
      question: '¿Ofrecen descuentos por compras al por mayor?',
      answer:
        'Sí, ofrecemos descuentos especiales para compras al por mayor. Contacta a nuestro equipo de ventas para obtener más información.',
    },
    {
      question: '¿BC Fertilis ofrece garantías en sus productos?',
      answer: 'Sí, garantizamos la calidad de nuestros productos y ofrecemos devoluciones si no estás satisfecho.',
    },
    {
      question: '¿Cómo puedo contactar al servicio de atención al cliente?',
      answer:
        'Puedes contactarnos a través de nuestro formulario en línea o llamando directamente a nuestra línea de atención al cliente.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-secondary-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-secondary-900 sm:text-4xl"
          >
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-lg tracking-tight text-secondary-700">
            Si no encuentras lo que buscas, envía un correo a nuestro equipo de soporte y te responderemos a la brevedad.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-secondary-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-secondary-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
