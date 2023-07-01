import Image from "next/image"

import { NavTitle } from "./navtitle"
import { Footer } from "./footer"
import { InfoGroup } from "./bottomInfo"

export default function Home() {
  return (
    <main 
      style={{
        minWidth: '1000px'
      }}
      className='flex min-h-screen flex-col items-center justify-between'
    >
      <NavTitle />
      <div className='flex flex-col pl-48 w-full'>
        <div className='flex justify-start w-full'>
          <h1 className='text-4xl font-bold'>Hello, I'm Chris Chou</h1>
        </div>
        <div className='flex justify-start w-full pt-5 pb-5'>
          <p>Indie develop and freelancer</p>
        </div>
        <div className='flex w-full justify-between pr-48 pb-10'>
          <p className='text-lg text-gray-600 max-w-lg'>
            I build something what i need, and i hope you need as well. hope you enjoy my work.
          </p>
          <img src='/images/code.svg' width={400} alt='code' />
        </div>
      </div>
      <div className='flex flex-col w-full gap-20'>
        <InfoGroup />
        <Footer />
      </div>
    </main>
  )
}
