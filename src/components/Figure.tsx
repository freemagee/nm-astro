import { FC } from "react";

const Figure: FC<HTMLImageElement> = ({ src, title, alt, loading }) => {
  return (
    <figure>
      <img src={src} title={title} alt={alt} loading={loading} />
      <figcaption>{title}</figcaption>
    </figure>
  );
};

export default Figure;
