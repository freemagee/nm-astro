interface BasePost {
  title: string;
  date: string;
  description?: string;
}

export interface Frontmatter extends BasePost {
  layout?: string;
  categories?: string[];
  tags?: string[];
}

export interface Post extends BasePost {
  url: string;
}
