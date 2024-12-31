import Image from 'next/image'
import type { CSSProperties } from 'react'

const imageStyle: CSSProperties = {
  borderRadius: '50%',
}

export function Avatar() {
  return (
    <Image
      src="/icon.jpeg"
      alt="icon image"
      width={180}
      height={180}
      priority
      style={imageStyle}
    />
  )
}
