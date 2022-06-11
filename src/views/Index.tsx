import { MarkdownInstance } from "node_modules/astro/dist/types/@types/astro";

import { IFrontmatter } from "@typings";
import BaseHeader from "@components/BaseHeader";
import Nav from "@components/Nav";
import Home from "@components/Home";
import HomeLatestPost from "@components/HomeLatestPost";

const indexTitle = "Index";
const indexDescription = "The index of the blog";
const indexPermalink = "";

interface IProps {
  allPosts: MarkdownInstance<IFrontmatter>[];
}

const Index = ({ allPosts }: IProps) => {
  const dateSortedPosts = allPosts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).valueOf() -
      new Date(a.frontmatter.date).valueOf()
  );
  const {
    frontmatter: { title, date, description },
    url,
  } = dateSortedPosts.slice(0, 1)[0];

  return (
    <html lang="en">
      <head>
        <BaseHeader
          pageTitle={indexTitle}
          pageDescription={indexDescription}
          pagePermalink={indexPermalink}
        />
      </head>
      <body>
        <Nav />

        <Home />

        <HomeLatestPost title={title} date={date} url={url} />
      </body>
    </html>
  );
};

export default Index;
