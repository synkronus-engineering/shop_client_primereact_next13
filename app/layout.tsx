import LayoutWrapper from '@page-sections/layouts/LayoutWrapper';
import AppFooter from 'components/footer/AppFooter';
import 'nprogress/nprogress.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import { ReactNode } from 'react';
import 'styles/layout/layout.scss';

export const dynamic = 'force-dynamic';

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="layout-wrapper">
        <LayoutWrapper>{children}</LayoutWrapper>
        <AppFooter />
      </body>
    </html>
  );
}
