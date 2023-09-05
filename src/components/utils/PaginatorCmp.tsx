import { slice } from 'lodash';
import { Paginator } from 'primereact/paginator';
import { isMobileView } from 'providers/MobileViewListener';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

const usePaginator = (dataSet: any, steps: number = 3) => {
  const mediaQuerySize = useRecoilValue(isMobileView);
  const [stepInd, setStepInd] = useState(mediaQuerySize?.isMobile ? 1 : steps);
  const [first, setFirst] = useState({ from: 0, to: stepInd });
  const [curentPagedData, setCurentPagedData] = useState(slice(dataSet, first.from, first.to));

  const onPageChange = (event: { first: number }) => {
    const from = event.first;
    const to = event.first + stepInd;
    setFirst({ from, to });
    setCurentPagedData(slice(dataSet, from, to));
  };

  useEffect(() => {
    (() => {
      setStepInd(mediaQuerySize?.isMobile ? 1 : steps);
      if (!mediaQuerySize?.isMobile) {
        setFirst({ from: 0, to: steps });
        setCurentPagedData(slice(dataSet, 0, steps));
      }
    })();
  }, [mediaQuerySize]);

  const getTotalRecords = (dataSet || []).length;

  return {
    first,
    stepInd,
    onPageChange,
    getTotalRecords,
    curentPagedData,
    setCurentPagedData,
  };
};

type CmpProps = {
  first: any;
  stepInd: number;
  getTotalRecords: any;
  onPageChange: any;
};

const PaginatorCmp = ({ first, stepInd, getTotalRecords, onPageChange }: CmpProps) => {
  return <Paginator first={first.from} rows={stepInd} totalRecords={getTotalRecords} onPageChange={onPageChange} template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} />;
};

export { PaginatorCmp, usePaginator };
