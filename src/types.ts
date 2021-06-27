export interface User {
  id: number;
  name: string;
  company: {
    name: string;
    bs: string
  }
}

export interface Post {
  id: number,
  title: string,
  body: string,
  userId: number,
  userData?: User
}

export interface Photo {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

export interface Tag {
  id: number,
  name: string,
  category: string
}

export interface Entity {
  name: string,
  entity: string,
  location: string,
  expertise: string,
  date: string,
  firm: string
}

export interface Fee {
  year: number,
  costCenter: string,
  totalAmount: string,
  lawFirm: string
}

export interface EntityType {
  title: string,
  body: string
}