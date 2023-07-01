import { JSX } from "react"

export function NavTitle(): JSX.Element {
  return (
    <nav className='flex justify-end w-full pr-10 gap-10 pt-5'>
      <a className='hover:underline' href='/'>Home</a>
      <a className='hover:underline' href='/'>Blog</a>
    </nav>
  )
}
