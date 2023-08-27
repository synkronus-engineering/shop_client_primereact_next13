/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { classNames } from 'primereact/utils';

const AppTopbar = ({ pathname }: { pathname: string }) => {
  return (
    <div className="layout-topbar">
      <Link href="/">
        <div className="layout-topbar-logo">
          <img src={`/assets/layout/logo-dark.svg`} width="47.22px" height={'35px'} alt="logo" />
          <span>SAKAI</span>
        </div>
      </Link>

      <Link href="/products" className={classNames('p-button p-button-link p-ripple', { underline: pathname === '/products' })}>
        Productos
      </Link>

      <Link href="/site" className={classNames('p-button p-button-link p-ripple', { underline: pathname === '/site' })}>
        Nosotros
      </Link>

      <Link href="/credits" className={classNames('p-button p-button-link p-ripple', { underline: pathname === '/credits' })}>
        Creditos
      </Link>

      <div className="layout-topbar-menu">
        <button type="button" className="p-link layout-topbar-button">
          <i className="pi pi-user"></i>
          <span>Profile</span>
        </button>
      </div>
    </div>
  );
};

export default AppTopbar;
