'use client';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import React from 'react'

const AddCourse = () => {
    const {user} = useUser();
  return (
    <div>
        <div>
            <h2 className='text-2xl'>Hello, <span className='font-bold'>{user?.fullName}</span></h2>
            <p>Create a course with AI and learn something more</p>
        </div>
        <Button className='mt-4'>Create a course</Button>
    </div> 
  )
}

export default AddCourse