import clsx from 'clsx'
import React from 'react'

const Skeleton = ({status}: {status: string}) => {
  return (
    <div className={clsx(
      'bg-slate-200 rounded-lg animate-pulse transition-opacity',
      {
        'w-[400px] h-[300px] ': status === 'info',
        'w-[250px] h-[300px] ': status === 'list',
      },
    )}>  




    
    </div>
  )
}

export default Skeleton
