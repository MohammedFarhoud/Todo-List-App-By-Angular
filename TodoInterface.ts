export interface Todo {
  readonly id: number;
  todo: string;
  completed: boolean;
  userId?: number;
  favourite?: boolean;
  deleted?: boolean;
};

export interface User {
  name: string;
  imgSrc: string;
  favQuote: string;
  loggedTime: string;
}


