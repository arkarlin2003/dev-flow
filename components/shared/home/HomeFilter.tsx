import { HomePageFilters } from '@/constants/filter'
import React from 'react'

const HomeFilter = () => {
  return (
    <div className='hidden md:flex items-center gap-3'>
        {
            HomePageFilters.map(page=>(
                <button key={page.value} className={`p-2 px-5 text-sm rounded-lg text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-[#212734]/80 `}>{page.name}</button>
            ))
        }
    </div>
  )
}

export default HomeFilter