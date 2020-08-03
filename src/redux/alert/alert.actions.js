import { toast } from 'react-toastify';

export const alertSuccess = message => {
  toast.success(message);
};

export const alertError = message => {
  toast.error(message);
};