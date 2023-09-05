'use client';
import { map } from 'lodash';
import { Skeleton } from 'primereact/skeleton';

const SkeletonCmp = ({ gridView, sx }: { gridView: number[]; sx?: any }) => {
  return (
    <div className="grid" style={{ ...sx }}>
      {map(gridView, (colW, i) => (
        <div className={`col-12 sm:col-${colW}`} key={i}>
          <div className="border-round border-1 surface-border p-2 surface-card">
            <Skeleton width="100%" height="200px"></Skeleton>
            <div className="flex justify-content-center mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
const SmallCardSkltnCmp = ({ gridView, sx }: { gridView: number[]; sx?: any }) => {
  return (
    <div className="grid" style={{ ...sx }}>
      {map(gridView, (colW, i) => (
        <div className={`col-12 sm:col-${colW}`} key={i}>
          <div className="border-round border-1 surface-border p-2 surface-card">
            <Skeleton width="100%" height="160px"></Skeleton>
            <div className="flex justify-content-center mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CategoryListSkltn = () => {
  return (
    <div className="border-round border-1 surface-border p-2 w-2">
      <div className="flex flex-column gap-1">
        <Skeleton height="3rem"></Skeleton>
        <Skeleton height="3rem"></Skeleton>
        <Skeleton height="3rem"></Skeleton>
        <Skeleton height="3rem"></Skeleton>
      </div>
    </div>
  );
};

export { CategoryListSkltn, SkeletonCmp, SmallCardSkltnCmp };
