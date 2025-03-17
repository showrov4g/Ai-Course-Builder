'use client';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'

const AddCourse = () => {
    const {user} = useUser();
  return (
    <div className='flex items-center justify-between'>
        <div>
            <h2 className='text-2xl'>Hello, <span className='font-bold'>{user?.fullName}</span></h2>
            <p>Create a course with AI and learn something more</p>
        </div>
        <Link href='/create-course'>
        <Button className='mt-4'>Create a course</Button>
        </Link>
    </div> 
  )
}

export default AddCourse