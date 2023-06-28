// "use client";

// import styles from './BrandCarousel.module.css'
// import Link from 'next/link'
// import Image from 'next/image'

// const brands = [
//     {
//         src:"/celestron.avif",
//         alt:"celestron"
//     },
//     {
//         src:"/Meade.avif",
//         alt:"Meade"
//     },
//     {
//         src:"/ioptron.avif",
//         alt:"ioptron"
//     },
//     {
//         src:"/optolong.webp",
//         alt:"optolong"
//     },
//     {
//         src:"/orion.png",
//         alt:"orion"
//     },
//     {
//         src:"/QHY.avif",
//         alt:"QHY"
//     },
//     {
//         src:"/skywatcher.avif",
//         alt:"skywatcher"
//     },
//     {
//         src:"/Radian.avif",
//         alt:"Radian"
//     },
// ]


// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";               //here
// import "slick-carousel/slick/slick-theme.css";

// function BrandSlider() {
//       const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3
//       };
//       return (
//         <div>
//           <Slider {...settings}>
//             {
//                 brands.map((brand,index)=>(
//                     <div>
//                         <Link href={"/brand"}>
//                             <Image src={brand.src} alt={brand.alt} width={164} height={55} />
//                         </Link>
//                     </div>
//                 ))
//             }            
//           </Slider>
//         </div>
//       );
// }

// const BrandCarousel = () => {
//   return (
//     <div className={styles.topBrands}>
//         <div className="container clear-fix">
//           <div className={`col-12 ${styles.heading}`}>
//             <h1>Top Brands at Stargazer</h1>
//           </div>
//           <div className={styles.brandLogoSlider}>
//             <div className={styles.sliderViewport}>
//                 <BrandSlider />
//             </div>
//           </div>
//         </div>
//       </div>
//   )
// }

// export default BrandCarousel