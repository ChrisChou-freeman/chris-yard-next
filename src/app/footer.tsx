import { getCurrentYear } from "@/tool/time"

export function Footer(): JSX.Element {
  return (
    <footer className='text-gray-600 flex justify-center'>
      <p>©️{getCurrentYear()} Chris Chou. All Rights Reserved.</p>
    </footer>
  )
}
