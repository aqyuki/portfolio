import { notoSansJP } from '@/font/andika'
import { mergeStyles } from '@/util/style'

export function ListImte({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={mergeStyles(
        notoSansJP.className,
        'text-lg',
        'leading-10',
        'block',
      )}
    >
      - {children}
    </span>
  )
}
