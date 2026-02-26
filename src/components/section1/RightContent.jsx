import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    console.log(props.users);
    
  return (
    <div className='flex  justify-around w-3/4  '>
        
       {props.users.map(function(elem){
        return <RightCard img={elem.img} tag={elem.tag}/>
       })}
        
    </div>
    
  )
}

export default RightContent