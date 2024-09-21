import Repairhero from '@/components/Repair/Repairhero'
import Reproc from '@/components/Repair/Repairprocess/Reproc'
import Repairsec from '@/components/Repair/Repairsec/Repairsec'
import Rmeet from '@/components/Repair/Rmeet/Rmeet'
import Rquery from '@/components/Repair/Rquery/Rquery'
import Rvideo from '@/components/Repair/Rv/Rvideo'
import React from 'react'

function page() {
  return (
    <div>
        <Repairhero />
        <Repairsec />
       
       <Reproc />
       <Rmeet />
        <Rvideo />
       
        <Rquery />
    </div>
  )
}

export default page