import React from 'react'

const SerHero = () => {
  return (
    <div className='w-auto h-auto py-10'>
        <div className='conainer px-20 bg-black'>

            <div className='grid grid-cols-2'>

                <div><h1>hii</h1></div>
                <div >
                    <div className='grid grid-cols-3  gap-y-10 gap-x-0'>

                        <div className='w-[100px] '>
                            <img src='/image/Service/Sertype/ref.png'/>
                        </div>
                        <div className=''>
                            <img src='/image/Service/Sertype/wm.png'/>
                        </div>
                        <div className=''>
                            <img src='/image/Service/Sertype/dis.png'/>
                        </div>
                        <div className=''>
                            <img src='/image/Service/Sertype/mico.png'/>
                        </div>
                        <div className=''>
                            <img src='/image/Service/Sertype/ac.png'/>
                        </div>
                        <div className=''>
                            <img src='/image/Service/Sertype/tv.png'/>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default SerHero;