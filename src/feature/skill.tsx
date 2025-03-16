import { Container } from '@/component/container'
import { ListImte } from '@/component/list'
import { andikaItalic, notoSansJP } from '@/font/andika'
import { mergeStyles } from '@/util/style'

export function Skill() {
  return (
    <Container>
      <h2 className={mergeStyles(andikaItalic.className, 'text-2xl', 'my-8')}>
        ## Skills
      </h2>

      <div className={mergeStyles('my-2')}>
        <h3 className={mergeStyles(andikaItalic.className, 'text-xl', 'my-8')}>
          ### Language
        </h3>
        <ListImte>Go</ListImte>
        <ListImte>Rust</ListImte>
        <ListImte>TypeScript</ListImte>
      </div>

      <div className={mergeStyles('my-2')}>
        <h3 className={mergeStyles(andikaItalic.className, 'text-xl', 'my-8')}>
          ### Tools
        </h3>
        <ListImte>Git / GitHub</ListImte>
        <ListImte>Docker</ListImte>
        <ListImte>Linux</ListImte>
      </div>
    </Container>
  )
}
