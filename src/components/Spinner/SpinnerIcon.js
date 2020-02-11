import React from 'react';

const SpinnerIcon = () => {
  return (
    <svg>
      <rect x="15" y="30" width="10" height="40" fill="#93dbe9">
        <animate
          attributeName="opacity"
          dur="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          values="1;0.2;1"
          begin="-0.6"
        ></animate>
      </rect>
      <rect x="35" y="30" width="10" height="40" fill="#689cc5">
        <animate
          attributeName="opacity"
          dur="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          values="1;0.2;1"
          begin="-0.4"
        ></animate>
      </rect>
      <rect x="55" y="30" width="10" height="40" fill="#5e6fa3">
        <animate
          attributeName="opacity"
          dur="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          values="1;0.2;1"
          begin="-0.2"
        ></animate>
      </rect>
      <rect x="75" y="30" width="10" height="40" fill="#3b4368">
        <animate
          attributeName="opacity"
          dur="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          values="1;0.2;1"
          begin="-1"
        ></animate>
      </rect>
    </svg>
  );
};

export default SpinnerIcon;
