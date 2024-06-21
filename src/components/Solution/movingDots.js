// components/MovingDot.js
import React from "react";

const MovingDot = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-600">
      <svg width="400" height="400" viewBox="0 0 400 400" className="relative">
        <defs>
          <linearGradient id="lineGradient" gradientTransform="rotate(153.88)">
            <stop offset="0%" stopColor="#C670E7" />
            <stop offset="33.34%" stopColor="#62D89F" />
            <stop offset="75.15%" stopColor="#00A8FF" />
            <stop offset="105.85%" stopColor="#1C2D5C" />
          </linearGradient>
        </defs>
        {/* Define multiple paths with gradient stroke */}
        {/* <path
          id="path1"
          d="M 10 10 Q 100 10, 100 100 T 100 300 Q 100 390, 190 390"
          stroke="url(#lineGradient)"
          strokeWidth="4"
          fill="transparent"
        />
        <path
          id="path2"
          d="M 10 70 H 150 C 200 70, 180 2, 190 5"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          fill="transparent"
        />
        <path
          id="path3"
      d="M 10 20 H 100 C 140 20, 140 100, 100 100 V 300 C 140 300, 140 380, 100 380 H 10"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          fill="transparent"
        />
         <path
          id="path3"
      d="M 10 20 H 100 C 140 20, 140 100, 100 100 V 300 C 140 300, 140 380, 100 380 H 10"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          fill="transparent"
        />
         <path
          id="path3"
      d="M 10 20 H 100 C 140 20, 140 100, 100 100 V 300 C 140 300, 140 380, 100 380 H 10"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          fill="transparent"
        /> */}
        <path
          id="path3"
          d="M81.0001 166L80.9961 119.31L80.9961 47C80.9961 22.1472 60.8489 1.99999 35.9961 1.99999L2.00001 1.99999"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          fill="transparent"
        />
        {/* <path
         id="path3"
          d="M81.0001 166L80.9961 119.31L80.9961 47C80.9961 22.1472 60.8489 1.99999 35.9961 1.99999L2.00001 1.99999"
          stroke="url(#paint0_linear_893_2)"
          stroke-width="3"
          stroke-linecap="round"
        /> */}

        {/* Define icons along the paths */}
        <g transform="translate(50,200)">
          <rect width="20" height="20" fill="#FFD700" />
        </g>
        <g transform="translate(350,200)">
          <circle cx="10" cy="10" r="10" fill="#00FF00" />
        </g>
        <g transform="translate(100,100)">
          <polygon points="0,0 20,0 10,20" fill="#FF4500" />
        </g>
        <g transform="translate(400,100)">
          <ellipse cx="10" cy="10" rx="10" ry="5" fill="#1E90FF" />
        </g>

        {/* Moving dot */}
        <circle cx="" cy="0" r="5" fill="yellow">
          <animateMotion
            repeatCount="indefinite"
            dur="5s"
            keyPoints="0;1"
            keyTimes="0;1"
          >
            <mpath href="#path3" />
          </animateMotion>
        </circle>
        <circle cx="0" cy="0" r="5" fill="yellow">
          <animateMotion
            repeatCount="indefinite"
            dur="5s"
            keyPoints="0;1"
            keyTimes="0;1"
          >
            <mpath href="#path2" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
};

export default MovingDot;
