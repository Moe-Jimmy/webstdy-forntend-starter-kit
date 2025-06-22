// composables/useApi.ts
import axios from "axios";
import type {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

export function useApi() {
  const { $i18n } = useNuxtApp();
  const config = useRuntimeConfig();
  const toast = useToast();
  const loadingStore = useLoadingStore();
  // Create Axios instance
  const apiClient: AxiosInstance = axios.create({
    baseURL: config.public.apiBase,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });

  // Request interceptor: add language header
  apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const locale = $i18n.locale.value;
      config.headers["Content-Language"] = locale === "en" ? "en" : "ar";
      loadingStore.startLoading();
      return config;
    },
    (error) => {
      loadingStore.stopLoading();
      return Promise.reject(error);
    },
  );

  // Response interceptor: handle errors
  apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
      loadingStore.stopLoading();
      return response;
    },
    (error) => {
      if (error.response) {
        loadingStore.stopLoading();
        toast.add({
          title: "Error",
          description:
            error.response.data?.message || "An unexpected error occurred",
          color: "error",
        });

        console.error(
          `API Error: ${error.response.status} - ${
            error.response.data?.message || ""
          }`,
        );
      } else {
        toast.add({
          title: "Network Error",
          description: error.message,
          color: "error",
        });

        console.error(`API Error: ${error.message}`);
      }

      return Promise.reject(error);
    },
  );

  return {
    get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
      const response = await apiClient.get<T>(url, config);
      return response.data;
    },
    post: async <T>(
      url: string,
      data: any,
      config?: AxiosRequestConfig,
    ): Promise<T> => {
      const response = await apiClient.post<T>(url, data, config);
      return response.data;
    },
    put: async <T>(
      url: string,
      data: any,
      config?: AxiosRequestConfig,
    ): Promise<T> => {
      const response = await apiClient.put<T>(url, data, config);
      return response.data;
    },
    patch: async <T>(
      url: string,
      data: any,
      config?: AxiosRequestConfig,
    ): Promise<T> => {
      const response = await apiClient.patch<T>(url, data, config);
      return response.data;
    },
    delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
      const response = await apiClient.delete<T>(url, config);
      return response.data;
    },
  };
}
