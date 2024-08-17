import sprite from '../../img/sprite.svg';
import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review, index) => {
        const { comment, reviewer_name, reviewer_rating } = review;

        const stars = Array(5)
          .fill(null)
          .map((_, i) => (
            <svg
              key={i}
              width={16}
              height={16}
              className={
                i < reviewer_rating
                  ? styles['filled-star']
                  : styles['empty-star']
              }
            >
              <use href={`${sprite}#icon-rating`}></use>
            </svg>
          ));

        return (
          <li className={styles['review-item']} key={index}>
            <svg className={styles.avatar} width={60} height={60}>
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
            <p className={styles.name}>{reviewer_name}</p>
            <div className={styles['stars-container']}>
              {stars}
            </div>
            <p className={styles.comment}>{comment}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
