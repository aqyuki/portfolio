import { Andika, Noto_Sans_JP } from 'next/font/google'

export const andikaItalic = Andika({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
})

export const notoSansJP = Noto_Sans_JP({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
})
