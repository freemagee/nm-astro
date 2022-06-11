interface IBasePost {
  title: string;
  date: string;
  description?: string;
}

export interface IFrontmatter extends IBasePost {
  layout?: string;
  categories?: string[];
  tags?: string[];
}

export interface IPost extends IBasePost {
  url: string;
}
