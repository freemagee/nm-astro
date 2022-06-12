import { FC } from "react";
import { IPostProps } from "@typings";

const PostPreview: FC<IPostProps> = ({ post }) => {
  const { title, date, description, url } = post;

  return (
    <article>
      <header>
        <p>{date.toDateString()}</p>
        <a href={url}>
          <h1>{title}</h1>
        </a>
      </header>
      <p>{description}</p>
      <a href={url}>Read more</a>
    </article>
  );
};

export default PostPreview;
