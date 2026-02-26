import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
  return (
     <div className="py-8 gap-5 flex justify-between h-[85vh]  px-18">
        <LeftContent />
        <RightContent users={props.users}/>

     </div>
  )
}

export default Page1content