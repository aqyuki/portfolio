import { Andika, Sawarabi_Gothic } from 'next/font/google'
import { Avatar } from './avatar'

const sawarabiGothic = Sawarabi_Gothic({
  weight: '400',
  subsets: ['latin'],
})

const andika = Andika({
  weight: '400',
  subsets: ['latin'],
})

export function Hero() {
  return (
    <div className="w-full h-screen grid place-items-center col-span-full">
      <div className="flex flex-col items-center gap-2rem">
        <Avatar />
        <div className="w-full text-center text-xl">
          <h1 className={sawarabiGothic.className}>しろね✨</h1>
          <h1 className={andika.className}>Web Developer</h1>
        </div>
      </div>
    </div>
  )
}
