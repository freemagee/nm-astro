import { FC } from "react";
import { IPost } from "@typings";

const HomeLatestPost: FC<IPost> = ({ title, date, url }) => {
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
