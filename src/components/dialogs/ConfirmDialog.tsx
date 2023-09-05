import { ConfirmDialog } from 'primereact/confirmdialog';

export default function ConfirmDialogCmp({
  accept,
  reject,
  visible,
  setVisible,
}) {
  return (
    <ConfirmDialog
      visible={visible}
      onHide={() => setVisible(false)}
      message="Are you sure you want to proceed?"
      header="Confirmation"
      icon="pi pi-exclamation-triangle"
      accept={accept}
      reject={reject}
    />
  );
}
