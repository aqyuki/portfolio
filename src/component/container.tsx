import { mergeStyles } from '@/util/style'

export function Container({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className={mergeStyles(
        'my-5',
        'col-start-1',
        'col-end-[-1]',
        'md:col-start-3',
        'md:col-end-[-3]',
        'lg:col-start-4',
        'lg:col-end-[-4]',
        'xl:col-start-5',
        'xl:col-end-[-5]',
      )}
    >
      {children}
    </div>
  )
}
