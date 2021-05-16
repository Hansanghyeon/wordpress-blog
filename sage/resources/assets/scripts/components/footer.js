import dayjs from 'dayjs';

function footer() {
  // 블로그 시작인
  const startDay = dayjs('2014-07-22');
  const today = dayjs();

  const year = today.diff(startDay, 'year');
  startDay.add(year, 'years');
  const months = today.diff(startDay, 'months') % 12;
  startDay.add(months, 'months');
  const days = today.diff(startDay, 'days');

  document.querySelector(
    'footer.FNB #history'
  ).innerHTML = `${year}년 ${months}개월째 (${days}일)`;
}

export default footer;
