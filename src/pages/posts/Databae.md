---
layout: ../../layouts/MarkdownPostLayout.astro

title: '数据库期末笔记'

date: 2024-05-23
---

## 一、绪论

### 1.1 数据库系统概述

#### 1.1.1 数据库的4个基本概念

#### 1.1.2 数据管理计数的产生和发展（三个阶段）

#### 1.1.3 数据库系统的特点

#### 1.2.1 两类数据类型

#### 1.2.2 概念模型

#### 1.2.7 关系模型

## 二、关系数据库

### 2.1 关系数据结构及形式化定义

#### 2.1.1 关系

1. 域：一组具有相同数据类型的值的集合
2. 笛卡儿积：域上的一种集合运算
3. 关系：R（D1，D2，...，Dn）
   1. 候选码：关系中的某一属性组的值能唯一地标识一个元组，而其子集不能，则该属性组为候选码
   2. 候选码的属性为主属性
   3. 全码：关系模式的所有属性是这个关系模式的候选码
   4. 关系的三种类型：
      1. 基本关系（基本表或基表）：实际存在的表
      2. 查询表：查询结果对应的表
      3. 视图：由基本表或其他视图表导出的表，是虚表，不对应实际存储的数据
   5. 关系的6个性质：
      1. 列是同质的
      2. 不同列可出自同一个域，称其中的每一列为一个属性，不同属性要给予不同属性名
      3. 列的顺序无所谓
      4. 任意两个元组的候选码不能取相同的值
      5. 行的顺序无所谓
      6. 分量必须取原子值，即每个分量都必须是不可分的数据项
   6. 范式：规范化的关系
      - 规范化：关系必须满足一定的规范条件：
        - 关系的每一个分量必须是一个不可分的数据项

#### 2.1.2 关系模式

- 关系模式是型，关系是值，关系模式是对关系的描述
- 关系模式：关系的描述 R（U，D，DOM，F）
  R是关系名，U为组成该关系的属性名的集合，D为U中属性所来自的域，DOM为属性向域的映像集合，F为属性间数据的依赖关系

#### 2.1.3 关系数据库

- 关系数据库的型也称为关系数据库模式，是对关系数据库的描述
- 关系数据库的值是这些关系模式在某一时刻对应的关系的集合，通常就称为关系数据库

#### 2.1.4 关系模型的存储结构

- 在关系数据库中实体及实体间的联系都用表来表示
- 表是关系数据库的逻辑模型
- 在关系数据库的物理组织中，有的物理数据组织由操作系统完成，有的自己申请文件，进行存储管理

### 2.2 关系操作

#### 2.2.1 基本的关系操作

- 常用操作：查询，插入，删除，修改
- 查询又包括：选择，投影，连接，除，并，差，交，笛卡儿积

#### 2.2.2 关系数据语言的分类

- 关系代数 和 关系演算
- 介于两者之间的结构化查询语言SQL（高度非过程化的语言）

### 2.3 关系的完整性

- 三类完整性约束：实体完整性，参照完整性，用户定义的完整性。

#### 2.3.1 实体完整性

- 主属性不能为空

#### 2.3.2 参照完整性

- 若属性F是基本关系R的外码，他与基本关系S的住吗相对应，则对于R中的每一个元组在F上的值：
  1. 要么，全为空
  2. 要么，都与S中的元组的主码值相对应
- 外码：若F是R中的一个或一组属性，但不是关系R的码，K是S的主码，如果F与K相对应，则称F是R的外码，并称基本关系R是参照关系，基本关系S为被参照关系（R与S可为同一个）
- 外键并不一定要与相应的主键同名

#### 2.3.3 用户定义的完整性

- 针对某一具体关系数据库的约束条件，反映某一具体应用所涉及的数据必须满足的语义要求。

### 2.4 关系代数

- 关系代数是一种抽象的查询语言，它用对关系的运算来表达查询

#### 2.4.1 传统的集合运算

1. 并
2. 差
3. 交
4. 笛卡儿积
   - 条件：
     1. 目相同（属性数相同）
     2. 相对应的属性来自同一域

#### 2.4.2 专门的集合运算

- 作为关系数据系统，最小应具备的关系运算是 **选择、投影、连接**
- 数据库中五种基本运算：交、并、投影、选择、笛卡儿积

