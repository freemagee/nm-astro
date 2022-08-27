import { FC } from "react";
import { IPostProps } from "@typings";

const HomeLatestPost: FC<IPostProps> = ({ post }) => {
  const { title, date, url } = post;

  return (
    <div className="p-2 bg-white border-solid border-t-2 border-blue-500">
      <p>
        {title} on {date.toDateString()}
      </p>
      <p>
        <a href={url}>Read more</a>
      </p>
    </div>
  );
};

export default HomeLatestPost;
