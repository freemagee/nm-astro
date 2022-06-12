export interface IBasePost {
  title: string;
  date: string;
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
