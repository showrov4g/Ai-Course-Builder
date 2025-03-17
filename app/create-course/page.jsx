import { SiElasticstack } from "react-icons/si";
import React from 'react'

const page = () => {
const stepperOptions = [
    {
        id: 1,
        name: 'category',
        icons: <SiElasticstack />,
    }
]

  return (
    <div>
        {/* stepper  */}
            <div>
                <div className='flex flex-col items-center justify-between'>
                    <h2 className='text-4xl text-purple-500 font-medium'>Create course</h2>
                </div>
            </div>
        {/* components  */}

        {/* next previous button */}
    </div>
  )
}

export default page;