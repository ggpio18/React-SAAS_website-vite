import React, { useState } from 'react'
import SectionHeader from './SectionHeader'
import { faqItems, headerContent } from '../data'
import Overlay from './Overlay';

function Faq() {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenIndexes((prev) => 
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

  return (
    <div>
      <SectionHeader
        tag={headerContent["Action"].tag}
        title={headerContent["Action"].tag}
        description={headerContent["Action"].tag}
      />
      <div className='w-full flex flex-col items-center justify-center gap-[30px]'>
        {faqItems.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return(
                <div key={index} className='w-full md:max-w-[800px] max-w-[85%] z-[-1]'>
                    <div
                    onClick={() => toggleItem(index)} 
                    className=''>
                        <span className='text-light'>{item.question}</span>
                        <span className='text-light text-2xl'>{isOpen ? "-" : "+"}</span>
                    </div>

                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] py-4 px-5' : 'grid-rows-[0fr] px-5'}`}>
                        <div className='overflow-hidden text-gray-50 text-sm'>
                            {item.answer}
                        </div>
                    </div>
                </div>
            );
        })}
      </div>
      <Overlay/>
    </div>
  );
}

export default Faq