import React from 'react'
import Hamburguer from '../assets/icon/hamburger.svg'
import Logo from '../assets/image/logo.svg'
import { navLinks } from '../Data'

const Nav = () => {
  return (
   <header className='padding-x py-8 absolute z-10 w-full'>
     <nav className='flex justify-between items-center max-container'>
       <a href='/'>
         <img
         src={Logo}
         alt='logo'
         width={120}
         height={30}
         className='m-0 w-[160px] h-[50px]'
         />        
       </a>
       <ul className='flex-1 flex justify-center items-center gap-16  max-lg:hidden'>
         {
           navLinks.map((e)=>(
             <li key={e.name}>
               <a
               href={e.href}
               className='font-montserrat leading-normal text-lg text-slate-gray'
    
               >
               {e.name}
                 </a>
             </li>
           ))
         }
       </ul>
       <div className='hidden max-lg:block'>
         <img
         src={Hamburguer}
         alt='icon'
         height={30}
         width={30}
         />
       </div>
     </nav>
   </header>
  )
}

export default Nav