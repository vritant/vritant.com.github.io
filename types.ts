
export interface Experience {
  role: string;
  company: string;
  period: string;
  oneLiner: string;
}

export interface Article {
  title: string;
  date: string;
  link: string;
  platform: string;
  imageUrl: string;
}

export interface Hobby {
  name: string;
  description: string;
  imageUrl: string;
}

export interface Project {
  name: string;
  description: string;
  link: string;
  tags: string[];
  imageUrl: string;
}
