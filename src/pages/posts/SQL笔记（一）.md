---
title: 'SQL笔记'
date: '2023-07-23'
tags: ['SQL']
categories: '学习笔记'
---

# SQL笔记

## DDL-数据库操作

```sql
查询所有数据库
show databases;;

查询当前数据库
select database();

创建
create database [if not exist] 数据库名 [default charset 字符集] [collate 排序规则]

删除
drop database [if exist] 数据库名

使用
use 数据库名
```

## DDL-表操作

### 查询

```sql
查询当前数据库所有表（先use）
show tables;

查询表结构
desc 表名；

查询指定表的建表语句
show create table 表名；
```

### 创建

```
creat table 表名(
	字段1 字段1类型[comment 注释],
	字段2 字段2类型,
	...
	字段n 字段n类型
);
```

### 修改

```sql
添加字段
alter table 表名 add 字段名 类型（长度）[comment 注释][约束]；

修改数据类型
alter table 表名 modify 字段名 新数据类型(长度)；

修改字段名和数据类型
alter table 表名 change 旧字段名 新字段名 类型(长度)[comment 注释][约束];

删除字段
alter table 表名 drop 字段名;

修改表名
alter table 表名 rename to 新表名;
```

### 删除

```sql
删除表
drop table[if exist]表名;

删除指定表，并重新创建该表
truncate table 表名;
```



## 数据类型

#### 数值类型

![img](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202307231718259.png)

M：精度（数字长度）  D：标度（小数长度）

#### 字符串类型

![img](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202307231718289.png)

#### 日期和时间类型

![img](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202307231718279.png)
