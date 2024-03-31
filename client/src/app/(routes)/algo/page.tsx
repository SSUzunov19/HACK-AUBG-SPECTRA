"use client"

import IntroSpinner from "@/components/ui/introSpinner";
import React, {useState} from "react";
import Image from "next/image";
import { motion } from "framer-motion"
import AlgoAnim1 from "@/public/svg/AlgoAnim1.svg";
import AlgoAnim2 from "@/public/svg/AlgoAnim2.svg";
import AlgoAnim3 from "@/public/svg/AlgoAnim3.svg";
import AlgoAnim4 from "@/public/svg/AlgoAnim4.svg";

function AlgoPage() {
    const [scrollLevel, setScrollLevel] = React.useState(0);
    const scrollLevelSVGMap:any = {
        1:AlgoAnim1,
        2:AlgoAnim2,
        3:AlgoAnim3,
        4:AlgoAnim4,
    }

    return (
        <div className="overflow-hidden" onScroll={(e)=>{e.bubbles}}>
            <div className="snap-center">
                    <IntroSpinner text="ALGORITHM" stage={1} />
            </div>
            <div className="md:grid md:grid-cols-8">
                <div className="md:col-span-5 md:z-2 md:h-screen">
                    <div className="md:bg-[#0A1715] md:h-full ">
                        <div className="font-neueItalic md:text-[82px] md:ml-[70px] md:pt-[94px]">
                            Meet our algorithm
                        </div>
                        <div className="font-neueItalic md:text-[30px] md:ml-[140px]">
                            Our algorithm doesn&apos;t just identify problems; it offers solutions. By leveraging real-time data, it provides actionable insights that lead to smarter, more sustainable production decisions. From optimizing resource allocation to minimizing environmental impact, it empowers manufacturers to make changes that matter.
                        </div>
                        <div className="font-neueItalic md:text-[30px] md:mt-[15px] md:ml-[140px]">
                            We understand the urgency of sustainability in fashion. Our algorithm is continuously learning, adapting to new data to offer the most up-to-date guidance. It&apos;s not just about meeting today&apos;s standards but setting new benchmarks for tomorrow, ensuring our partners lead the way in eco-friendly manufacturing.
                        </div>
                    </div>
                </div>
                <div className="md:bg-radialGradient md:col-span-3 md:z-1 md:relative md:w-full md:h-full md:overflow-hidden">
                    <Image src={scrollLevelSVGMap[1]} className="object-fill" alt="Anim" />
                </div>
            </div>
            <div className="md:grid md:grid-cols-8">
                <div className="md:col-span-5 md:z-2 md:h-screen">
                    <div className="md:bg-[#0A1715] md:h-full">
                        <div className="font-neueItalic md:text-[82px] md:ml-[70px] md:pt-[94px]">
                            How does rating work?
                        </div>
                        <div className="font-neueItalic md:text-[30px] md:ml-[140px]">
                            In the context of assessing factory sustainability, the rating system evaluates each factory on 18 distinct sustainability factors. These factors can encompass a wide range of elements such as energy efficiency, waste management, resource utilization, labor practices, and environmental impact. 
                        </div>
                        <div className="font-neueItalic md:text-[30px] md:mt-[15px] md:ml-[140px]">
                            Each factor is assigned a specific weight based on its significance towards overall sustainability goals, ensuring that more critical aspects have a proportionately greater impact on the final score. 
                        </div>
                        <div className="font-neueItalic md:text-[30px] md:mt-[15px] md:ml-[140px]">
                            Factories undergo a comprehensive analysis where their practices and performances are measured against predefined benchmarks for each of the 18 factors.
                        </div>
                    </div>
                </div>
                <div className="bg-radialGradient md:col-span-3 md:z-1 md:relative md:w-full md:h-full md:overflow-hidden">
                    <Image   className="rounded-sm"     src={scrollLevelSVGMap[2]} object-fit="cover" fill={true}  alt="Anim" />
                </div>
            </div>
            <div className="md:grid md:grid-cols-8">
                <div className="md:col-span-5 md:z-2 md:h-screen">
                    <div className="bg-[#0A1715] h-full">
                        <div className="font-neueItalic md:text-[82px] md:ml-[70px] md:pt-[94px]">
                            Meet our algorithm
                        </div>
                        <div className="font-neueItalic md:text-[30px] md:ml-[140px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</div>
                        <div className="font-neueItalic md:text-[30px] md:mt-[15px] md:ml-[140px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</div>
                        <div className="font-neueItalic md:text-[30px] md:mt-[15px] md:ml-[140px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</div>
                    </div>
                </div>
                <div className="bg-radialGradient md:col-span-3 md:z-1 md:w-full">
                        <Image src={scrollLevelSVGMap[3]} className="" alt="Anim" />
                </div>
            </div>
            <div className="md:grid md:grid-cols-8">
                <div className="md:col-span-5 md:z-2 md:h-screen">
                    <div className="bg-[#0A1715] md:h-full">
                        <div className="font-neueItalic md:text-[82px] md:ml-[70px] md:pt-[94px]">
                            Meet our algorithm
                        </div>
                        <div className="font-neueItalic md:text-[30px] md:ml-[140px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</div>
                        <div className="font-neueItalic md:text-[30px] md:mt-[15px] md:ml-[140px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</div>
                        <div className="font-neueItalic md:text-[30px] md:mt-[15px] md:ml-[140px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</div>
                    </div>
                </div>
                <div className="bg-radialGradient md:col-span-3 md:z-1 md:w-full">
                        <Image src={scrollLevelSVGMap[4]} className="" alt="Anim" />
                </div>
            </div>
        </div>
    );
}

export default AlgoPage;