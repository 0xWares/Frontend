import React from 'react'
import 'remixicon/fonts/remixicon.css'

const RightCard = (props) => {
  return (
    <div className="w-3/6 h-[70vh] bg-green-200 m-6 overflow-hidden relative rounded-4xl">

        <img className="h-full w-full object-cover " src={props.img} alt="" />
        <div className="absolute p-5 flex flex-col justify-between top-0 left-0 h-full w-full ">
           
                <h1 className='p-3 w-8 flex  justify-center items-center h-8 bg-gray-800 rounded-full mt-10 text-white text-2xl'>{props.tag}</h1>
                <div>

                    <h4 className='mb-6 text-gray-300 leading-relaxed shadow-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</h4>
                    <div className='flex gap-3 justify-between'>
                        <button className='text-white bg-blue-600 px-8 rounded-full py-2 '>Click me</button>
                        <button className='text-white bg-blue-600 px-6 rounded-full py-2'><i className=" ri-arrow-right-line"></i></button>
                    </div>
                </div>

        </div>
    </div>
  )
}
 
export default RightCard