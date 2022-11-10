import { Context } from 'koa';
import * as _ from 'lodash';
import * as ipdb from 'ipip-ipdb';
import axios, { AxiosRequestConfig } from 'axios';

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

export async function sendGetRequest(url: string, opts: AxiosRequestConfig) {
  const result = await axios.get(url, opts);

  return result;
}

export async function sendPostRequest(url: string, opts: AxiosRequestConfig) {
  const result = await axios.post(url, opts);

  return result;
}
