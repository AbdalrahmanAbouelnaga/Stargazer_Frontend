import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import BrandCarousel from '@/components/BrandCarousel'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topCats}>
        <div className="container">
          <div className={`col-12 ${styles.heading}`}>
            <h1>
              Our Top Categories
            </h1>
          </div>
          <div className={`col-12 ${styles.thumbnailList}`}>
            <div className={` ${styles.thumbnail}`}>
              <div className={styles.borderBox}>
                <Link href={"/telescopes"} >
                  <Image src={"/Telescope.webp"} width={150} height={150} alt='telescope' />
                </Link>
                <Link href={"/telescopes"}>
                  <span className={styles.title}>
                    Telescopes
                  </span>
                </Link>
              </div>
            </div>
            <div className={` ${styles.thumbnail}`}>
              <div className={styles.borderBox}>
                <Link href={"/cameras"} >
                  <Image src={"/Camera.webp"} width={150} height={150} alt='camera'/>
                </Link>
                <Link href={"/cameras"}>
                  <span className={styles.title}>
                    Cameras
                  </span>
                </Link>
              </div>
            </div>
            <div className={` ${styles.thumbnail}`}>
              <div className={styles.borderBox}>
                <Link href={"/mounts"} >
                  <Image src={"/Mount.webp"} width={150} height={150} alt='mount'/>
                </Link>
                <Link href={"/mounts"}>
                  <span className={styles.title}>
                    Mounts
                  </span>
                </Link>
              </div>
            </div>
            <div className={` ${styles.thumbnail}`}>
              <div className={styles.borderBox}>
                <Link href={"/filters"} >
                  <Image src={"/Filter.webp"} width={150} height={150} alt='filter'/>
                </Link>
                <Link href={"/filters"}>
                  <span className={styles.title}>
                    Filters
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <BrandCarousel /> */}
    </main>
  )
}
