import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* ---------------------------------- */
/* TOAST OPTIONS */
/* ---------------------------------- */

const toastOptions = {
  position: "top-right",
  autoClose: 1000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: 0,
  hideProgressBar: false,
  theme: "light",
};

/* ---------------------------------- */
/* TOASTER CLASS */
/* ---------------------------------- */

class Toaster {
  warning(message) {
    toast.warn(message, {
      ...toastOptions,
    });
  }
  success(message) {
    toast.success(message, {
      ...toastOptions,
    });
  }

  error(message) {
    toast.error(message, {
      ...toastOptions,
    });
  }

  warn(message) {
    toast.warn(message, {
      ...toastOptions,
    });
  }

  info(message) {
    toast.info(message, {
      ...toastOptions,
    });
  }
}

/* ---------------------------------- */
/* EXPORT SINGLETON */
/* ---------------------------------- */

export const toasts = new Toaster();
