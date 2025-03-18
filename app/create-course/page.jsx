"use client";
import { SiElasticstack } from "react-icons/si";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const page = () => {
  const stepperOptions = [
    {
      id: 1,
      name: "category",
      icons: <SiElasticstack />,
    },
    {
      id: 2,
      name: "category",
      icons: <SiElasticstack />,
    },
    {
      id: 3,
      name: "category",
      icons: <SiElasticstack />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* stepper  */}
      <div>
        <div className="flex flex-col items-center justify-between">
          <h2 className="text-4xl text-purple-500 font-medium">
            Create course
          </h2>
          <div className="flex items-center mt-10">
            {stepperOptions.map((item, index) => (
              <div key={item.id} className="flex items-center">
                <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                  <div
                    className={`bg-gray-500 p-3 rounded-full text-white ${
                      activeIndex >= index && "bg-purple-600"
                    }`}
                  >
                    {item.icons}
                  </div>
                  <h2 className="hidden md:block md:text-sm">{item.name}</h2>
                </div>
                {index != stepperOptions.length - 1 && (
                  <div
                    className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300  ${
                      activeIndex - 1 >= index && "bg-purple-600"
                    }`}
                  >
                    {" "}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-10 md:px-20 lg:px-44">
        {/* components  */}

        {/* next previous button */}
        <div className="flex justify-between mt-10">
          <Button
            variant={"outline"}
            onClick={() => setActiveIndex(activeIndex - 1)}
            className="bg-purple-500 text-white p-3 rounded-md"
          >
            Previous
          </Button>
         {activeIndex<2 && <Button
            onClick={() => setActiveIndex(activeIndex + 1)}
            className="bg-purple-500 text-white p-3 rounded-md"
          >
            Next
          </Button>}
         {activeIndex ==2 && <Button
            onClick={() => setActiveIndex(activeIndex + 1)}
            className="bg-purple-500 text-white p-3 rounded-md"
          >
            Generate Course Layout 
          </Button>}
        </div>
      </div>
    </div>
  );
};

export default page;
