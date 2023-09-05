import { filter } from 'lodash';
import { atom, selector } from 'recoil';
import { mutate } from 'swr';
import { createGenericFetcher, fetcher } from '../lib/fetcher';
import { APP_CFG_REST_URLS } from '../lib/res_definitions';

const baseUrl = `${APP_CFG_REST_URLS.BASE_URL}/api/todos`;

interface ITodoList {
  id: number;
  user_id: string;
  is_complete: boolean;
  task: string;
  created_at?: string;
}

interface Data {
  data: ITodoList[];
  error: any;
}

const useTodoListData = createGenericFetcher<Data>(baseUrl);

const todoMutations = async (action: string, obj_data: any, searchParams?: any) => {
  return await fetcher<ITodoList>(`${searchParams ? baseUrl + '?' + searchParams : baseUrl}`, action, { obj_data: { ...obj_data } }).then((_) => mutate(baseUrl));
};

const todoDataListAtom = atom({
  key: 'todoDataListAtom',
  default: [] as ITodoList[],
});

const getTodoStatsSelector = selector({
  key: 'getTodoStatsSlctr',
  get: ({ get }) => {
    const todoList = get(todoDataListAtom);
    if ((todoList || []).length > 0) {
      return {
        numTodos: todoList.length,
        completed: filter(todoList, 'is_complete').length,
      };
    }

    return {
      numTodos: 0,
      completed: 0,
    };
  },
});

export { getTodoStatsSelector, todoDataListAtom, todoMutations, useTodoListData };
export type { Data, ITodoList };
