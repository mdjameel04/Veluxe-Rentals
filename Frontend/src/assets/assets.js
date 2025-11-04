import Logo from './Logo-img1.png'
import video1 from './video_1.mp4'
import menuBar from './menu.png'
import close_Icon from './CloseIcon.png'
import right from './Right-arrow.png'
import car_img1 from './car-img1.webp'
import car_img2 from './Car-img2.webp'
import car_img3 from './car-img4.png'


export const assets = {
    video1,
    Logo,
    menuBar,
    close_Icon,
    right,
    car_img1,
    car_img2,
    car_img3

}

export const NavItems =[
    {name : "Home",path: "/" },
    {name : "CarBooking",path: "/booking" },
    {name : "Fleet",path: "/fleet" },
    {name : "Contact",path: "/Contact" },
    {name : "About Us",path: "/about" }

]

export const Slide =[
    {id:1 , img: car_img1, text: "BEYOND THE CONCRETE"},
    {id:2 , img: car_img2, text: "PURE PERFORMANCE" },
    {id:3 , img: car_img3, text: "DRIVE YOUR DREAMS"
    },
]