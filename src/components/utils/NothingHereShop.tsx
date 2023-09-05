/* eslint-disable @next/next/no-img-element */
'use client';
import { getProductCatSubRouteNavSlctr } from 'data/generics_api';
import { RefGenericDefinitions } from 'data/types/app_types';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

export default function NothingHereShop() {
  const prodNavCatSub = useRecoilValue(getProductCatSubRouteNavSlctr({ categoryCodeId: RefGenericDefinitions.mobile_phone, subCategoryCodeId: null, firstByCode: true }));
  return (
    <div className="flex flex-column justify-content-center align-items-center gap-2 col-12 md:col-3 mt-5 w-full" style={{ maxHeight: '250px' }}>
      <Link href={prodNavCatSub} className="flex flex-column justify-content-center align-items-center">
        <img src="/assets/illustration/shopping-bag.svg" width={90} height={100} alt={'logo'} />
        <p className="mt-2 text-color-grey text-center w-full">Nada por aqui!, Empieza a comprar.</p>
      </Link>
    </div>
  );
}
