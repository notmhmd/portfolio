export interface BaseEntity {
  id?: string;
}

export interface Project extends BaseEntity {
  name: string;
  coverImage?: string;
  description: string;
  link: string;
}

export interface Experience extends BaseEntity {
  name: string;
  position?: string;
  description: string;
  dateFrom: Date;
  dateUntil: Date;
}
