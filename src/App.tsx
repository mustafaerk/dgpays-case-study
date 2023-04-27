import * as React from 'react';
import './style.css';
import Grid from './grid';
import dataList from './data.json';
import { calculateDateDiff, formatDate } from './helpers/date';

function control(today: string, limit: number) {
  const table = document.getElementById('dgpays') as HTMLTableElement;
  const tableRowsLength = table?.rows.length;
  let counter = 0;
  for (let index = 0; index < tableRowsLength; index++) {
    const element = table?.rows[index];
    const startDate = element.cells?.[1].innerText;
    const endDate = element.cells?.[2].innerText || today;
    const dateDiff = calculateDateDiff(endDate, startDate);
    if (
      (element.cells?.[2].style.background === 'red' && dateDiff <= limit) ||
      (element.cells?.[2].style.background !== 'red' && dateDiff > limit)
    ) {
      counter++;
    }
  }
  return counter;
}

export default function App() {
  const sourceProp = dataList;

  const [params, setParams] = React.useState({ limits: 2, today: formatDate(new Date()) });
  const [wrongBg, setWrongBg] = React.useState(0);

  const handleCheckList = () => {
    const wrongCount = control(params.today, params.limits);
    setWrongBg(wrongCount);
  };

  React.useEffect(() => {
    handleCheckList();
  }, []);

  return (
    <div>
      <h1>Dgpays Case Study </h1>
      <div>
        <label htmlFor="date">Today </label>
        <input
          id="date"
          placeholder="today"
          value={params.today}
          type="date"
          onChange={(e) => setParams({ ...params, today: e.target.value })}
        />
        <label htmlFor="limit">Limit </label>
        <input
          id="limit"
          placeholder="limit"
          value={params.limits}
          onChange={(e) => setParams({ ...params, limits: +e.target.value })}
        />
        <button onClick={handleCheckList}>Kontrol et</button>
      </div>
      <Grid source={sourceProp} />
      <strong>{wrongBg} adet yanlış hesaplama bulunmaktadır.</strong>
    </div>
  );
}