1. 选择σ
2. 投影Π
3. 连接▷◁
   1. 等值连接
   2. 非等值连接
   3. 自然连接：两个关系中进行比较的分量必须是同名的属性组，并且在结果在中把重复的属性列去掉。
      - 悬浮元组：被舍弃的元组
      - 外连接：连接结果不仅包含符合连接条件的行同时也包含自身不符合条件的行。包括左外连接、右外连接和全外连接。
      - 自动去重
   4. 除运算（÷）

## 三、关系数据库标准语言SQL

#### 3.1.2 SQL的特点

1. 综合统一：SQL集数据定义语言，数据操纵语言，数据控制语言的功能于一体。
2. 高度非过程化
3. 面向集合的操作方式
4. 以同一种语言结构提供多种使用方式（既独立又可嵌入）
5. 功能简洁，易学易用

### 3.3 数据定义

#### 3.3.1 模式的定义与删除

1. 定义模式

   ```sql
   create schema <模式名> authorization <用户名>
   ```

   若没指定模式名，隐含为用户名

   在模式定义后可以紧接表定义

   ```sql
   create schema test authorization cdt
   create table tab1
   (no char(9) primary key,
   name char(20) unique,
   sex char(2),
   age smallint,
   );
   ```

2. 删除模式

   ```sql
   drop schema <模式名> <CASCADE | RESTRICT>;
   ```

   CASCADE为级联，表示在删除时同时把该模式下所有数据对象全部删除

   RESTRICT为限制，表示只有没有任何向下属的对象时才执行删除操作

#### 3.3.2 基本表的定义、删除与修改

1. 定义

   ```SQL
   create table <表名> (<列名><数据类型>[列级完整性约束条件]
                     [,<列名><数据类型>[列级完整性约束条件]]
                     ...
                     [,<表级完整性约束条件>]);
   ```

2. 数据类型

   | 数据类型                       | 含义                                                         |
   | :----------------------------- | :----------------------------------------------------------- |
   | char(n),character(n)           | 长度为n的定长字符串                                          |
   | varchar(n),charactervarying(n) | 最大长度为n的变长字符串                                      |
   | clob                           | 字符串大对象                                                 |
   | blob                           | 二进制大对象                                                 |
   | int,integer                    | 长整数（4字节）                                              |
   | smallint                       | 短整数（2字节）                                              |
   | bigint                         | 大整数（8字节）                                              |
   | numeric(p,d)                   | 定点数，由p位数字（不包括符号、小数点）组成，小数点后面有d位数字 |
   | decimal(p,d),dec(p,d)          | 同numeric                                                    |
   | real                           | 取决于机器精度的单精度浮点数                                 |
   | double precision               | 取决于机器精度的双精度浮点数                                 |
   | float(n)                       | 可选精度的浮点数，精度至少为n位数字                          |
   | boolean                        | 逻辑布尔量                                                   |
   | date                           | 日期，包含年、月、日，格式为 YYYY-MM-DD                      |
   | time                           | 时间，包含一日的时、分、秒，格式为 HH-MM-SS                  |
   | timestamp                      | 时间戳类型                                                   |
   | interval                       | 时间间隔类型                                                 |

3. 模式与表

   - 每个基本表都属于某一个模式，一个模式包含多个基本表。

4. 修改基本表

   ```sql
   ALTER TABLE<表名>
   [ADD [COLUMN]<新列名><数据类型>[完整性约束]]
   [ADD <表级完整性约束>]
   [DROP [COLUMN]<列名>[ CASCADE | RESTRICT ]]
   [DROP CONSTRAINT<完整性约束名>[ RESTRICT | CASCADE ]]
   [ALTER COLUMN<列名><数据类型>];
   ```

5. 删除基本表

   ```sql
   DROP　TABLE<表名>[RESTRICT|CASCADE]；
   ```

   

#### 3.3.3 索引的建立与删除

- 建立索引：加快查询速度的有效手段
- 类型：顺序文件索引，B+树索引，散列索引，位图索引

1. 建立索引

   ```sql
   CREATE [UNIQUE] [CLUSTER] INDEX <索引名>
   ON <表名>（<列名>[<次序>][,<列名>[<次序>]]…）;
   ```

   次序有：ASC（升序），DESC（降序）

   Unique指此索引的每一个索引值只对应唯一的数据记录

   cluster建立的索引是聚簇索引

