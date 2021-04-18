import React from 'react';
import Image from 'next/image';
import IMG_CONFIG from './image-config';

type ImageProps = {
  src: string;
};

/**
 * Some documented component
 *
 * @component
 */

const ImageLogo: React.FC<ImageProps> = ({ src }) => {
  return (
    <Image
      src={src}
      alt='logo'
      width={IMG_CONFIG.width}
      height={IMG_CONFIG.height}
    />
  );
};

export default ImageLogo;
