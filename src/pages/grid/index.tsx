import React  from 'react';
import styles from './index.module.less';

const GridTest: React.FC = () => {
  return (
      <section className="test-container">
        <div className={styles['grid-container']}>
            <div className={styles['one']}>
              one
            </div>
            <div className={styles['two']}>
              two
            </div>
            <div className={styles['three']}>
              three
            </div>
            <div className={styles['four']}>
              four
            </div>
            <div className={styles['five']}>
              five
            </div>
            <div className={styles['six']}>
              six
            </div>
        </div>
      </section>
  );
}

export default GridTest;
