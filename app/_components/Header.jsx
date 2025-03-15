import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <Image src={"/logo.png"} width={200} height={200} alt='Logo_image'></Image>
    </div>
  )
}

export default Header