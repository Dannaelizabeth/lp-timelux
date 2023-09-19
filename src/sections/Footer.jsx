import React from 'react'
import { copy } from '../assets/icon'
import { logo1 } from '../assets/image'
import { footerLinks, social } from '../Data'

const Footer = () => {
  return (
  <footer className='max-container'>
    <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
      <div className='flex flex-col items-start'>
        <a>
          <img 
          src={logo1}
          alt='logo'
          width={150}
          height={50}
          className='m-0'
          />
        </a>
        <p className='mt-6 text-base leading-7 font-monserrat sm:max-w-sm text-white'>
        Discover the Latest Watch Collections for the Upcoming Season at your nearest Watch Haven. Find the Perfect Fit In-Store. Earn Rewards
        </p>
        <div className='flex items-center gap-5 mt-8'>
          {social.map((icon)=>(
            <div className='flex justify-center items-center 
            w-12 h-12 bg-white rounded-full'>
              <img src={icon.src} alt={icon.alt}
              width={24} height={24} />
            </div>
          ))}
        </div>      
      </div>

      <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
        {footerLinks.map((lin)=>(
          <div>
            <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>{lin.title}</h4>
            <ul>
              {lin.links.map((link)=>(
                <li className='mt-3 font-montserrat text-base leading-normal  text-white-400 hover:text-slate-gray'>
                  <a>{link.name}</a>
                </li>
              ))}
            </ul>
            </div>
        ))}
      </div>
    </div>
    <div className=' flex justify-between text-white-400 mt-24 max-sm:flex-col maxsm:items-center'>
      <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
        <img
        src={copy}
        alt='copy icon'
        width={20}
        height={20}
        className='rounded-full m-0'
        />

        <p>CopyRight. All rights reserved</p>
      </div>
      <p className='font-montserrat cursor-pointer'>Term & Conditions</p>

    </div>
  </footer>
  )
}

export default Footer