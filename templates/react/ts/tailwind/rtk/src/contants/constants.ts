export const API_URLS = {
  LOGIN: "api/v1/auth/login",
  SIGNUP: "api/v1/auth/signup",
  LOGOUT: "api/v1/auth/logout",
  REFRESH_TOKEN: "api/v1/auth/refresh-token",
  IMAGE_UPLOAD: "api/v1/auth/image-upload",
};

export const ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  SETTINGS: "/settings",
};

const ENVIRONMENT = {
  ENABLE_ENCRYPTION: import.meta.env.VITE_ENABLE_ENCRYPTION,
  API_HOST: import.meta.env.VITE_API_HOST,
  S3_BUCKET_URL: import.meta.env.VITE_S3_BUCKET,
  STRING: import.meta.env.VITE_STRING,

  // CHAIN
  RPC_URL: import.meta.env.VITE_RPC_URL,
  CHAIN_ID: import.meta.env.VITE_CHAIN_ID,
  CHAIN_SYMBOL: import.meta.env.VITE_CHAIN_SYMBOL,
  CHAIN_NAME: import.meta.env.VITE_CHAIN_NAME,

  // CONTRACT
  EXAM_CONTRACT_ADD: import.meta.env.VITE_EXAM_CONTRACT_ADD,
  STUDENT_CONTRACT_ADD: import.meta.env.VITE_STUDENT_CONTRACT_ADD,
  RSA_PRIVATE_KEY: import.meta.env.VITE_RSA_PRIVATE_KEY,

  // AWS S3 Configuration
  AWS_S3_BUCKET_NAME: import.meta.env.VITE_AWS_S3_BUCKET_NAME,
  AWS_ACCESS_KEY_ID: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  AWS_REGION: import.meta.env.VITE_AWS_REGION,
  S3_BUCKET_CDN_LINK: import.meta.env.VITE_S3_BUCKET_CDN_LINK,
  IMAGE_KIT_URL: import.meta.env.VITE_IMAGE_KIT_URL,
};
export const ENCRYPTION_EXCLUDED = [API_URLS?.IMAGE_UPLOAD];

export default ENVIRONMENT;
