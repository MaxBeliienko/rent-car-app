import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import sprite from '../../img/sprite.svg';
import styles from './NotFound.module.css';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className={styles['not-found-container']}>
      <h1 className={styles.title}>Page not found.</h1>
      <p className={styles.subtitle}>
        You will be redirected to the Home page in 5 seconds.
      </p>
      <div className={styles.carContainer}>
        <svg className={styles.car}>
          <use href={`${sprite}#icon-car1`} />
        </svg>
      </div>
    </div>
  );
};

export default NotFound;
