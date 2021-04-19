import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/ko';

dayjs.locale('ko');
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.tz.setDefault('Asia/Seoul');
dayjs.updateLocale('ko', {
  relativeTime: {
    future: '%s째',
    past: '%s ago',
    s: 'a초 ',
    m: 'a분 ',
    mm: '%d분 ',
    h: 'an시간 ',
    hh: '%d시간 ',
    d: 'a일 ',
    dd: '%d일 ',
    M: 'a개월 ',
    MM: '%d개월 ',
    y: 'a년 ',
    yy: '%d년 ',
  },
});
