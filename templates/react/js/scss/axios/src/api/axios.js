import axios from "axios";
import { decryptData, encryptData } from "../utils/utils";
import { toast } from "react-toastify";
import { toasts } from "../component/common/ui/Toast/Toast";
import ENVIRONMENT, {
  ENCRYPTION_EXCLUDED,
  ROUTES,
} from "../contants/constants";

/* ---------------------------------- */
/* ENV */
/* ---------------------------------- */

const BASE_URL = import.meta?.env?.VITE_API_HOST || "";

/* ---------------------------------- */
/* AXIOS INSTANCE */
/* ---------------------------------- */

export const axiosApi = axios.create({
  baseURL: BASE_URL,
});

/* ---------------------------------- */
/* REQUEST INTERCEPTOR */
/* ---------------------------------- */

axiosApi.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("token") || localStorage.getItem("forgotPassToken");

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ---------------------------------- */
/* RESPONSE INTERCEPTOR */
/* ---------------------------------- */

axiosApi.interceptors.response.use(
  (response) => {
    if (Number(ENVIRONMENT.ENABLE_ENCRYPTION)) {
      const decryptedData = decryptData(response?.data?.resData);

      response.data = {
        ...response.data,
        data: decryptedData,
      };
    }

    return response;
  },
  (error) => {
    if (Number(ENVIRONMENT.ENABLE_ENCRYPTION)) {
      const decryptedData = decryptData(error?.response?.data?.resData);
      handleError(decryptedData);
      throw decryptedData;
    }

    handleError(error);
    throw error;
  }
);

/* ---------------------------------- */
/* HELPERS */
/* ---------------------------------- */

const formatUrl = (url, params = {}) => {
  if (!params || Object.keys(params).length === 0) return url;

  return `${url}?${new URLSearchParams(params).toString()}`;
};

const clearWaitingQueue = () => {
  toast.clearWaitingQueue();
};

const handleError = (error) => {
  const errorStatus = error?.response?.status || error?.status;

  const errorMessage =
    error?.response?.data?.message || error?.data?.message || error?.message;

  if (errorStatus === 401 || errorStatus === 403) {
    toasts.error("Please re-login, last login session expired.");

    localStorage.clear();
    window.dispatchEvent(new Event("storage"));
    clearWaitingQueue();

    if (window.location.pathname !== ROUTES.ROOT) {
      window.location.replace(ROUTES.ROOT);
    }
  } else {
    if (errorMessage) {
      toasts.error(errorMessage);
    }
    clearWaitingQueue();
  }
};

const handleSuccess = (res) => {
  if (res?.status === 200 || res?.status === 201) {
    res?.message && toasts.success(res.message);
    res?.data?.message && toasts.success(res.data.message);
  }

  if (res?.status === 400 || res?.status === 403) {
    res?.message && toasts.warning(res.message);
  }
};

const getPayloadData = (data, url = "") => {
  if (!data) return data;

  if (
    Number(ENVIRONMENT.ENABLE_ENCRYPTION) &&
    !ENCRYPTION_EXCLUDED.includes(url)
  ) {
    return { reqData: encryptData(data) };
  }

  return data;
};

/* ---------------------------------- */
/* HTTP METHODS */
/* ---------------------------------- */

export const apiCallGet = async (url, params = {}, toastOn) => {
  try {
    const res = await axiosApi.get(formatUrl(url, params));
    toastOn && handleSuccess(res.data);
    return res.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const apiCallPost = async (url, data, params = {}, toastOn, header) => {
  try {
    const res = await axiosApi.post(
      formatUrl(url, params),
      getPayloadData(data, url),
      header || {}
    );

    toastOn && handleSuccess(res.data);
    return res.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const apiCallPatch = async (url, data, params = {}, toastOn) => {
  try {
    const res = await axiosApi.patch(
      formatUrl(url, params),
      getPayloadData(data, url)
    );

    toastOn && handleSuccess(res.data);
    return res.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const apiCallPut = async (url, data, params = {}, toastOn) => {
  try {
    const res = await axiosApi.put(
      formatUrl(url, params),
      getPayloadData(data, url)
    );

    toastOn && handleSuccess(res.data);
    return res.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const apiCallDelete = async (url, data, params = {}, toastOn) => {
  try {
    const res = await axiosApi.delete(formatUrl(url, params), {
      data: getPayloadData(data, url),
    });

    toastOn && handleSuccess(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
