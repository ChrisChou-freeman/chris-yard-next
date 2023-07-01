import { JSX } from "react"

import { getCurrentYear } from "@/tool/time"

export interface IconNameLink {
  name: string
  icon: string
  link: string
  isLink: boolean
}

export interface InformationTitle {
  name: string
  subTitle: IconNameLink[]
}

const informationTitles: InformationTitle[] = [
  {
    name: 'About me',
    subTitle: [
      { name: `👨 male, ${getCurrentYear() - 1995}`, icon: '', link: '', isLink: false },
      { name: '🇨🇳 from China GanZhou', icon: '', link: '', isLink: false },
      { name: '‍💻 full stack developer', icon: '', link: '', isLink: false },
      { name: '👐 freelancer', icon: '', link: '', isLink: false },
      { name: '🥹 nearly homeless', icon: '', link: '', isLink: false },
    ]
  },
  {
    name: 'My Products',
    subTitle: [
      { name: '🎧 DeepFocus', icon: '', link: '/', isLink: true },
      { name: '📒 NoteApp(working on it)', icon: '', link: '/', isLink: true },
    ]
  },
  {
    name: 'Contact Me',
    subTitle: [
      { name: '📮 Email', icon: '', link: 'mailto:bornbefreesolo@hotamil.com', isLink: true },
      { name: '🐦 Twitter', icon: '', link: 'https://twitter.com/ChrisWantBeFree', isLink: true },
    ]
  },
  {
    name: 'Other',
    subTitle: [
      { name: '💾 Github', icon: '', link: 'https://github.com/ChrisChou-freeman', isLink: true },
      { name: '🌐 Blog', icon: '', link: 'https://github.com/ChrisChou-freeman', isLink: true }
    ]
  }
]

function BottomInfo(prop: { info: InformationTitle }): JSX.Element {
  const { info } = prop
  return (
    <div className='flex flex-col gap-3'>
      <p className='text-lg font-semibold'>{info.name}</p>
      <div className='flex flex-col gap-2'>
        {info.subTitle.map(sub => {
          const islink = sub.isLink
          return (
            islink
              ? (<a className='underline' href={sub.link}>{sub.name}</a>)
              : (<p>{sub.name}</p>)
          )
        })}
      </div>
    </div>
  )
}

export function InfoGroup(): JSX.Element {
  return (
    <div className='flex gap-1 justify-evenly w-full'>
      {informationTitles.map(info => {
        return (<BottomInfo info={info} />)
      })}
    </div>
  )
}
