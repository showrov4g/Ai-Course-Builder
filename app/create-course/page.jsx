import { SiElasticstack } from "react-icons/si";
import React from 'react'

const page = () => {
const stepperOptions = [
    {
        id: 1,
        name: 'category',
        icons: <SiElasticstack />,
    },
    {
        id: 2,
        name: 'category',
        icons: <SiElasticstack />,
    },
    {
        id: 3,
        name: 'category',
        icons: <SiElasticstack />,
    },
    {
        id: 4,
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
                    <div >
                     {
                            stepperOptions.map((item) => (
                                <div key={item.id} className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <div className='flex items-center justify-center w-10 h-10 bg-purple-500 rounded-full'>
                                            {item.icons}
                                        </div>
                                        <h3 className='text-xl font-medium ml-2'>{item.name}</h3>
                                    </div>
                                    <div className='w-1 h-1 bg-purple-500'></div>
                                </div>
                            ))
                     }
                    </div>
                </div>
            </div>
        {/* components  */}

        {/* next previous button */}
    </div>
  )
}

export default page;