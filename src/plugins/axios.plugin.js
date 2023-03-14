import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "",
});

let quantidadeRequisicoes = 0;

const createInterceptorLoading = (VueInstance) => {
  AxiosInstance.interceptors.request.use((config) => {
    quantidadeRequisicoes++;
    VueInstance.$showPageLoading();
    return config;
  });
  AxiosInstance.interceptors.response.use(
    (config) => {
      quantidadeRequisicoes--;
      if (quantidadeRequisicoes == 0) {
        VueInstance.$hidePageLoading();
      }
      return config;
    },
    (error) => {
      quantidadeRequisicoes = 0;
      VueInstance.$hidePageLoading();
      return Promise.reject(error);
    }
  );
};

const createInterceptorError = (VueInstance) => {
  const message = (error) => {
    VueInstance.$notifyError(error);
  };
  AxiosInstance.interceptors.response.use(
    (config) => {
      message("Um erro inesperado aconteceu! Tente novamente mais tarde.");
      return config;
    },
    (error) => {
      message("Um erro inesperado aconteceu! Tente novamente mais tarde.");
      return Promise.reject(error);
    }
  );
};

const AxiosPlugin = {
  install(Vue) {
    Vue.mixin({
      methods: {
        $api() {
          return AxiosInstance;
        },
      },
    });
  },
};

export {
  AxiosPlugin,
  AxiosInstance,
  createInterceptorError,
  createInterceptorLoading,
};
