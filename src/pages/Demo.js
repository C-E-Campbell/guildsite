import React from 'react';
import styles from '../styles/Demo.module.css';
import PieGraph from '../components/PieChart';
export default function Demo() {
  const data = [
    { name: 'nikua', value: 0 },
    { name: 'dunir', value: 0 },
    { name: 'kaelar', value: 0 },
    { name: 'renkai', value: 0 },
    { name: 'pyrai', value: 0 },
    { name: 'tulnar', value: 0 },
    { name: 'vek', value: 0 },
    { name: 'vaelune', value: 0 },
    { name: 'empyrean', value: 0 },
  ];
  const COLORS = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    '#DE50B0',
    '#4EEA21',
    '#F02C0E',
    '#6D2EF4',
    '#450D23',
  ];
  return (
    <div>
      <h1 style={{ color: '#333' }}>Demographic Stuff</h1>
      <PieGraph />
      <div>
        <h5 className={styles.nikua}>Nikua</h5>
        <h5 className={styles.dunir}>Dunir</h5>
        <h5 className={styles.kaelar}>Kaelar</h5>
        <h5 className={styles.vaelune}>Vaelune</h5>
        <h5 className={styles.renkai}>Ren'Kai</h5>
        <h5 className={styles.vek}>Vek</h5>
        <h5 className={styles.empyrean}>Empyrean</h5>
        <h5 className={styles.pyrai}>Py'Rai</h5>
        <h5 className={styles.tulnar}>Tulnar</h5>
      </div>
    </div>
  );
}
