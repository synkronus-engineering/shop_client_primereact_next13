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

export const APP_CFG_REST_URLS = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_API_URL,
  BASE_URL_BUCKET: process.env.NEXT_PUBLIC_BASE_URL_BUCKET,
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
    error: error ? error?.message : 'server error',
  };
};

export const CRUD_OPERATION = {
  INSERT: 'insert',
  UPDATE: 'update',
  DELETE: 'delete',
  DETAILS: 'details',
};
