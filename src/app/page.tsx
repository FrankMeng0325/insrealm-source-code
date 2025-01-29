
/* eslint-disable react/no-unescaped-entities */
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import product1 from '@/images/product1.png'

import brand1 from "@/images/brand/brand1.png"
import brand2 from "@/images/brand/brand2.png"
import brand3 from "@/images/brand/brand3.png"
import brand4 from "@/images/brand/brand4.png"
import brand5 from "@/images/brand/brand5.png"
import brand6 from "@/images/brand/brand6.png"
import brand7 from "@/images/brand/brand7.png"
import brand8 from "@/images/brand/brand8.png"
import RTScale from "@/images/RTScale.png"

import highSpeed from "@/images/servers/highSpeed.png"
import power from "@/images/servers/power.png"
import transportation from "@/images/servers/transportation.png"
import converter from "@/images/servers/converter.png"
import car from "@/images/servers/car.png"
import robot from "@/images/servers/robot.png"


import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { ProductsTabs } from '@/components/Tabs'
import { Button } from '@/components/Button'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

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

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Our Cooperative Partner:
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {brands.map((brand, i) => (
              <li key={i}>
                <FadeIn>
                  <div className=' relative bg-white rounded-2xl w-[176px] object-contain h-[87px]'>
                    <Image src={brand} alt='brand img' fill unoptimized className=' object-contain rounded-2xl' />
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Our Products"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn className="flex">
          <ProductsTabs></ProductsTabs>
        </FadeIn>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Redefine Real-Time Computing,
          Ultimate performance, Instant Insight
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex flex-col justify-center gap-8 lg:items-center lg:justify-end">
          <div className="flex justify-center lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <ListItem title="High-speed motor simulation">
              <div>
                <Image src={highSpeed} alt=' high speed' unoptimized></Image>
              </div>
            </ListItem>
            <ListItem title="Power Systems">
              <div>
                <Image src={power} alt=' high speed' unoptimized></Image>
              </div>
            </ListItem>
            <ListItem title="Transportation">
              <div>
                <Image src={transportation} alt=' high speed' unoptimized></Image>
              </div>
            </ListItem>
            <ListItem title="Converter control DC/DC、DC/AC、OBC">
              <div>
                <Image src={converter} alt=' high speed' unoptimized></Image>
              </div>
            </ListItem>
            <ListItem title="Vehicle control VCU、BMS、ADAS、EPS">
              <div>
                <Image src={car} alt=' high speed' unoptimized></Image>
              </div>
            </ListItem>
            <ListItem title="Robot Control">
              <div>
                <Image src={robot} alt=' high speed' unoptimized></Image>
              </div>
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a leading provider of advanced real-time simulation and rapid control prototyping systems, empowering innovation and efficiency in energy, high-end equipment, robotics, aerospace, rail transit, and vehicle engineering.',
}


export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className=" flex items-center xl:flex-row flex-col justify-between gap-4 w-full">
          <div className=' flex items-start justify-center gap-4 flex-col'>
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              About InsRealm
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              InsRealm Technology Co., Ltd. specializes in advanced real-time simulation technology. Our core team members are from the Smart Energy Lab at Imperial College London. With nearly a decade of innovation and collaboration with top universities, research institutes, and Fortune 500 companies, we have launched several products that achieve world-leading performance.
            </p>
            <Link href='/about'>
              <Button className=''>
                Learn More
              </Button>
            </Link>
          </div>
          <div className=' relative min-w-[350px] min-h-[370px] sm:min-w-[500px] sm:min-h-[472px] w-full h-full'>
            <Image src={RTScale} fill className=' object-contain' alt='RTScale img'></Image>
          </div>
        </FadeIn>
      </Container>

      <CaseStudies caseStudies={caseStudies} />
      <Clients />
      <Services />
      <ContactSection />
    </>
  )
}
