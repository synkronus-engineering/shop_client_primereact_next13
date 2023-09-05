/* eslint-disable no-case-declarations */

import { find, forEach, get, has, isEqual, isObject, pickBy, trim } from 'lodash';

export const getObjUpdates = (updatedObj, originalObj, mode) => {
  switch (mode) {
    case 'length':
      return (originalObj || []).length === (updatedObj || []).length;
    //((originalObj || []).length > 0  && (updatedObj || []).length > 0) &&

    case 'object':
      return pickBy(updatedObj, (v, k) => {
        return isObject(get(originalObj, [k], null)) ? !isEqual(get(get(originalObj, [k], null), ['id'], -1), get(v, ['id'], -2)) : !isEqual(trim(get(originalObj, [k], null)), trim(v));
      });

    default:
      let accTmp = [];
      forEach(updatedObj, (newItem) => {
        const oldObj = find(originalObj, (oldItem) => oldItem.id === newItem.id);
        if (oldObj && has(oldObj, ['id']) && !(oldObj['qty'] === newItem['qty'])) accTmp.push(newItem);
      });
      return accTmp.length === 0;
  }
};
