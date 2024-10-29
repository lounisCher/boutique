import React from 'react'

const SkeletonInfo = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='h-[20px] w-[400px] bg-slate-200 animate-pulse'>
      </div>
    <div className='h-[20px] w-[70px] bg-slate-200 rounded-lg animate-pulse'>
      </div>
      <div className='h-[20px] w-[400px] bg-slate-200 animate-pulse'>
      </div>
      <div className='h-[20px] w-[400px]bg-slate-200 animate-pulse'>
      </div>
      <div className='h-[30px] w-[100px] bg-slate-200 animate-pulse rounded-lg'>
      </div>
    </div>
  )
}

export default SkeletonInfo
