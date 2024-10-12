/* eslint-disable react/no-unescaped-entities */
import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We collaborate closely with our clients to understand their{' '}
          <strong className="font-semibold text-neutral-950">requirements</strong> and objectives, embedding ourselves in their daily operations to gain a deep understanding of their business dynamics.
        </p>
        <p>
          Our team works alongside our clients' engineering and management teams to gather detailed insights, enabling us to tailor our real-time simulation solutions to their specific needs. We conduct thorough feasibility studies and concept validations to ensure the best outcomes.
        </p>
        <p>
          Upon completing our comprehensive analysis, we provide a detailed{' '}
          <strong className="font-semibold text-neutral-950">implementation plan</strong> and budget, ensuring alignment with our clients' goals.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Concept validations</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Technical audits</TagListItem>
        <TagListItem>Proof-of-concept development</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based on the findings from the discovery phase, we create a detailed roadmap for each project and commence development. Our team employs advanced real-time simulation techniques to ensure high precision and reliability in our solutions.
        </p>
        <p>
          Each client is assigned a dedicated project manager to maintain clear and consistent communication, ensuring transparency and progress tracking throughout the development process. We prioritize efficient use of resources and adhere to best practices to deliver top-quality results.
        </p>
        <p>
          Our team is committed to responding promptly to client inquiries and incorporating feedback, fostering a collaborative environment that drives project success.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Emily Selman', role: 'Head of Engineering at IESLAB' }}
        className="mt-12"
      >
        InsRealm Technology delivered exceptional results in developing our converter control systems. Their expertise in real-time simulation and control logic validation significantly enhanced our project’s success. We look forward to continuing our collaboration.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          As we approach the final stages of development, we perform extensive testing and validation to ensure all project requirements are met. We prioritize quality and reliability, ensuring that our solutions deliver outstanding performance.
        </p>
        <p>
          Our team focuses on fine-tuning every aspect of the project, leveraging our expertise in real-time simulation to achieve optimal results. We ensure that all key functionalities are fully operational at launch, providing a seamless experience for our clients.
        </p>
        <p>
          We offer comprehensive support post-launch, including regular updates and maintenance to keep the systems running smoothly and efficiently. Our commitment to excellence extends beyond project delivery, ensuring long-term success for our clients.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Thorough Testing">
          We ensure complete test coverage to guarantee the reliability and performance of our solutions.
        </ListItem>
        <ListItem title="Robust Infrastructure">
          We utilize high-quality infrastructure to support our solutions, ensuring stability and scalability.
        </ListItem>
        <ListItem title="Ongoing Support">
          We provide continuous support and updates, maintaining the integrity and efficiency of our solutions.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          At InsRealm Technology, we strive to stay at the forefront of emerging trends and technologies, while maintaining a strong foundation of reliability and innovation. Our core values guide us in delivering the best solutions for our clients.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            We pay close attention to detail in every project, ensuring that our solutions are of the highest quality.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on our efficient processes, delivering projects on time and within budget.
          </GridListItem>
          <GridListItem title="Adaptable">
            We tailor our solutions to meet the unique needs of each client, providing customized support and services.
          </GridListItem>
          <GridListItem title="Honest">
            We maintain transparency in all our processes, building trust and confidence with our clients.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients, offering ongoing support and collaboration.
          </GridListItem>
          <GridListItem title="Innovative">
            We continuously seek out new technologies and methodologies to improve our solutions and stay ahead of industry trends.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in efficiency and maximizing our resources to provide the best value to our clients. Our approach leverages cutting-edge technologies and methodologies to deliver top-quality solutions that meet our clients' needs.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
