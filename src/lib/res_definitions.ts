import { get, isNil } from 'lodash';

export interface ResposeData<T> {
  data: T[];
  error: any;
  status: any;
  count?: number;
  page?: number;
}

export interface RESPONSE_API_REST {
  data: any;
  status: any;
  error: any;
  count?: number;
  page?: number;
}

export const REST_VERBS = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const API_STATUS = {
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  NOT_ALLOWED: 405,
  SERVER_ERROR: 500,
  RSC_CREATE: 201,
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  PROHIBITED: 402,
};

export const RESPONSE_ERRORS = {
  BAD_REQUEST: 'Bad Request',
  SERVER_ERROR: 'Server Error',
  METHOD_NOT_ALLOW: 'Method not allow',
};

const getBaseUrlByEnv = () => (process.env.NEXT_PUBLIC_DEV_ENV == 'local' ? process.env.NEXT_PUBLIC_BASE_API_URL : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`);

export const APP_CFG_REST_URLS = {
  BASE_URL: getBaseUrlByEnv(),
  BASE_URL_BUCKET: process.env.NEXT_PUBLIC_BASE_URL_BUCKET,
  REDIRECT_URL: `${getBaseUrlByEnv()}/${process.env.NEXT_PUBLIC_WOMPI_REDIRECT_URL}`,
  WOMPI_URL_API: process.env.NEXT_PUBLIC_WOMPI_URL_API,
  WOMPI_URL_WIDGET: process.env.NEXT_PUBLIC_WOMPI_URL_WIDGET,
  WOMPI_PUBLIC_KEY: process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY,
  WHATSAPP_URL: process.env.NEXT_PUBLIC_WHATSAPP_URL,
  WHATSAPP_CONTACT: process.env.NEXT_PUBLIC_WHATSAPP_CONTACT,
};

export const APP_CFG_BUCKET_ATTACHMENTS = {
  BASE_STORAGE: 'storage/v1/object/public',
  PRODUCTS_BUCKET: 'products',
  BLOG_ARTICLES: 'blog',
  LANDING_SECTIONS: 'landing-page',
};

export const getEntryParams = (searchParams: URLSearchParams): any => {
  let objVals = {};
  searchParams.forEach((v, k) => (objVals[k] = v));
  return objVals;
};

export const handleError = (error: any): RESPONSE_API_REST => {
  return {
    data: null,
    status: API_STATUS.SERVER_ERROR,
    error: get(error, 'message', 'server error'),
  };
};

export const QUERY_PARAMS = {
  PRODUCTS: {
    SEARCH: 'shopSearch',
    DYNAMIC_SEARCH: 'dynamic-product-search',
    PRODUCTS_DETAILS: 'product-details',
  },
  GENERIC_LIST: {
    ALL: 'all',
    SEARCH_CITY: 'search-city',
    VERCEL_KV: 'kv',
  },
  PROFILE: {
    INFO: 'info',
    ADDRESS: 'address',
  },
  WISHLIST: {
    SINGLE: 'single',
    ALL: 'all',
    ADD: 'add',
  },
  ORDERS: {
    STARTED_CART: 'started',
    MUTATE_PRODUCT_ITEMS: 'product_items',
    OBJ_CART_BUILDER: 'cart_obj_builder',
    ENCODE: 'encode',
    PAYMENT_STARTED: 'payment-process-started',
    EVENT_HOOK: 'wompi-event-rsp',
    ORDER_CONFIRMATON: 'transaction-info',
    TRANSACT_CONFIRM: 'transact-confirmation',
  },
  CRM: {
    REQUEST: 'info',
    SHOP_LOCATIONS: 'shop_locations',
  },
};

export type filterProductSearchType = {
  obj_data?: any;
  qryCat?: any;
  qrySubCat?: any;
  filterBy?: string;
  paramBy?: string;
  sorting?: string;
  limit?: number;
};

export const buildParamSearch = (params: filterProductSearchType) => {
  let srtSearch;
  for (const key in params) {
    if (!isNil(params[key])) {
      srtSearch += `&${key}=${params[key]}`;
    }
  }
  return srtSearch;
};

// https://makerkit.dev/blog/tutorials/pagination-supabase-react
export const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const from = page ? page * limit : 0;
  const to = page ? from + size - 1 : size - 1;

  return { from, to };
};

export const CRUD_OPERATION = {
  INSERT: 'insert',
  UPDATE: 'update',
  DELETE: 'delete',
  DETAILS: 'details',
};
