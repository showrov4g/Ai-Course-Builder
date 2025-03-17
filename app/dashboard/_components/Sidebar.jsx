"use client";
import Image from 'next/image'
import React from 'react';
import { FaHome } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { GiUpgrade } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';



const Sidebar = () => {
    const menu = [
        {
            id: 1,
            name: 'Home',
            icon: <FaHome />,
            link: '/dashboard'
        },
        {
            id: 2,
            name: 'Explore',
            icon: <HiOutlineAcademicCap />,
            link: '/dashboard/explore'
        },      {
            id: 3,
            name: 'upgrade',
            icon: <GiUpgrade />,
            link: '/dashboard/upgrade'
        }
        ,  {
            id: 4,
            name: 'Logout',
            icon: <IoLogOut />,
            link: '/dashboard/logout'
        }
    ]
const path = usePathname();

  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md ">   
        <Image src={"/logo.png"} width={100} height={100} />
        <hr className='my-5' />
        <ul>
            {menu.map((item,index)=>(
                <Link href={item.link} key={index}>
                <div className={`flex items-center space-x-2 my-2 text-gray-600 p-4 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg ${item.link === path&&'bg-gray-100 text-black'}`} key={index}>
                    
                    <div className='text-2xl'>{item.icon}</div>
                    <h2>{item.name}</h2>

                </div>
                </Link>
            ))}
        </ul>
        <div className='absolute bottom-10 w-[80%]'>
         <Progress value={33} />
            <h2 className='text-sm my-2'>3 out of 5 course created</h2>
            <h2 className='text-xs text-gray-500'>Upgrade your plane for generate unlimited course </h2>  
        </div>
    </div>
  )
}

export default Sidebar