import { FC } from "react";
import { IPostProps } from "@typings";

const HomeLatestPost: FC<IPostProps> = ({ post }) => {
  const { title, date, url } = post;

  return (
    <>
      <p>
        {title} on {new Date(date).toDateString()}
      </p>
      <p>
        <a href={url}>Read more</a>
      </p>
    </>
  );
};

export default HomeLatestPost;
