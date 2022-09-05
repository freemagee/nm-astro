export interface IBasePost {
  title: string;
  date: Date;
  description?: string;
}

export interface IFrontmatter extends IBasePost {
  layout?: string;
  categories?: string[];
  tags?: string[];
}

export interface IPost extends IFrontmatter {
  url?: string;
}

export interface IPostProps {
  post: IPost;
}

// Refer to Post.astro for usage
export type AstroPostContent = Omit<IPost, "date"> & { date: string };
