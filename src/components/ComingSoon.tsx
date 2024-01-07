import React from 'react'

type Props = {}

const ComingSoon = (props: Props) => {
  return (
    <div className='bg-theme-purple text-center py-5 flex flex-col gap-2'>
        <p className='text-white sm:text-lg text-[14px] font-semibold'>MARY JANE SOCIAL CLUB</p>
        <h2 className='lg:text-5xl sm:text-3xl text-[18px] text-white font-semibold'>Memberships <span className='text-theme-yellow'>Coming Soon</span></h2>
    </div>
  )
}

export default ComingSoon