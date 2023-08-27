'use client';
import { usePathname } from 'next/navigation';
import nProgress from 'nprogress';
import { ReactNode, useEffect } from 'react';
import AppTopbar from './AppTopbar';

nProgress.configure({ showSpinner: false });

type WrapperProps = { children: ReactNode };

const LayoutWrapper = ({ children }: WrapperProps) => {
  const pathname = usePathname();

  useEffect(() => {
    (() => {
      nProgress.start();
      setTimeout(() => nProgress.done(), 500);
    })();
  }, [pathname]);

  return (
    <>
      <AppTopbar pathname={pathname} />
      <div className="layout-main-container">
        <div className="layout-main">{children}</div>
      </div>
    </>
  );
};

export default LayoutWrapper;
