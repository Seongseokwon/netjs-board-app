export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

export interface IBoard {
  id: string;
}

export const enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
