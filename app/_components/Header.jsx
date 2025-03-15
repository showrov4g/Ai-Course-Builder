import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center  shadow-md'>
      <Image src={"/logo.png"} width={100} height={100} alt='Logo_image'></Image>
      <Button>Get Started </Button>
    </div>
  )
}

export default Header