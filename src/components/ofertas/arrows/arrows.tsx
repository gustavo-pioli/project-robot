import React from 'react';
import styles from './arrows.module.css';

export function NextArrow(props: React.HTMLAttributes<HTMLDivElement>) {
  const [color, setColor] = React.useState('#58339C');
  const { onClick } = props;
  return (
    <div
      onMouseOver={() => setColor('#5400F0')}
      onMouseOut={() => setColor('#58339C')}
      className={`${styles.nextArrow} `}
      onClick={onClick}
    >
      <svg
        width="27"
        height="40"
        viewBox="0 0 27 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_65_196)">
          <path
            d="M21.7322 13.3814C23.0339 14.8845 23.0339 17.1155 21.7322 18.6186L11.5237 30.4064C9.09918 33.206 4.5 31.4913 4.5 27.7878L4.5 4.21224C4.5 0.508704 9.09918 -1.20599 11.5237 1.59363L21.7322 13.3814Z"
            fill={color}
          />
        </g>
        <defs>
          <filter
            id="filter0_d_65_196"
            x="0.5"
            y="0.204224"
            width="26.2085"
            height="39.5916"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_65_196"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_65_196"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export function PrevArrow(props: React.HTMLAttributes<HTMLDivElement>) {
  const [color, setColor] = React.useState('#58339C');

  const { onClick } = props;
  return (
    <div
      onMouseOver={() => setColor('#5400F0')}
      onMouseOut={() => setColor('#58339C')}
      className={`${styles.prevArrow} `}
      onClick={onClick}
    >
      <svg
        width="27"
        height="40"
        viewBox="0 0 27 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_53_89)">
          <path
            d="M5.26779 18.6186C3.96607 17.1155 3.96607 14.8845 5.26779 13.3814L15.4763 1.59363C17.9008 -1.20599 22.5 0.508701 22.5 4.21224L22.5 27.7878C22.5 31.4913 17.9008 33.206 15.4763 30.4064L5.26779 18.6186Z"
            fill={color}
          />
        </g>
        <defs>
          <filter
            id="filter0_d_53_89"
            x="0.291504"
            y="0.204224"
            width="26.2085"
            height="39.5916"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_53_89"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_53_89"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
