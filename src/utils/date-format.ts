import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
export function formatUTCDate(utcStr) {
  dayjs.extend(utc)
  return dayjs.utc(utcStr).utcOffset(8).format('YYYY-MM-DD HH:mm:ss')
}
