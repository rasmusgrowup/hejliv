import Link from "next/link"
import Image from "next/image"

// Assets
import scss from '../styles/header.module.scss'
import Logo from '../public/Logo.svg'

export default function Header() {
  return (
    <>
      <header className={scss.main}>
        <Link href='/'>
          <a className={scss.logo}>
            <Image src={Logo} priority='true' quality='100' layout='responsive'/>
          </a>
        </Link>
      </header>
    </>
  )
}
