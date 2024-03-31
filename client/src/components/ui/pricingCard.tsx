import React from 'react';

interface PricingCardProps {
    children?: React.ReactNode[];
    className?: string;
}

function PricingCard(props: PricingCardProps) {
    return(
        <div className={`bg-gradient-to-b from-[#CAFAF2] to-[#6BB4A8] border-[6px] border-[#515151] rounded-[25px] mx-[33px] md:mx-[60px] ${props.className}`}>
            {...props.children??[]}
        </div>
    );
}

export default PricingCard