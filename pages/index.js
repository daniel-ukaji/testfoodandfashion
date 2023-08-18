import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainHeader from '@/components/MainHeader'
import Hero from '@/components/Hero'
import Body from '@/components/Body'
import SubBanner from '@/components/SubBanner'
import Presented from '@/components/Presented'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <MainHeader />
      <Hero />
      <Body />
      <SubBanner />
      <Presented />
    </div>
  )
}
