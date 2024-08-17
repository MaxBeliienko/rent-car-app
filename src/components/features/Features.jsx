import styles from './Features.module.css';

const Features = ({ car }) => {
  const { form, length, width, height, tank, consumption } = car;
  return (
    <div className={styles['vehicle-container']}>
      <h2>Vehicle details</h2>
      <ul className={styles['vehicle-list']}>
        <li>
          <span>Form</span>
          <span>{form}</span>
        </li>
        <li>
          <span>Length</span>
          <span>{length}</span>
        </li>
        <li>
          <span>Width</span>
          <span>{width}</span>
        </li>
        <li>
          <span>Height</span>
          <span>{height}</span>
        </li>
        <li>
          <span>Tank</span>
          <span>{tank}</span>
        </li>
        <li>
          <span>Consumption</span>
          <span>{consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default Features;
