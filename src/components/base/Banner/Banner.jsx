import React, { useState } from 'react';
import { Image, CloudinaryContext } from 'cloudinary-react';
import { CLAUDINARY_PATH } from '../../../shared/const';
import bannerData from './index.json';
import styles from './banner.css';

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const { container, img } = styles;

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  //todo: update banner a bit to allow sliding

  return (
    <div className={container}>
      <Image
        className={img}
        publicId={`${CLAUDINARY_PATH}/image/upload/v1652641119/promo_2.png`}
      />
      {/* {bannerData.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? `slide activeAnim` : 'slide'}>
            <CloudinaryContext cloudName="dg91vh5ga">
              <Image
                className="img"
                publicId={`https://res.cloudinary.com/dg91vh5ga/image/upload/v1652641119/promo_${obj.id}.png`}
              />
            </CloudinaryContext>
          </div>
        );
      })}

      <div className="dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            key={`dot-${index}`}
            onClick={() => moveDot(index + 1)}
            className={
              slideIndex === index + 1 ? 'dot activeDot' : 'dot'
            }></div>
        ))}
      </div> */}
    </div>
  );
};

export default Banner;
