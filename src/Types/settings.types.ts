export type TCity = {
  id: number;
  title: string;
};

export type TResponse = {
  message: string;
  status: number;
  data: {
    cities: TCity[] | null;
  };
};
