"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToMap = exports.mapToObject = exports.getDateStartTime = exports.getDateEndTime = exports.bigEq = exports.getRandom = exports.sleep = exports.getIpAddr = exports.getReqIP = void 0;
const _ = __importStar(require("lodash"));
const ipdb = __importStar(require("ipip-ipdb"));
const randomstring = __importStar(require("randomstring"));
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const dayjs_1 = __importDefault(require("dayjs"));
const DATE_FORMATE = 'YYYY-MM-DD HH:mm:ss';
// 获得请求IP
function getReqIP(ctx) {
    const req = ctx.req;
    return (req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
        req.connection.remoteAddress || // 判断 connection 的远程 IP
        req.socket.remoteAddress || // 判断后端的 socket 的 IP
        req.connection.socket.remoteAddress).replace('::ffff:', '');
}
exports.getReqIP = getReqIP;
// 根据IP获得请求地址
async function getIpAddr(ctx, ip) {
    try {
        if (!ip) {
            ip = await this.getReqIP(ctx);
        }
        const bst = new ipdb.BaseStation('./ipipfree.ipdb');
        const result = bst.findInfo(ip, 'CN');
        const addArr = [];
        if (result) {
            addArr.push(result.countryName);
            addArr.push(result.regionName);
            addArr.push(result.cityName);
            return _.uniq(addArr).join('');
        }
    }
    catch (err) {
        return '无法获取地址信息';
    }
}
exports.getIpAddr = getIpAddr;
// 线程阻塞毫秒数
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
exports.sleep = sleep;
// 获取随机数
function getRandom(length = 15, charset = 'alphabetic') {
    const randomString = randomstring.generate({
        length,
        charset,
    });
    return randomString;
}
exports.getRandom = getRandom;
function bigEq(a, b) {
    return new bignumber_js_1.default(a).eq(b);
}
exports.bigEq = bigEq;
function getDateEndTime(time) {
    return (0, dayjs_1.default)(time).endOf('day').format(DATE_FORMATE);
}
exports.getDateEndTime = getDateEndTime;
function getDateStartTime(time) {
    return (0, dayjs_1.default)(time).startOf('day').format(DATE_FORMATE);
}
exports.getDateStartTime = getDateStartTime;
function mapToObject(map) {
    const obj = {};
    for (const [key, value] of map) {
        obj[key] = value;
    }
    return obj;
}
exports.mapToObject = mapToObject;
function objectToMap(obj) {
    const map = new Map();
    for (const key in obj) {
        map.set(key, obj[key]);
    }
    return map;
}
exports.objectToMap = objectToMap;
//# sourceMappingURL=utils.js.map