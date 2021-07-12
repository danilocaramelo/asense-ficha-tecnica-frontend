import { message } from "antd";

export const addInterceptors = (http) => {
  http.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (typeof error.response !== "undefined") {
        switch (error?.response.status) {
          case 400:
            message.error("Sinto muito, mas foi enviado algo errado");
            break;
          default:
            message.error("Algo deu errado");
        }
      } else {
        message.error("Servidor não responde");
      }
      return Promise.reject(error);
    }
  );

  return http;
};
