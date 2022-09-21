export type Data = {
  name: string;
  care: Care;
};

export type Care = {
  [q: string]: string;
};
