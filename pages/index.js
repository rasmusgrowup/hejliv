//Components
import Image from "next/image"
import Link from "next/link"

//Assets
import scss from '../styles/layout.module.scss'

//Images
import One from '../public/BH_4.jpg'
import Two from '../public/BH_2.jpg'
import Three from '../public/BH_6.jpg'

import Four from '../public/BH_99.jpg'
import Five from '../public/BH_88.jpg'
import Six from '../public/Stole_BentHansen.gif'

import Seven from '../public/BH_33.jpg'
import Eight from '../public/BH_55.jpg'

import Nine from '../public/TEKTROL_Rene.jpg'
import Ten from '../public/TEKTROL_Haender.jpg'
import Eleven from '../public/TEKTROL_Mogens.jpg'

import Twelve from '../public/TEKTROL_Claus_paryk.jpg'
import Thirteen from '../public/TEKTROL_Claus.jpg'
import Fourteen from '../public/TEKTROL_Jesper.jpg'

import Fifteen from '../public/Linolie_1.jpg'
import Sixteen from '../public/Linolie_4.jpg'
import Seventeen from '../public/Linolie_2.jpg'

import Eighteen from '../public/NORDEN_2.jpg'
import Nineteen from '../public/NORDEN_3.jpg'
import Twenty from '../public/NORDEN_4.jpg'

import Twentyone from '../public/NORDEN_5.jpg'
import Twentytwo from '../public/NORDEN_6.jpg'
import Twentythree from '../public/NORDEN_7.jpg'

import Twentyfour from '../public/NORDEN_1.jpg'

export default function Home() {
  return (
    <>
      <section className={scss.section} data='around'>
        <div className={scss.case} id={scss.one}>
          <Image src={One} quality='100' priority='true' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>koncept — fotounivers</h2>
          <p className={scss.introTekst}>
            LIV CRAMER HOLME<br />
            Stylist · Set Designer · Art Director<br />
            <Link href='mailto:liv@cramerholme.dk'><a className={scss.link}>liv@cramerholme.dk</a></Link><br />
            <Link href='tel:+4540558860'><a className={scss.link}>+45 40 55 88 60</a></Link>
          </p>
        </div>
        <div className={scss.case} id={scss.two}>
          <Image src={Two} quality='100' priority='true' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
        <div className={scss.case} id={scss.three}>
          <Image src={Three} quality='100' priority='true' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>Albani — Styling & Instruering</h2>
        </div>
      </section>

      <section className={scss.section} data='tall'>
        <div className={scss.case} id={scss.four}>
          <Image src={Four} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
        <div className={scss.case} id={scss.five}>
          <Image src={Five} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
        <div className={scss.case} id={scss.six}>
          <Image src={Six} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
      </section>

      <section className={scss.section} data='evenly'>
        <div className={scss.case} id={scss.seven}>
          <Image src={Seven} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
        <div className={scss.case} id={scss.eight}>
          <Image src={Eight} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
      </section>

      <section className={scss.section} data='tall'>
        <div className={scss.case} id={scss.nine}>
          <Image src={Nine} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
        <div className={scss.case} id={scss.ten}>
          <Image src={Ten} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
        <div className={scss.case} id={scss.eleven}>
          <Image src={Eleven} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
      </section>

      <section className={scss.section} data='tallAround'>
        <div className={scss.case} id={scss.twelve}>
          <Image src={Twelve} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
        <div className={scss.case} id={scss.thirteen}>
          <Image src={Thirteen} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
        <div className={scss.case} id={scss.fourteen}>
          <Image src={Fourteen} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
      </section>

      <section className={scss.section} data='evenly'>
        <div className={scss.case} id={scss.fifteen}>
          <Image src={Fifteen} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
        <div className={scss.case} id={scss.sixteen}>
          <Image src={Sixteen} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
        <div className={scss.case} id={scss.seventeen}>
          <Image src={Seventeen} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
      </section>

      <section className={scss.section} data='tallBetween'>
        <div className={scss.case} id={scss.eighteen}>
          <Image src={Eighteen} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
        <div className={scss.case} id={scss.nineteen}>
          <Image src={Nineteen} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
        <div className={scss.case} id={scss.twenty}>
          <Image src={Twenty} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
      </section>

      <section className={scss.section} data='around'>
        <div className={scss.case} id={scss.twentyone}>
          <Image src={Twentyone} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
        <div className={scss.case} id={scss.twentytwo}>
          <Image src={Twentytwo} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
        <div className={scss.case} id={scss.twentythree}>
          <Image src={Twentythree} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
      </section>

      <section className={scss.section} data='evenly'>
        <div className={scss.case} id={scss.twentyfour}>
          <Image src={Twentyfour} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
      </section>
    </>
  )
}
