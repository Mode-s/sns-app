import Image from 'next/image';
import styles from "./SuccessToast.module.css";

type SuccessToastProps = {
  message: string;
};

export const SuccessToast = ({ message }: SuccessToastProps) => {
  return (
    <div className={styles.toastContainer}>
      <div className={styles.toast} role="status" aria-live="polite">
        <Image src="/icons/success.png" alt="" width={24} height={24} aria-hidden="true" />
        <p className={styles.text}>{message}</p>
      </div>
    </div>
  );
};
