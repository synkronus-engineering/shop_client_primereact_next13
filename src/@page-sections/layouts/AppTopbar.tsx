/* eslint-disable @next/next/no-img-element */
import LoginPage from '@page-sections/login/LoginCmp';
import useLogicDialog from '@page-sections/login/useLogicDialog';
import { AvatarIcon } from 'components/avatar/AvatarAccount';
import DialogLogin from 'components/dialogs/DialogLogin';
import TopBarAccount from 'components/dialogs/TopBarAccount';
import MobileTopMenu from 'components/menu/MobileTopMenu';
import { SnackBarApp } from 'components/message/SnackBar';
import HasMounted from 'lib/HasMounted';
import { first, get, has, map } from 'lodash';
import Link from 'next/link';
import { classNames } from 'primereact/utils';

const AppTopbar = ({ pathname }: { pathname: string }) => {
  const { dialogOpen, setToggleDialog, menuRef, userGlobal, handleLogout, handleUserLog } = useLogicDialog();

  const itemMenu = [
    {
      id: 1,
      url: '/todos',
      label: 'ToDos',
      icon: <i className="pi pi-inbox mr-3"></i>,
    },
    {
      id: 2,
      url: '/products',
      label: 'Products',
      icon: <i className="pi pi-cog mr-3"></i>,
    },

    {
      id: 3,
      url: '/site',
      label: 'Nosotros',
      icon: <i className="pi pi-inbox mr-3"></i>,
    },
    {
      id: 4,
      url: '/credits',
      label: 'Creditos',
      icon: <i className="pi pi-inbox mr-3"></i>,
    },
  ];

  return (
    <div className="layout-topbar">
      <Link href="/">
        <div className="layout-topbar-logo">
          <img src={`/assets/layout/logo-dark.svg`} width="47.22px" height={'35px'} alt="logo" />
          <span>SAKAI</span>
        </div>
      </Link>

      <div className="mobileActiveShowNone">
        {map(itemMenu, (item, i) => {
          return (
            <Link href={item.url} key={item.id + i} className={classNames('p-button p-button-link p-ripple', { underline: pathname === item.url })}>
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="layout-topbar-menu">
        <TopBarAccount refToggle={menuRef} handleLogout={handleLogout} />
        <HasMounted
          fallback={
            <i
              className="pi pi-user"
              style={{
                fontSize: '1.5rem',
                marginRight: '10px',
                marginTop: '10px',
              }}
            ></i>
          }
        >
          {userGlobal ? (
            <AvatarIcon label={first(get(userGlobal, 'user.email', 'U'))} clickHandler={(e) => handleUserLog(e)} />
          ) : (
            <button type="button" className="p-link layout-topbar-button" onClick={(e) => handleUserLog(e)}>
              <i className="pi pi-user"></i>
            </button>
          )}
        </HasMounted>
      </div>

      <div className="desktopActiveShowNone">
        <MobileTopMenu itemMenu={itemMenu} />
      </div>

      {!userGlobal && !has(userGlobal, 'user') && (
        <DialogLogin dialogOpen={dialogOpen} setToggleDialog={setToggleDialog}>
          <LoginPage />
        </DialogLogin>
      )}
      <SnackBarApp />
    </div>
  );
};

export default AppTopbar;
