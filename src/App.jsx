import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import './App.css'


function App() {

  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      tag: "1"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      tag: "2"
    },
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      tag: "3"
    }
  ]

  return (
    <>
      
      <Section1 users={users}/>
      <Section2/>
    </>
  )
}

export default App
