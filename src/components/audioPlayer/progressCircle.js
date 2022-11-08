import React from 'react'
import './progressCircle.css'

const Circle = ({percentage, size, color, strokeWidth}) => {
    const radius = size / 2 -10;
    const circumference = (2 * Math.PI * radius) -20;
    const strokePct = (100 - Math.round(percentage) * circumference) / 100;
    
    return (
        <circle
            r={radius}
            cx="50%"
            cy="50%"
            fill='transparent'
            stroke={strokePct !== circumference ? color : ''}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={percentage ? strokePct : 0}
            strokeLinecap='round'
        ></circle>
    );
};

export default function ProgressCircle({percentage, isPlaying, image, size, color}) {
    return (
        <div className='progress-circle flex'>
            <svg width={size} height={size}>
                <g>
                    <Circle strokeWidth={"0.4rem"} size={size} color={"#3b4f73"} />
                    <Circle strokeWidth={"0.6rem"} size={size} color={color} percentage={percentage} />
                </g>
                <defs>
                    <clipPath id="myCircle">
                        <circle cx="50%" cy="50%" r={(size / 2) - 30} fill="#ffffff"/>
                    </clipPath>
                    <clipPath id="myInnerCircle">
                        <circle cx="50%" cy="50%" r={(size / 2) - 100} fill="#ffffff"/>
                    </clipPath>
                </defs>
                <image 
                    className={isPlaying ? 'active' : ''} 
                    href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
                    x={30} y={30} 
                    width={2*((size/2)-30)} 
                    height={2*((size/2)-30)}
                    clipPath="url(#myCircle)"
                />
                <image 
                    className={isPlaying ? 'active' : ''}
                    href={image}
                    x={100} y={100} 
                    width={2*((size/2)-100)} 
                    height={2*((size/2)-100)}
                    clipPath="url(#myInnerCircle)"
                />
            </svg>
        </div>
    );
}
