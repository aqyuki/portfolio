import Image from 'next/image'

export function Avatar() {
  return (
    <Image
      src="/icon.jpeg"
      alt="icon image"
      width={180}
      height={180}
      priority
      className="rounded-4xl"
    />
  )
}
