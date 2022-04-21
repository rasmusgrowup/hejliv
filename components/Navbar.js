// Components
import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"

//Assets
import scss from '../styles/navbar.module.scss'
import Portrait from '../public/faux_portrait_2.jpg'

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const toggleMenu = () => {
    setOpenNav(!openNav)
  }

  const closeMenu = () => {
    setOpenNav(false)
  }

  return (
    <>
      <nav className={scss.navbar}>
        <div className={`${scss.drawer} ${ openNav == true ? `${scss.opened}` : `${scss.closed}`}`}>
          <div className={scss.menu}>
            <h1>Jeg er art director med over 15 års erfaring fra Nørgaard Mikkelsen. Kontakt mig for foto-styling til jeres kommercielle projekter eller for projektstyring af komplekse opgaver.</h1>
            <div className={scss.contacts}>
              <Link href='tel:+4540558860'><a>+45 40 55 88 60</a></Link>
              <Link href='mailto: liv@cramerholme.dk'><a>liv@cramerholme.dk</a></Link>
            </div>
          </div>
          <div className={scss.image}>
            <div className={scss.inner}>
              <Image src={Portrait} layout='fill' priority='true' quality='100' objectPosition='center' objectFit='cover'/>
            </div>
          </div>
        </div>
        <div className={scss.bottomBar}>
          <div className={scss.link} onClick={closeMenu}>Cases</div>
          <div className={scss.link} onClick={toggleMenu}>Min Info</div>
          <div className={scss.link}>
            <Link href='https://instagram.com/hej__liv'><a target='_blank'>Insta</a></Link>
          </div>
        </div>
      </nav>
    </>
  )
}
