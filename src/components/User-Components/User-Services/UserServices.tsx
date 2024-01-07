import Section from '@/components/ui/section'
import React from 'react'
import Points from './Points'
import UserMembership from './UserMembership'


type Props = {}

const UserServices = (props: Props) => {
  return (
    <Section size='xs'>
        <div className='flex flex-wrap gap-5'>
            <Points/>
            <div className='flex-1'><UserMembership/></div>
        </div>
    </Section>
  )
}

export default UserServices