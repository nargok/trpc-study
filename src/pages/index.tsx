import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <h1 className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='text-2xl text-center'>Which Pokemon is Rounder?</div>
      <div className="p-2"></div>
      <div className='border rounded p-8 flex justify-between item-center max-w-2xl'>
        <div className='w-16 h-16 bg-red-200'></div>
        <div className='p-8'>Vs</div>
        <div className='w-16 h-16 bg-red-200'></div>
      </div>
    </h1>
  )
}

export default Home
