import React from 'react'

const RelojCard = ({imgUrl, changeBigRelojImg, bigClockImg}) => {
  
const handleClick = () =>{
  if(bigClockImg !== imgUrl.bigReloj){
    console.log('Cambiando imagen...');
    changeBigRelojImg(imgUrl.bigReloj)
  }
}
  return (
    <div className={`border-2 rounded-xl ${
      bigClockImg === imgUrl.bigReloj ? 'border-blue-50' :'border-transparent'
    } cursor-pointer max-sm:flex-1`}
    onClick={handleClick}
    >
      <div className='flex justify-center items-center  bg-center bg-cover sm:w-40 rounded-xl max-sm:p-4 '>
        <img 
          src={imgUrl.thumbnail}
          alt='Reloj Colection'  
          width={120}
          height={103}
          className='object-contain'
        
        />
      </div>
      </div>
  )
}

export default RelojCard