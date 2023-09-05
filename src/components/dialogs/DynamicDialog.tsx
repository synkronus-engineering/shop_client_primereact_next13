'use client';
import { Dialog } from 'primereact/dialog';
import { ReactNode } from 'react';

type DiagLoginProps = {
  children: ReactNode;
  dialogOpen: boolean;
  title?: string;
  showHeader?: boolean;
  sx?: any;
  setToggleDialog: (prm: boolean) => void;
};

export default function DynamicDialog({ children, dialogOpen, setToggleDialog, title, sx, showHeader = true }: DiagLoginProps) {
  return (
    <Dialog
      showHeader={showHeader}
      header={title}
      visible={dialogOpen}
      style={{ width: '30vw', ...sx }}
      breakpoints={{ '960px': '30vw', '641px': '95vw' }}
      onHide={() => setToggleDialog(false)}
      blockScroll={true}
    >
      {children}
    </Dialog>
  );
}
