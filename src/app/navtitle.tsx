import { JSX } from "react"

export function NavTitle(): JSX.Element {
  return (
    <nav className='flex justify-end w-full pr-10 gap-10 pt-5'>
      <a href='/'>Home</a>
      <a href='/'>Blog</a>
    </nav>
  )
}
