import { Context } from 'koa';
import * as _ from 'lodash';
import * as ipdb from 'ipip-ipdb';
import * as randomstring from 'randomstring';
import BigNumber from 'bignumber.js';
import dayjs from 'dayjs';

const DATE_FORMATE = 'YYYY-MM-DD HH:mm:ss';

// 获得请求IP
export function getReqIP(ctx: Context) {
  const req: any = ctx.req;
  return (
    req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
    req.connection.remoteAddress || // 判断 connection 的远程 IP
    req.socket.remoteAddress || // 判断后端的 socket 的 IP
    req.connection.socket.remoteAddress
  ).replace('::ffff:', '');
}

// 根据IP获得请求地址
export async function getIpAddr(ctx: Context, ip?: string | string[]) {
  try {
    if (!ip) {
      ip = await this.getReqIP(ctx);
    }
    const bst = new ipdb.BaseStation('./ipipfree.ipdb');
    const result = bst.findInfo(ip, 'CN');
    const addArr: any = [];
    if (result) {
      addArr.push(result.countryName);
      addArr.push(result.regionName);
      addArr.push(result.cityName);
      return _.uniq(addArr).join('');
    }
  } catch (err) {
    return '无法获取地址信息';
  }
}

// 线程阻塞毫秒数
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 获取随机数
export function getRandom(length = 15, charset = 'alphabetic') {
  const randomString = randomstring.generate({
    length,
    charset,
  });
  return randomString;
}

export function bigEq(
  a: number | string | BigNumber,
  b: number | string | BigNumber
) {
  return new BigNumber(a).eq(b);
}

export function getDateEndTime(time?): string {
  return dayjs(time).endOf('day').format(DATE_FORMATE);
}

export function getDateStartTime(time?): string {
  return dayjs(time).startOf('day').format(DATE_FORMATE);
}

export function mapToObject(map: Map<string, any>) {
  const obj = {};
  for (const [key, value] of map) {
    obj[key] = value;
  }
  return obj;
}

export function objectToMap(obj: object) {
  const map = new Map();
  for (const key in obj) {
    map.set(key, obj[key]);
  }
  return map;
}
