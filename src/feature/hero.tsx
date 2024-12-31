import { Andika, Sawarabi_Gothic } from 'next/font/google'
import type { CSSProperties } from 'react'
import { Avatar } from './avatar'

const heroStyle: CSSProperties = {
  width: '100%',
  height: '100vh',
  display: 'grid',
  placeItems: 'center',
  gridColumnStart: 5,
  gridColumnEnd: 9,
}

const heroCard: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3rem',
}

const heroTitleGroup: CSSProperties = {
  width: '100%',
  textAlign: 'center',
}

const sawarabiGothic = Sawarabi_Gothic({
  weight: '400',
})

const andika = Andika({
  weight: '400',
})

export function Hero() {
  return (
    <div style={heroStyle}>
      <div style={heroCard}>
        <Avatar />
        <div style={heroTitleGroup}>
          <h1 className={sawarabiGothic.className}>しろね✨</h1>
          <h1 className={andika.className}>Web Developer</h1>
        </div>
      </div>
    </div>
  )
}
