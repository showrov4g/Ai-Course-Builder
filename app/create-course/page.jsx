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
                    <div className="flex items-center">
                     {
                            stepperOptions.map((item) => (
                                <div key={item.id} className="flex items-center" >
                                    <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                                       <div className="bg-gray-500 p-3 rounded-full text-white">
                                        {item.icons}
                                       </div>
                                       <h2 className="hidden md:block md:text-sm">{item.name}</h2>
                                    </div>
                                    <div className="h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300 ">


                                    </div>
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