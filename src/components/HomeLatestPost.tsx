import { IPost } from "@typings";

const HomeLatestPost = ({ title, date, url }: IPost) => {
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
