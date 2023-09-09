import { supabaseClient } from 'lib/supabase';
import { concat, filter, find, get, has, head, map, orderBy, reduce } from 'lodash';
import { getCurrentStatusFn } from './string-transform';

export const getAvgRating = (rating: any[]) => {
  if ((rating || []).length == 0) return 5;
  return reduce(rating, (acc, val) => acc + val.rating, 0) / rating.length;
};

export const calcProdDiscount = (prodArray: any[] | null): any[] => {
  if ((prodArray || []).length === 0) return prodArray;
  return map(prodArray, (item) => ({
    ...item,
    price_discount: item?.price - (item?.price * (item?.discount || 0)) / 100,
  }));
};

export const reduceTotalValue = (sliceRslt: any[]) => {
  return reduce(sliceRslt || [], (accum, item) => accum + (item?.price - (item?.price * (item?.discount || 0)) / 100) * item.qty, 0);
};

export const reduceTotalDiscountPurchaseValue = (sliceRslt: any[]) => {
  return reduce(sliceRslt || [], (accum, item) => accum + ((item?.price * (item?.discount || 0)) / 100) * item.qty, 0);
};

export const reduceTotalAdditionalDtoValue = (addtional_dto: any, amount_charged: number) => {
  return Number(amount_charged) - (Number(addtional_dto) * amount_charged) / 100;
};

export const reduceTotalPruchasedFullValue = (sliceRslt: any[]) => {
  return reduce(sliceRslt || [], (accum, item) => accum + item?.price * item.qty, 0);
};

export const getItemsCountByStatusFn = (data: any, crrntStatus: any) => {
  const fltrDataByStatus = filter(data, (r) => getCurrentStatusFn(r, 'code') === crrntStatus);
  const resultRdcOp = reduce(
    fltrDataByStatus,
    (acc, val) => {
      const prodItems = get(head(get(val, ['details'], [])), ['product_items'], []);
      acc.num_items = acc.num_items + prodItems.length;
      acc.amount = acc.amount + reduceTotalValue(prodItems);
      return acc;
    },
    { num_items: 0, amount: 0 }
  );

  return resultRdcOp;
};

export const extractMetaPayment = (data: any) => {
  const paymentObj = get(
    find(get(data, 'payment_transaction', []), (i) => i.payment_event_status === 'APPROVED'),
    ['payment_meta', 'data', 'transaction'],
    null
  );
  const paymentMethodType = get(paymentObj, ['payment_method_type'], 'none');
  const apprPaymentMeta = get(paymentObj, ['payment_method'], 'none');

  switch (paymentMethodType) {
    case 'CARD': {
      const apprPayCard = get(apprPaymentMeta, ['extra']);
      return {
        payment_method_type: 'CARD',
        payment_method_name: 'Tarjeta Credito',
        payment_brand: apprPayCard?.brand,
        card_name: apprPayCard?.card_holder,
        card_number: apprPayCard?.last_four,
        exp_date: apprPayCard?.exp_month + '/' + apprPayCard?.exp_year,
      };
    }
    case 'NEQUI':
      return {
        payment_method_type: 'NEQUI',
        payment_method_name: 'Transferencia Nequi',
        payment_brand: 'NEQUI',
        card_name: get(paymentObj, ['customer_data', 'full_name'], 'Full Name'),
        card_number: get(apprPaymentMeta, ['phone_number']),
        exp_date: null,
      };
    case 'PSE':
      return {
        payment_method_type: 'PSE',
        payment_method_name: 'Plataforma PSE',
        payment_brand: 'PSE',
        card_name: get(paymentObj, ['customer_data', 'full_name'], 'Full Name'),
        card_number: get(paymentObj, ['customer_data', 'legal_id'], 'Legal ID'),
        exp_date: null,
      };
    case 'BANCOLOMBIA_TRANSFER':
      return {
        payment_method_type: 'BANCOLOMBIA_TRANSFER',
        payment_method_name: 'Transferencia Bancolombia',
        payment_brand: 'BANCOLOMBIA',
        card_name: get(paymentObj, ['customer_data', 'full_name'], 'full_name'),
        card_number: 'Cuanta Bancaria ####',
        exp_date: null,
      };
  }
};

export const getProductLinkRedirect = (prod: { sub_category_id: any; category_id: any }) => {
  return prod ? `/product/search/${prod.sub_category_id}?cat=${prod.category_id}` : '/';
};

export const orderProdByFilters = ({ selectShortByTop }: any, prodList: any) => {
  switch (selectShortByTop) {
    case 'RecentlyPosted':
      return orderBy(prodList, 'updated_at', ['desc']);
    case 'PriceHighToLow':
      return orderBy(prodList, 'price', ['desc']);
    case 'PriceLowToHigh':
      return orderBy(prodList, 'price', ['asc']);
    default:
      return prodList;
  }
};

export const STOCK_TAGS = {
  INSTOCK: 'success',
  LOWSTOCK: 'warning',
  OUTOFSTOCK: 'danger',
};

export const getSeverity = (inventory_status: string) => {
  switch (inventory_status) {
    case 'INSTOCK':
      return 'success';
    case 'LOWSTOCK':
      return 'warning';
    case 'OUTOFSTOCK':
      return 'danger';
    default:
      return null;
  }
};

export const validateProdInfo = async (prodItems: any[]) => {
  if ((prodItems || []).length === 0) return prodItems;
  const { data, error } = await supabaseClient().from('products').select('id, price, discount').in('id', map(prodItems, 'id')).eq('active', true);
  if (!data && error) return prodItems;
  return reduce(
    prodItems,
    (rslt, item) => {
      const itemDb = find(data, ['id', item.id]);
      return has(itemDb, 'id') ? concat(rslt, [{ ...item, price: itemDb.price, discount: itemDb.discount }]) : rslt;
    },
    []
  );
};
