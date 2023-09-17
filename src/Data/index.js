import { clock1,clock2, clock3, miniatureClock1, miniatureClock2, miniatureClock3, miniatureReloj2, product1, product2, product3, product4, reloj } from "../assets/image";
export const navLinks =[
    {href: '#home', name:'Home'},
    {href: '#about-us', name:'About Us'},
    {href: '#products', name:'Products'},
    {href: '#contact', name:'Contact'},
];

export const clocks =[
    {   
        thumbnail:miniatureClock1,
        bigReloj:clock1

    },
    {
        thumbnail:miniatureClock3,
        bigReloj:clock3
    },
    {   
        thumbnail:miniatureClock2,
        bigReloj:clock2,
    },
    
    // {
    //     thumbnail:miniatureReloj2,
    //     bigReloj:reloj
    // }
]
export const stadistics = [
    {value:'1.5k' , id:'Modelos '},
    {value:'20+' , id:'Paises'},
    {value:'95%', id:'Clientes Satisfechos'},
];


export const products = [
    {
        imgUrl:product1,
        name:'Reloj Elegante',
        price:120.00,
        calification:8.5      
    },
    {
        imgUrl:product4,
        name:'Reloj Clasico',
        price:150.00,
        calification:7.8      
    },
    {
        imgUrl:product3,
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