import Image from "next/image"
import Link from "next/link"
import styles from './Header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faHeart,faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons" 
import { Eczar } from "next/font/google"

const eczar = Eczar({weight:["400"],subsets:["latin"]})


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className="container">
          <button className={styles.burgerMenu}>
            <div className={styles.burger}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className={styles.menuTitle}>Menu</span>
          </button>
          <Link href={"/"} className={styles.logo}>
            <Image src={"/logo-white.svg"} alt="logo" width={75} height={75}/>
          </Link>
          <div className={styles.right}>
            <Link href={"/user"}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link href={"/wishlist"}>
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link href={"/cart"}>
              <FontAwesomeIcon icon={faCartShopping} />
              <span className={styles.cartCount}>
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.search}>
        <div className="container">
          <form action="/search" method="get" className="input-group">
            <input className={eczar.className} type="text" name="search" placeholder="Search" />
            <span>
              <button className="search-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </span>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header