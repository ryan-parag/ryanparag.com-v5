import React from 'react';
import { Toast } from '@base-ui-components/react/toast';

const XIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

const Toasts = () => {
  const { toasts } = Toast.useToastManager();
  return toasts.map((toast) => (
    <Toast.Root key={toast.id} toast={toast} className="toast font-sans">
      <Toast.Content className="toastContent">
        <Toast.Title className="toastTitle font-sans" />
        <Toast.Description className="toastDescription" />
        <Toast.Close className="toastClose" aria-label="Close">
          <XIcon className="toastIcon" />
        </Toast.Close>
      </Toast.Content>
    </Toast.Root>
  ));
}

const ToastList = ({ children }) => {
  return(
    <Toast.Viewport className="toast-viewport">
      {children}
      <Toasts />
    </Toast.Viewport>
  )
}

export default ToastList;