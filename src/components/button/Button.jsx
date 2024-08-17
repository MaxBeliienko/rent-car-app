import styles from './Button.module.css';

const Button = ({ text, type = 'button', variant = 'first', onClick }) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
