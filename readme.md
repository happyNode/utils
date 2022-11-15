# 简介

happyNode 通用化工具类组件

# 使用

```
npm i happy-node-utils -S
```

# 功能介绍

## 日期

- getDateEndTime : 获取指定日期截止时间
- getDateStartTime : 获取指定日期开始时间
- diffDate : 计算日期间隔

## 数字

- bigAdd : 大数相加
- bigDiv : 大数相除
- bigMul : 大数相乘
- bigSub : 大数相减
- bigEq : 大数比较

## 字符串

- toCamelCase : 下划线格式字符串转为驼峰格式
- toSnakeCase : 驼峰格式字符串转为下划线格式
- getRandom : 获取随机数

## 其他

- getReqIP : 获得请求 IP
- getIpAddr : 根据 IP 获得请求地址
- sleep : 线程阻塞毫秒数
- mapToObject : map 转换为对象
- objectToMap : 对象转换为 map，只为一级
- sendGetRequest : 发送 get 请求
- sendPostRequest : 发送 post 请求