2. 修改索引

   ```sql
   ALTER INDEX　<旧索引名> RENAMA TO <新索引名>；
   ```

3. 删除索引

   ```sql
   DROP INDEX <索引名>；
   ```

   - 删除索引时，系统会同时从数据字典中删去有关该索引的描述

#### 3.3.4 数据字典

- 数据字典是关系数据库管理系统内部的一组系统表，记录了数据库中所有的定义信息，包括关系模式定义、视图定义、索引定义、完整性约束定义、各类用户对数据库的操作权限、统计信息等。

### 3.4 数据查询

```sql
SELECT  [ ALL | DISTINCT ] <目标列表达式>[,<目标列表达式>]…
FROM <表名或视图名> [（<SELECT语句>）[AS]<别名> ]
[WHERE <条件表达式>]
[GROUP BY <列名1>[ HAVING <条件表达式> ] ]
[ORDER BY <列名2>[ ASC|DESC ] ];
```

- 含义：根据where子句的条件表达式从from子句指定的基本表、视图或派生表中找出满足条件的元组，再按select子句中的目标列表达式选出元组中的属性值形成结果表

#### 3.4.1 单表查询

仅涉及一个表的查询

1. 选择表中若干列

   1. 查询指定列

      ```sql
      select Sno,Sname
      from Student;
      ```

   2. 查询全部列

      ```sql
      select *
      from Student;
      ```

   3. 查询经过计算的值

      ```sql
      select Sname,2014-Sage
      from Student;
      ```

      指定别名

      ```sql
      select Sname NAME,'Year of Birth:' BIRTH,2014-Sage BIRTHDAY,LOWER(Sdept) 系名
      from Student;
      ```

2. 选择表中若干元组

   1. 消除取指重复的行

      ```sql
      select distinct Sno
      from SC;
      ```

   2. 查询满足条件的元组

      | 查询条件             | 谓词                                               |
      | -------------------- | -------------------------------------------------- |
      | 比较                 | =, >, <, >=, <=, !=, <>, !>, !<;NOT+上述比较运算符 |
      | 确定范围             | between and, not between and                       |
      | 确定集合             | in, not in                                         |
      | 字符匹配             | like, not like                                     |
      | 空值                 | is null, is not null                               |
      | 多重条件（逻辑运算） | and, or, not                                       |

      1. 比较大小

         ```sql
         select Sname
         from Student
         where Sdept = 'CS';
         ```

      2. 确定范围

         ```sql
         select Sname,Sdept,Sage
         from Student
         where Sage between 20 and 30;
         ```

      3. 确定集合

         ```sql
         select Sname,Ssex
         from Student
         where Sdept in ('CS','MA','IS');
         ```

      4. 字符匹配

         ```sql
         [not] like '<匹配串>' [escqpe '<换码字符>']
         ```

         查找指定的属性值与匹配串相匹配的元组。

         匹配串可以是一个完整的字符串，也可以含有通配符%和_

         -  %代表任意长度（可以为0）的字符串。a%b表示以a开头，以b结尾的任意长度的字符串
         - _代表任意单个字符。a_b表示以a开头，以b结尾的长度为3的任意字符串

         ```sql
         select Sname,Sno,Ssex
         from Student
         where Sname like '刘%';
         ```

         ```sql
         select Cno,Ccredit
         from Course
         where Cname like 'DB\_Design' ESCAPE'\'; //查询DB_Design课程的课程号和学分
         ```

      5. 涉及空值的查询

         ```sql
         select Sno,Cno
         from SC
         where Grade is null; 'is'不能用'='代替
         ```

      6. 多重条件查询

         ```sql
         select Sname
         from Student
         where Sdept = 'CS' and Sage <20;
         ```

   3. order by 子句

      用户可以用order by子句对查询结果按照一个或多个属性列的升序(ASC)或降序(DESC)排序，默认值为升序。

      ```sql
      select Sno,Grade
      from Student
      where Cno = '3'
      order by Drade DESC;
      ```

   4. 聚集函数

      - count(*) 统计元组个数
      - count([distinct|all]<列名>) 统计一列中值的个数
      - sum([distinct|all]<列名>) 计算一列值的总和（必须是数值型）
      - avg([distinct|all]<列名>) 计算一列值的平均值（必须是数值型）
      - max([distinct|all]<列名>) 求一列值中最大值
      - min([distinct|all]<列名>) 求一列值中最小值

      ```sql
      select sum(Ccredit)
      from SC,Course
      where Sno='201215012' and SC.Cno=Course.Cno;
      ```

      聚集函数只能用于 select 子句和 group by 子句中的 having 子句

   5. group by 子句

      将查询结果按某一列或多列的值分组，值相等的为一组

      ```sql
      select Sno,avg(Grade)
      from SC
      group by Sno
      having avg(Grade)>=90
      ```

