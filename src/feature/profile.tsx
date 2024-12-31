import { Container } from '@/component/container'
import { andikaItalic, notoSansJP } from '@/font/andika'
import { mergeStyles } from '@/util/style'

export function Profile() {
  return (
    <Container>
      <h2 className={mergeStyles(andikaItalic.className, 'text-2xl', 'my-8')}>
        ## Profile
      </h2>
      <p className={mergeStyles(notoSansJP.className, 'text-lg', 'leading-10')}>
        鹿児島高専で電子制御工学を学んでいる学生です｡
      </p>
      <p className={mergeStyles(notoSansJP.className, 'text-lg', 'leading-10')}>
        プログラミングと東方Projectが大好きです｡
      </p>
    </Container>
  )
}
