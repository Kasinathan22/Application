import Wcard from '@/components/Wholesale/Wcard/Wcard'
import Wcity from '@/components/Wholesale/Wcity/Wcity'
import Wclient from '@/components/Wholesale/Wclient/Wclient'
import Wsalehero from '@/components/Wholesale/Wsalehero/Wsalehero'
import React from 'react'

function page() {
  return (
    <div>
        <Wsalehero />
        <Wcard />
        <Wclient />
        <Wcity />
    </div>
  )
}

export default page