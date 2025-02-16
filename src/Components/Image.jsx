import { IKImage } from "imagekitio-react";

const Image = ({ src, w, h, alt, className }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      alt={alt}
      className={className}
      height={h}
      width={w}
      lqip={{ active: true, quality: 20 }}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default Image;
