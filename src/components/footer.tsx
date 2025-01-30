import Link from 'next/link'

import Counter from './counter'

export default function Footer() {
  return (
    <footer className="text-foreground-muted fixed right-0 bottom-0 flex w-full items-end justify-between p-4">
      <Counter />
      <Link href="https://cargill.dev" className="text-[10px] underline">
        Dan Cargill
      </Link>
    </footer>
  )
}
