import Image from 'next/image'

import { Button } from '@/ui/button'
import { Container } from '@/components/default/container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-primary-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Mejora tu cosecha hoy
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Es hora de optimizar tu rendimiento agrícola. Compra nuestros fertilizantes
            para asegurar una cosecha abundante y saludable.
          </p>
          <Button href="/contact" color="white" className="mt-10">
            Obtén 6 meses de asesoría gratis
          </Button>
        </div>
      </Container>
    </section>
  )
}
