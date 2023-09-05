import { map } from 'lodash';
import Link from 'next/link';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import { useRef } from 'react';

export default function MobileTopMenu({ itemMenu }: { itemMenu: any[] }) {
  const menuBtnRef = useRef(null);

  return (
    <div className="profile-item static sm:relative">
      <StyleClass
        nodeRef={menuBtnRef}
        selector=".boxMenu"
        enterClassName="hidden"
        enterActiveClassName="scalein"
        leaveToClassName="hidden"
        leaveActiveClassName="fadeout"
        hideOnOutsideClick={true}
      >
        <button
          className="p-button p-component p-button-icon-only p-button-text p-button-rounded p-button-secondary ml-2 "
          ref={menuBtnRef}
        >
          <i className="pi pi-ellipsis-v"></i>
        </button>
      </StyleClass>
      <ul className="list-none p-3 m-0 border-round shadow-2 absolute surface-overlay hidden origin-top w-full sm:w-19rem mt-2 right-0 z-5 top-auto boxMenu">
        <li>
          {map(itemMenu, (item, i) => {
            return (
              <Link
                className="p-ripple flex p-2 border-round align-items-center hover:surface-hover transition-colors transition-duration-150 cursor-pointer"
                key={item.id + '-' + i}
                href={item.url}
              >
                {item.icon}
                <span className="flex flex-column">
                  <span className="font-semibold">{item.label}</span>
                </span>
                <Ripple />
              </Link>
            );
          })}
        </li>
      </ul>
    </div>
  );
}
