import LayoutWrapper from '@page-sections/layouts/LayoutWrapper';
import AppFooter from 'components/footer/AppFooter';
import { createBrowserClient } from 'lib/supabase';
import 'nprogress/nprogress.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import AppProviders from 'providers/AppStateProvider';
import { MobileViewListener } from 'providers/MobileViewListener';
import SupabaseListener from 'providers/SupabaseListener';
import SupabaseProvider from 'providers/SupabaseProvider';
import { ReactNode } from 'react';
import 'styles/layout/layout.scss';

export const dynamic = 'force-dynamic';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const supabase = createBrowserClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="es">
      <head />
      <body className="layout-wrapper">
        <AppProviders>
          <MobileViewListener />
          <SupabaseProvider session={session}>
            <SupabaseListener />
            <LayoutWrapper>{children}</LayoutWrapper>
            <AppFooter />
          </SupabaseProvider>
        </AppProviders>
      </body>
    </html>
  );
}
