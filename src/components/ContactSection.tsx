import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              If you need technical support or have customized requirements, please contact us
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Contact us
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10 flex md:flex-row flex-col items-start justify-center gap-8">
              <div className=' flex flex-col items-start justify-center gap-2'>
                <h3 className="font-display text-base font-semibold text-white">
                  Our offices
                </h3>
                <Offices
                  invert
                  className="grid grid-cols-1 gap-8 sm:grid-cols-2"
                />
              </div>
              <div className=' flex flex-col text-white items-start justify-center gap-2'>
                <h3 className="text-base text-nowrap font-semibold ">
                  Email
                </h3>
                <div className=' flex items-start flex-col justify-center'>
                  <span className=' text-neutral-300 text-nowrap'>Email: service@insrealm.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
