import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'
import logo from "@/images/logo.png"

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s -InsRealm Technology',
    default: 'InsRealm Technology - Leading Provider of Real-Time Simulation and Rapid Control Prototyping Systems',
  },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <link rel="icon" href="https://nwzimg.wezhan.cn/sitefiles10335/10335062/49333307 (1).png" type="image/png" />
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
