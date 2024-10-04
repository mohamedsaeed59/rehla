export type DataSlideAuth = {
  image: string;
  title: string;
  des: string;
  heightScreen:string
};

export type DataBreadCrumb= {
  title: string;
  subTitle: string;
};


export type PropsInputsLogin = {
  phone: string,
  otp: string,
  fcm_token:string,
};

export type TLoading = "idle" | "pending" | "succeeded" | "failed";