export type TCity = {
  id: number;
  title: string;
};

export type TResponse = {
  message: string;
  status: number;
  data: {
    cities: TCity[] | null;
    terms_title: string,
    terms_body: string,
    policy_title: string,
    policy_body: string,
    onborad_pages: null,
    tax: any,
  };
};
