"use client";

import Image from "next/image";
import { Tabs } from "@/components/AnimateTabs";
import RTPI from "@/images/product3.png"
import RScale from "@/images/product2.png"

export function ProductsTabs() {
  const tabs = [
    {
      title: "RTScale",
      value: "RTScale",
      content: (
        <div className="w-full shadow-xl overflow-hidden relative gap-4 xl:flex-row flex-col h-full flex items-center justify-between rounded-2xl p-10 font-bold text-zinc-950 bg-gradient-to-br from-[#e4e6e7] to-[#c2c5ca]">
          <div className=" flex flex-col items-start gap-4">
            <p className=" text-2xl font-semibold text-zinc-950">RTScale Real-Time Simulator<br></br>High-Performance & Balanced</p>
            <p className=" text-xl text-zinc-500">FPGA-Based HIL/RCP</p>
            <div className=" flex flex-col text-zinc-500 items-start gap-4 justify-start">
              <p className=" ">
                CPU bare-metal 2us
              </p>
              <p className=" ">
                HIL/RCP, seamless transition
              </p>
              <p className=" ">
                FPGA breakthrough 50ns
              </p>
              <p className=" ">
                Simulink one dick deployment
              </p>
            </div>
          </div>
          <div className=" relative min-w-[290px] min-h-[180px] md:min-w-[595px] md:min-h-[314px]">
            <Image
              src={RScale}
              alt="rtscale image"
              fill
              className="object-contain object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
          </div>
        </div>
      ),
    },
    {
      title: "RTPi",
      value: "RTPi",
      content: (
        <div className="w-full shadow-xl overflow-hidden flex xl:flex-row flex-col gap-4 items-center justify-between relative h-full rounded-2xl p-10 font-bold text-zinc-950 bg-gradient-to-br from-[#e4e6e7] to-[#c2c5ca]">
          <div className=" flex flex-col items-start gap-4">
            <p className=" text-2xl font-semibold text-zinc-950">RTPi Real-Time Simulator</p>
            <p className=" text-zinc-500">RTPi uses a high-performance quad-core ARM CPU with a maximum clock speed of 1.8GHz, enabling rapid control algorithm/model development from MATLAB Simulink with one-click download. Utilizing advanced numerical algorithms and bare-metal CPU technology, it performs ultra-high-frequency real-time simulations with a minimum step size of 20 microseconds, supporting calculations for complex systems with up to 300 switching elements.</p>
          </div>
          <div className=" relative min-w-[290px] min-h-[200px] md:min-w-[531px] md:min-h-[372px]">
            <Image
              src={RTPI}
              alt="rtpi image"
              fill
              className="object-contain object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
          </div>
        </div>
      ),
    },

  ];

  return (
    <div className="h-[60rem] md:h-[40rem] [perspective:1000px] relative  flex flex-col  mx-auto w-full  items-start justify-start ">
      <Tabs tabs={tabs} />
    </div>
  );
}


