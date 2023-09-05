import useSWR from 'swr';
import { REST_VERBS } from './res_definitions';

async function fetcher<T>(url: string, res_verb?: string, obj_data?: any): Promise<T> {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    method: res_verb ?? REST_VERBS.GET,
    body: obj_data ? JSON.stringify(obj_data) : null,
  });
  if (!res.ok) {
    throw new Error('Network response was not ok.');
  }
  return await res.json();
}

const createGenericFetcher = <T>(url: string) => {
  return () => {
    const { data, error } = useSWR<T, Error>(url, fetcher);

    return {
      data,
      isLoading: !error && !data,
      isError: error,
    };
  };
};

interface typeObjData {
  path_name?: string;
  obj_body?: any;
}

const roleHeaderOptions = (custom_hdrs?: any) => {
  return { 'Content-Type': 'application/json; charset=UTF-8', ...custom_hdrs };
};

const genericFnFetcher = (url: string, method: string, obj_body?: typeObjData, custom_hdrs?: any) => {
  return fetch(url, {
    method,
    headers: roleHeaderOptions(custom_hdrs),
    body: JSON.stringify(obj_body), //{ path_name:'add', data: {...data} }
  }).then((res) => res.json());
};

export { createGenericFetcher, fetcher, genericFnFetcher };
