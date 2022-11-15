import dayjs from 'dayjs';
import { QUnitType, OpUnitType, ConfigType } from 'dayjs';

const DATE_FORMATE = 'YYYY-MM-DD HH:mm:ss';

export function getDateEndTime(time?): string {
  return dayjs(time).endOf('day').format(DATE_FORMATE);
}

export function getDateStartTime(time?): string {
  return dayjs(time).startOf('day').format(DATE_FORMATE);
}

export function diffDate(
  dateA: ConfigType,
  dateB: ConfigType,
  format: QUnitType | OpUnitType = 'day'
) {
  const diff = dayjs(dateA).diff(dateB, format);
  return diff;
}
