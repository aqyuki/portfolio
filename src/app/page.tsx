import { Hero } from '@/feature/hero'
import { Link } from '@/feature/link'
import { Profile } from '@/feature/profile'
import { Skill } from '@/feature/skill'

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Skill />
      <Link />
    </>
  )
}
