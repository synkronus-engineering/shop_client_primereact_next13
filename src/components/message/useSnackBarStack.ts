import { useSetRecoilState } from 'recoil';
import { toggleSnackBar } from './SnackBar';

const VariantSlctrTypes = {
  success: 'success',
  error: 'error',
  warning: 'warn',
  info: 'info',
};

export function useSnackBarStack() {
  const setSnackbarState = useSetRecoilState(toggleSnackBar);

  const showToastMessage = (type: any, title: string, msg?: string) => {
    setSnackbarState({
      show: true,
      msg,
      title,
      type,
    });
  };

  return { VariantSlctrTypes, showToastMessage };
}
