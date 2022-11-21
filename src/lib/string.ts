import * as randomstring from 'randomstring';

/**
 * 下划线格式字符串转为驼峰格式
 * @param {string} text处理前字符串
 * @return {string} 处理后的字符串
 * @runkit true
 * @example
 * const { toCamelCase } = require('happy-utils/string')
 * toCamelCase('to_camel_case')
 * 'toCamelCase'
 */
export function toCamelCase(str: string) {
  return str.replace(/\_[a-z]/g, (item) => {
    return item[1].toUpperCase();
  });
}

/**
 * 驼峰格式字符串转为下划线格式
 * @param {string} text处理前字符串
 * @return {string} 处理后的字符串
 */
export function toSnakeCase(str: string) {
  return str.replace(/[A-Z]/g, (item) => {
    return '_' + item[0].toLowerCase();
  });
}

// 获取随机数
export function getRandom(length = 15, charset = 'alphabetic'): string {
  const randomString = randomstring.generate({
    length,
    charset,
  });
  return randomString;
}
