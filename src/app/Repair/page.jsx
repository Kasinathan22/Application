import Repairhero from '@/components/Repair/Repairhero'
import Reproc from '@/components/Repair/Repairprocess/Reproc'
import Repairsec from '@/components/Repair/Repairsec/Repairsec'
import React from 'react'

function page() {
  return (
    <div>
        <Repairhero />
       <Reproc />
        <Repairsec />
    </div>
  )
}

export default page