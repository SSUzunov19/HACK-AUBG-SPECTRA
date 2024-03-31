import IntroSpinner from "@/components/ui/introSpinner";
import React from "react";

function AlgoPage() {
    return (
        <div className="overflow-hidden">
            <div className="snap-center">
                    <IntroSpinner text="algorithm" stage={1} />
            </div>
            <div className="grid grid-cols-8">
                <div className="snap-x col-span-5 z-2 h-screen">
                    <div className="snap-center bg-[#0A1715] h-full">
                        <div className="font-neueItalic text-[82px] ml-[70px] mt-[94px]">
                            Meet our algorithm
                        </div>
                        <div className="font-neueItalic text-[40px] ml-[140px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</div>
                        <div className="font-neueItalic text-[40px] ml-[140px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</div>
                        <div className="font-neueItalic text-[40px] ml-[140px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</div>
                    </div>
                </div>
                <div className="bg-radialGradient col-span-3 z-1">
                    asdasdasdasdasdasdasd
                </div>
            </div>
        </div>
    );
}

export default AlgoPage;