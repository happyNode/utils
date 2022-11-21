import BigNumber from 'bignumber.js';

type bigType = number | string | BigNumber;

// 加法函数，用来得到精确的加法结果
export function bigAdd(...args) {
  let res = new BigNumber(0);
  for (const arg of args) {
    const a = new BigNumber(arg);
    res = a.plus(res);
  }
  return res;
}

//除法函数，用来得到精确的除法结果
export function bigDiv(arg1, arg2) {
  let res = new BigNumber(0);
  if (+arg2 === 0) return res;

  res = new BigNumber(arg1).dividedBy(arg2);
  return res;
}

// 乘法函数，用来得到精确的乘法结果
export function bigMul(...args) {
  let res = new BigNumber(args.shift());
  for (const arg of args) {
    res = res.multipliedBy(arg);
  }
  return res;
}

// 减法函数，用来得到精确的减法结果
export function bigSub(...args) {
  let res = new BigNumber(args.shift());
  for (const arg of args) {
    res = res.minus(arg);
  }
  return res;
}

export function bigEq(a: bigType, b: bigType) {
  return new BigNumber(a).eq(b);
}
