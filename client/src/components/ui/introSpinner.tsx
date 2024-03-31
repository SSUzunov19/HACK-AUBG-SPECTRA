import React from "react";
import Spinner1 from "@/public/svg/Spinner1.svg";
import Spinner2 from "@/public/svg/Spinner2.svg";
import Spinner3 from "@/public/svg/Spinner3.svg";
import Image from "next/image";

interface IntroSpinnerProps {
    text: string;
    stage: number;
}

const stageToSpinnerMap:any = {
    1: Spinner1,
    2: Spinner2,
    3: Spinner3,
}

function IntroSpinner(props: IntroSpinnerProps) {
    return (
        <div className="bg-[#0A1715] h-screen w-screen flex justify-center overflow-x-hidden z-0 relative">
            <Image
                src={stageToSpinnerMap[props.stage]}
                width={750}
                height={750}
                alt="Spinner"
                className="animate-introSpin overflow-hidden"
            />
            <div className=" md:absolute md:text-[103px] font-vintage md:font-vintage md:z-1 md:text-center md:bottom-[45%] transition-transform text-[#61C9B8]">
                {props.text}
            </div>
        </div>
    );
}

export default IntroSpinner;