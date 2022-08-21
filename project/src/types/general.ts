export type TabView = 'Overview' | 'Details' | 'Reviews';

export type Token = string;

export type User = {
  avatarUrl: string
  email: string
  id: number
  name: string
  token: string
};

export type Login = {
  email: string,
  password: string
};
