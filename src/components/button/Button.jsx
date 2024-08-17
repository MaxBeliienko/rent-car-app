import styles from './Button.module.css';

const Button = ({ text, variant = 'first', onClick }) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
