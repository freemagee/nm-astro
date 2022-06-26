import { FC } from "react";

interface IProps {
  src: string;
}

const YouTube: FC<IProps> = ({ src }) => {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: "0",
        overflow: "hidden",
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100% ",
          border: "0",
        }}
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTube;
