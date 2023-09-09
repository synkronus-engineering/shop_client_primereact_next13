/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

type ImgProps = { src: string; alt: string; width?: number; height?: number };

const ImageElm = (imgProps: ImgProps) => <img {...imgProps} />;

export { ImageElm };
