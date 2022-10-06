// Components
import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"

//Assets
import scss from '../styles/navbar.module.scss'
import Portrait from '../public/Liv_Cramer.jpg'

export default function Navbar() {
  const [openContact, setOpenContact] = useState(false);
  const [openBio, setOpenBio] = useState(false);

  const toggleContact = () => {
    setOpenContact(!openContact)
    setOpenBio(false)
  }

  const toggleBio = () => {
    setOpenBio(!openBio)
    setOpenContact(false)
  }

  const toggleMenu = () => {
    setOpenContact(!openContact)
  }

  const closeMenu = () => {
    setOpenContact(false)
  }

  return (
    <>
      <nav className={scss.navbar}>
        <div className={`${scss.contactDrawer} ${ openContact == true ? `${scss.opened}` : `${scss.closed}`}`}>
          <div className={scss.menu}>
            <h1>Liv Cramer Holme</h1>
            <h2>Stylist · Set Designer · Art Director</h2>
            <div className={scss.contacts}>
              <Link href='tel:+4540558860'><a>+45 40 55 88 60</a></Link>
              <Link href='mailto: liv@cramerholme.dk'><a>liv@cramerholme.dk</a></Link>
            </div>
          </div>
          <div className={scss.image}>
            <div className={scss.inner}>
              <Image src={Portrait} layout='fill' priority='true' quality='100' objectPosition='bottom' objectFit='cover'/>
            </div>
          </div>
          <div className={scss.closeContact} onClick={toggleContact}>
            <span />
            <span />
          </div>
        </div>
        <div className={`${scss.bioDrawer} ${ openBio == true ? `${scss.opened}` : `${scss.closed}`}`}>
          <div className={scss.menu}>
            <h3>
            Jeg elsker at udvikle og skabe nye universer til mine kunder. Og laver meget gerne oplæg til ny billede stil, konceptudvikling, kampagneudvikling eller styling af div. produkter/stilleben. Både dem med pincet og dem med store baggrunde og møbler. Jeg er altid åben for en snak omkring den bedste og mest kreative måde at løse en problemstilling på.<br/><br/>

            Min baggrund er 20 års erfaring fra kommunikations- og reklameverdenen som Art Director.
            Jeg har især arbejdet meget med store retailere, hvor jeg har løst alt fra store kampagner og årsoplæg til mindre grafiske opgaver.<br/><br/>

            Jeg er vant til at arrangere større og mindre fotoshoots/filmoptagelser og jeg kan styre slagets gang både i planlægningen og i udførelsen af og ved hvad der skal til for at komme frem til et vellykket resultat.<br/><br/>

            Og så er jeg et roligt, rart og et ordentligt menneske, der smiler ret meget 😀
            </h3>
          </div>
          <div className={scss.closeBio} onClick={toggleBio}>
            <span />
            <span />
          </div>
        </div>
        <div className={`${scss.bottomBar} ${ openBio ? `${scss.bioOpened}` : '' }`}>
          <div className={scss.link} onClick={toggleBio} style={{ textAlign: 'left'}}>Bio</div>
          <div className={scss.link} onClick={toggleContact} style={{ textAlign: 'center'}}>Kontakt</div>
          <div className={scss.link} style={{ textAlign: 'right'}}>
            <Link href='https://instagram.com/hej__liv'><a target='_blank'>Insta</a></Link>
          </div>
        </div>
      </nav>
    </>
  )
}
