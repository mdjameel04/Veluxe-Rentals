import Logo from './Logo-img1.png'
import video1 from './video_1.mp4'
import menuBar from './menu.png'
import close_Icon from './CloseIcon.png'
import right from './Right-arrow.png'
import car_img1 from './car-img1.webp'
import car_img2 from './Car-img2.webp'
import car_img3 from './car-img4.png'
import rightSide_img from './Right-img.webp'

export const assets = {
    video1,
    Logo,
    menuBar,
    close_Icon,
    right,
    car_img1,
    car_img2,
    car_img3,
    rightSide_img

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

export const cars =[
    {id:1, name:"Audi a3", img: "img1", brand:"Audi", model:"Sedans", fuel:"Petrol" },
    {id:2, name: "Audi q2", img: "img2", brand: "Audi",model:"Suvs", fuel:"Disel"},
    {id:3, name:"Audi TT", img:"img3", brand:"Audi", model:"Sports", fuel:"petrol"},
    {id:4, name:"Audi R8", img:"img4", brand:"Audi", model:"Sports", fuel:"petrol"},
    {id:5,name:"Audi q5", img:"img5", brand:"Audi",  model: "Suvs", fuel:"Disel"},

    {id:6, name:"Bmw 3", img:"img6", brand:"bmw", model:"Sedans", fuel:"petrol"},
    {id:7, name:"Bmw 7", img:"img7", brand:"bmw", model:"Sedans", fuel:"petrol"},
    {id:8, name:"Bmw x3", img:"img8",brand:"bmw", model:"Suvs", fuel:"Disel"},
    {id:9, name:"Bmw m2", img:"img9", brand:"bmw",model:"Sports", fuel:"petrol"},

    {id:10, name:"Lamborghini Huracán", img:"img10", brand:"Lamborghini", model:"Sports", fuel:"petrol"},
    {id:11, name:"Lamborghini Revuelto",img:"img11", brand:"Lamborghini", model:"Sports",fuel:"petrol"},
    {id:12, name:"Lamborghini urus",    img:"img12", brand:"Lamborghini", model:"Sports",fuel:"petrol"}
]