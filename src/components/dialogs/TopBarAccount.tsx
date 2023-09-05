//import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import { Menu } from 'primereact/menu';

export default function TopBarAccount({ handleLogout, refToggle }: { refToggle: any; handleLogout?: any }) {
  const router = useRouter();

  const items = [
    {
      items: [
        {
          label: 'Profile',
          icon: 'pi pi-fw pi-user',
          command: () => {
            router.push('/account');
          },
        },
        {
          label: 'Orders',
          icon: 'pi pi-fw pi-cog',
          command: () => {
            router.push('/account/orders');
          },
        },
        {
          label: 'Support',
          icon: 'pi pi-fw pi-wrench',
          command: () => {
            router.push('/account/support');
          },
        },
        {
          label: 'Wish list',
          icon: 'pi pi-fw pi-gift',
          command: () => {
            router.push('/account/wishlist');
          },
        },
        { separator: true },
        {
          label: 'Logout',
          icon: 'pi pi-fw pi-cog',
          command: () => handleLogout(),
        },
      ],
    },
  ];

  return <Menu model={items} popup ref={refToggle} />;
}
