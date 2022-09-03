export interface IMeta {
  title?: string;
  description?: string;
  permalink?: string;
}

export interface IPage {
  content: IMeta;
}

export interface INav {
  label: string;
  url: string;
}
