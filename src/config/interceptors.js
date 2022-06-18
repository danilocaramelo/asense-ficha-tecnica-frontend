import { message, notification } from "antd";

export const addInterceptors = (http) => {
  http.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (typeof error.response !== "undefined") {
        switch (error?.response.status) {
          case 400:
            notification.open({
              message: "Algo foi enviado errado",
              description: "Alguma coisa foi enviada errada :(",
            });
            break;
          case 404:
            notification.open({
              message: "Alguma rota esta errada",
              description: "O famoso 'not found'. Não encontramos sua rota :(",
            });
            break;
          default:
            notification.open({
              message: "Algo deu errado",
              description: "Por alguma razão, algo deu errado :(",
            });
        }
      } else {
        notification.open({
          message: "Servidor não responde",
          description: "Por alguma razão, o servidor não está respondendo :(",
        });
      }
      return Promise.reject(error);
    }
  );

  return http;
};
