import { facebook, instagram, lorry, quality, service, twitter } from "../assets/icon";
import { clock1,clock2, clock3, clock4, clock5, miniatureClock1, miniatureClock2, miniatureClock3, miniatureClock4, miniatureClokck5, miniatureReloj2, product1, product2, product3, product4, product5, product6, product7, reloj } from "../assets/image";
export const navLinks =[
    {href: '#home', name:'Home'},
    {href: '#about-us', name:'About Us'},
    {href: '#products', name:'Products'},
    {href: '#contact', name:'Contact'},
];

export const clocks =[   
    {
        thumbnail:miniatureClokck5,
        bigReloj:clock5
    },
    {
        thumbnail:miniatureClock3,
        bigReloj:clock3
    },
    {   
        thumbnail:miniatureClock4,
        bigReloj:clock4,
    },
]
export const stadistics = [
    {value:'1.5k' , id:'Modelos '},
    {value:'20+' , id:'Paises'},
    {value:'95%', id:'Clientes Satisfechos'},
];


export const products = [
    {
        imgUrl:product7,
        name:'Reloj Elegante',
        price:120.00,
        calification:8.5      
    },
    {
        imgUrl:product6,
        name:'Reloj Clasico',
        price:150.00,
        calification:7.8      
    },
    {
        imgUrl:product5,
        name:'Reloj Moderno',
        price:200.00,
        calification:9.5      
    },
    {
        imgUrl:product2,
        name:'Reloj de Cuero Clasico',
        price:180.00,
        calification:8.5      
    }
]

export const services =[
    {
        imgUrl:lorry,
        name:'Fast and Secure Shipping',
        description:'Quick and secure delivery of your watches right to your doorstep.',
    },
    {
        imgUrl:quality,
        name:'Quality Guarantee',
        description:'We provide a quality guarantee on all our watches for your peace of mind.',
    },
    {
        imgUrl:service,
        name:'Repair Services',
        description:'Professional and careful repair of your watches in case of malfunctions.',
    },
]

export const footerLinks = [
    {
        title:'Products',
        links:[
            {name:'Classic Silver Chronograph Watch', link:'/'},
            {name:'Elegant Rose Gold Mesh Watch', link:'/'},
            {name:'Sporty Black Silicone Band Watch', link:'/'},
            {name:'Minimalist White Leather Watch', link:'/'},
        ]
    },
    {
        title:'Help',
        links:[
            {name:'About us', link:'/'},
            {name:'How it works', link:'/'},
            {name:'Privacy policy', link:'/'}
        ]
    },
    {
        title:'Stay Connected',
        links: [
            { name: "customer@timelux.com", link: "mailto:customer@timelux.com" },
            { name: "+123456987", link: "tel:+123456987" },
        ],
    }
]

export const social =[
    {
        src:facebook, atl:'Facebook logo'
    },
    {
        src:twitter, alt:'Twitter logo'
    },
    {
        src:instagram, alt:'Instagram logo'
    }
]