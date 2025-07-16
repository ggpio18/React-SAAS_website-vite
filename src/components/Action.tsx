import React from 'react'
import SectionHeader from './SectionHeader'
import { headerContent } from '../data'

function Action() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-5 relative py-[80px] md:px-[120px] bg-gray4'>
        <SectionHeader
        tag={headerContent['Action'].tag}
        title={headerContent['Action'].tag}
        description={headerContent['Action'].tag}
         />
        <button className='bg-primary cursor-pointer text-center w-[150px] h-[50px] text-black'>Get Started</button>
    </div>
  )
}

export default Action