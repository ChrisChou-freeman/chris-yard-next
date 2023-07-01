import { JSX } from "react"

import { getCurrentYear } from "@/tool/time"

export interface IconNameLink {
  id: string
  name: string
  icon: string
  link: string
  isLink: boolean
}

export interface InformationTitle {
  id: string
  name: string
  subTitle: IconNameLink[]
}

const informationTitles: InformationTitle[] = [
  {
    id: crypto.randomUUID(),
    name: 'About me',
    subTitle: [
      {
        id: crypto.randomUUID(),
        name: `👨 male, ${getCurrentYear() - 1995}`,
        icon: '',
        link: '',
        isLink: false
      },
      { 
        id: crypto.randomUUID(),
        name: '🇨🇳 from China GanZhou',
        icon: '',
        link: '',
        isLink: false 
      },
      { 
        id: crypto.randomUUID(),
        name: '‍💻 full stack developer',
        icon: '',
        link: '',
        isLink: false 
      },
      { 
        id: crypto.randomUUID(),
        name: '👐 freelancer',
        icon: '',
        link: '',
        isLink: false 
      },
      { 
        id: crypto.randomUUID(),
        name: '🥹 nearly homeless',
        icon: '',
        link: '',
        isLink: false 
      },
    ]
  },
  {
    id: crypto.randomUUID(),
    name: 'My Products',
    subTitle: [
      {
        id: crypto.randomUUID(),
        name: '🎧 DeepFocus',
        icon: '',
        link: 'https://apps.apple.com/app/deepfocus-pomodoro-sounds/id1628457656',
        isLink: true
      },
      {
        id: crypto.randomUUID(),
        name: '📒 NoteApp(working on it)',
        icon: '',
        link: '/',
        isLink: true
      },
    ]
  },
  {
    id: crypto.randomUUID(),
    name: 'Contact Me',
    subTitle: [
      { 
        id: crypto.randomUUID(),
        name: '📮 Email',
        icon: '',
        link: 'mailto:bornbefreesolo@hotamil.com',
        isLink: true 
      },
      { 
        id: crypto.randomUUID(),
        name: '🐦 Twitter',
        icon: '',
        link: 'https://twitter.com/ChrisWantBeFree',
        isLink: true
      },
    ]
  },
  {
    id: crypto.randomUUID(),
    name: 'Other',
    subTitle: [
      {
        id: crypto.randomUUID(),
        name: '💾 Github',
        icon: '',
        link: 'https://github.com/ChrisChou-freeman',
        isLink: true
      },
      {
        id: crypto.randomUUID(),
        name: '🌐 Blog',
        icon: '',
        link: '/',
        isLink: true
      }
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
              ? (<a key={sub.id} className='hover:underline' href={sub.link}>{sub.name}</a>)
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
        return (<BottomInfo key={info.id} info={info} />)
      })}
    </div>
  )
}