#### 3.4.2 连接查询

一个查询同时涉及两个以上的表

1. 等值与非等值查询

   ```sql
   select Student.*,SC.*
   from Student,SC
   where Student.Sno=SC.Sno;
   ```

   若把目标列中重复的属性列去掉则为自然连接

   ```sql
   select Student,Sno,Sname,Ssex,Sage,Sdept,Cno,Grade
   from Student,SC
   where Student.Sno=SC.Sno;
   ```

   一条SQL语句可同时完成选择和连接查询，此时where是由连接谓词和选择谓词组成的符合条件

   ```sql
   select Student.Sno,Sname
   from Student,SC
   where Student.Sno=SC.Sno and		/*连接谓词*/
   		SC.Cno='2' and SC.Grade>=90;  /*选择谓词*/
   ```

2. 自身连接

   ![image-20240524175333943](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202405241753080.png)

   ![image-20240524175349316](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202405241753375.png)

3. 外连接

   ![image-20240524175644570](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202405241756667.png)

4. 多表连接

   ```sql
   select Student.Sno,Sname,Cname,Grade
   from Student,SC,Course
   where Student.Sno=SC.Sno and SC.Sno=Course.Sno;
   ```

#### 3.4.3 嵌套查询

- 查询块：一个 select-from-where 语句
- 嵌套查询：将一个查询块嵌套在另一个查询块的 where 子句或 having 短语的条件中的查询
- 子查询的 select 语句中不能使用 order by 子句，order by 子句只能对最终查询结果排序

1. 带有 in 谓词的子查询

   ![image-20240524182121452](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202405241821547.png)

   - 不相关子查询：子查询的查询条件不依赖于父查询
   - 相关子查询：子查询的查询条件依赖于父查询

2. 带有比较运算符的子查询

   ![image-20240524182506326](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202405241825393.png)

3. 带有 any(some) 或 all 谓词的子查询

   子查询返回多值时要用any(有的系统用some) 或all谓词修饰符。

   any 或 all 必须同时使用比较运算符

   ![image-20240524182737343](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202405241827402.png)

   ![image-20240524182836382](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202405241828449.png)

   ![image-20240524183017444](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202405241830481.png)

4. 带有 exists 谓词的子查询

   此查询不返回任何数据，只产生逻辑值 true 或 false

   ![image-20240524183245641](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202405241832728.png)

#### 3.4.4 集合查询

- 并操作 UNION
- 交操作 INTERSECT
- 差操作 EXCEPT

![集合查询](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202405241910019.png)

#### 3.4.5 基于派生表的查询

- 派生表：出现在from子句中的子查询

  ```sql
  select Sno,Cno
  from SC,(select Sno,Avg(Grade) from SC group by Sno) as Avg_sc(avg_sno,avg_grade)
  where SC.Sno = Avg_sc.avg_sno and SC.Grade > Avg_sc.avg_grade
  ```

### 3.7 视图

#### 3.7.1 定义视图

1. 建立视图

   ```sql
   CREATE VIEW<视图名>[(<列名>[,<列名>]…)]
   AS <子查询>
   [WITH CHECK OPTION];
   ```

   

#### 3.7.2查询视图

#### 3.7.3 更新视图

#### 3.7.4 视图的作用

## 六、关系数据理论

## 七、数据库设计

### 7.3 概念结构设计

### 7.4 逻辑结构设计

## 十、数据库恢复技术

### 10.1 事务的基本概念

### 10.2 数据库恢复概述