//Components
import Image from "next/image"

//Assets
import scss from '../styles/layout.module.scss'

//Images
import One from '../public/BH_1.jpg'
import Two from '../public/GLS_2.jpg'
import Three from '../public/Untitled-Session11276.jpg'
import Four from '../public/Billede26.jpg'
import Five from '../public/GLS_1.jpg'
import Six from '../public/BH_2.jpg'
import Seven from '../public/BH_6.jpg'
import Eight from '../public/Linolie_4.jpg'
import Nine from '../public/Linolie_1.jpg'
import Ten from '../public/Overordnet-Session6291.jpg'
import Eleven from '../public/Overordnet-Session5959.jpg'
import Twelve from '../public/NORDEN_1.jpg'
import Thirteen from '../public/NORDEN_3.jpg'
import Fourteen from '../public/Rene.jpg'
import Fifteen from '../public/TEKTROL_Claus_paryk.jpg'
import Sixteen from '../public/TEKTROL_Mogens.jpg'

export default function Home() {
  return (
    <>
      <section className={scss.section} data='between'>
        <div className={scss.case} id={scss.one}>
          <Image src={One} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>koncept — fotounivers</h2>
        </div>
        <div className={scss.case} id={scss.two}>
          <Image src={Two} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
        <div className={scss.case} id={scss.three}>
          <Image src={Three} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>Albani — Styling & Instruering</h2>
        </div>
      </section>

      <section className={scss.section} data='around'>
        <div className={scss.case} id={scss.four}>
          <Image src={Four} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
        <div className={scss.case} id={scss.five}>
          <Image src={Five} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>GLS — Projektstyring & Styling</h2>
        </div>
      </section>

      <section className={scss.section} data='tall'>
        <div className={scss.case} id={scss.six}>
          <Image src={Six} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>koncept — fotounivers</h2>
        </div>
        <div className={scss.case} id={scss.seven}>
          <Image src={Seven} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>koncept — fotounivers</h2>
        </div>
      </section>

      <section className={scss.section} data='evenly'>
        <div className={scss.case} id={scss.eight}>
          <Image src={Eight} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>Linolie — Styling & fotounivers</h2>
        </div>
        <div className={scss.case} id={scss.nine}>
          <Image src={Nine} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>Linolie — Styling & fotounivers</h2>
        </div>
      </section>

      <section className={scss.section} data='around'>
      <div className={scss.case} id={scss.ten}>
        <Image src={Ten} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
        <h2 className={scss.titel}>Matas — Projektstyring & Styling</h2>
      </div>
      <div className={scss.case} id={scss.eleven}>
        <Image src={Eleven} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
        <h2 className={scss.titel}>Matas — Projektstyring & Styling</h2>
      </div>
      </section>

      <section className={scss.section} data='between'>
        <div className={scss.case} id={scss.twelve}>
          <Image src={Twelve} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>Fiskars — styling & fotounivers</h2>
        </div>
        <div className={scss.case} id={scss.thirteen}>
          <Image src={Thirteen} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>Fiskars — styling & fotounivers</h2>
        </div>
      </section>

      <section className={scss.section} data='evenly'>
        <div className={scss.case} id={scss.fifteen}>
          <Image src={Fifteen} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>Tektrol — koncept & fotounivers</h2>
        </div>
        <div className={scss.case} id={scss.fourteen}>
          <Image src={Fourteen} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>Tektrol — koncept & fotounivers</h2>
        </div>
        <div className={scss.case} id={scss.sixteen}>
          <Image src={Sixteen} quality='100' style={{ backgroundColor: 'var(--fill)' }}/>
          <h2 className={scss.titel}>Tektrol — koncept & fotounivers</h2>
        </div>
      </section>
    </>
  )
}
