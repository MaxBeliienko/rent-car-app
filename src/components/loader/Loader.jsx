import { Rings } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.overlay}>
      <Rings
        height="300"
        width="300"
        radius="9"
        color="#E44848"
        ariaLabel="rings-loading"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        visible={true}
      />
    </div>
  );
};

export default Loader;
