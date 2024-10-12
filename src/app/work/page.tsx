import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import logoBrightPath from '@/images/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-dark.svg'
import logoGreenLife from '@/images/clients/green-life/logo-dark.svg'
import logoHomeWork from '@/images/clients/home-work/logo-dark.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-dark.svg'
import logoPhobia from '@/images/clients/phobia/logo-dark.svg'
import logoUnseal from '@/images/clients/unseal/logo-dark.svg'
import RTScale from "@/images/RTScale.png"
import brand1 from "@/images/brand/brand1.png"
import brand2 from "@/images/brand/brand2.png"
import brand3 from "@/images/brand/brand3.png"
import brand4 from "@/images/brand/brand4.png"
import brand5 from "@/images/brand/brand5.png"
import brand6 from "@/images/brand/brand6.png"
import brand7 from "@/images/brand/brand7.png"
import brand8 from "@/images/brand/brand8.png"
import RTPi from "@/images/product1.png"
import insrealm from "@/app/work/insrealm/image1.png"

import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
]
function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Star Products
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.reverse().map((caseStudy, i) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className={`grid grid-cols-3 gap-x-8 gap-y-8 pt-16 ${i === 1 && 'hidden'}`}>
                <div className="col-span-full items-center justify-center lg:col-span-1 flex">
                  <Image
                    src={i === 0 ? RTScale : i === 1 ? RTPi : insrealm}
                    alt=""
                    className="flex-none"
                    unoptimized
                  />
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={i === 0 ? '/work/RTScale' : i === 1 ? "/work/RTPi" : "/work/insrealm"}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={i === 0 ? '/work/RTScale' : i === 1 ? "/work/RTPi" : "/work/insrealm"}
                      aria-label={`Read case study: ${caseStudy.client}`}
                    >
                      Read details
                    </Button>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  ['Phobia', logoPhobia],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          You’re in good company
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {brands.map((brand, i) => (
            <li key={i} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12">
                  <Image src={brand} alt={'brand img'} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <>
      {/* <PageIntro
        eyebrow="Our products"
        title="RTScale & RTPi & insrealm"
      >
        <p>
          We believe that our real-time simulation products can provide maximum value to our customers.
        </p>
      </PageIntro> */}

      <CaseStudies caseStudies={caseStudies} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: '', logo: brand3 }}
      >
        After using the products of InsRealm Technology Co., Ltd., our overall efficiency has been significantly improved. Their technical solutions are very reliable, greatly optimizing our workflow.
      </Testimonial> */}

      <Clients />

      <ContactSection />
    </>
  )
}
