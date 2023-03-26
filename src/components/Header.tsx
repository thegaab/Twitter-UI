import {Sparkle} from 'phosphor-react'

import './Header.css'

interface HeaderProps{
  title:string
}

export function Header(props: HeaderProps){
  return(
    <div className="timeLine-header">
      {props.title}
      <Sparkle/>
    </div>
  )
}