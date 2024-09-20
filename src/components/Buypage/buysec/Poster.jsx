import React from 'react'
import post from"../../../../public/image/buyerpage/poster.svg"

function Poster() {
  return (
    <div className='w-auto h-auto'>
        <div className='pt-10'>
            <img 
            src={post.src}/>
        </div>
    </div>
  )
}

export default Poster