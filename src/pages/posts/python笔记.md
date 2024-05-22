---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'python期末笔记'
date: '2023-10-22'
tags: ['python']
---

> 期末总成绩=过程成绩(作业，考勤，上机)*50%+期末考试(闭卷机考) *50%

# 一、Python概述

## 1.计算机与程序设计

### 计算机的概念

**计算机是根据指令操作数据的设备**，具有功能性和可编程性

### 计算机的发展

**计算机的发展参照摩尔定律，表现为指数方式**

**摩尔定律：单位面积集成电路上可容纳晶体管的数量每两年翻一番**

### 程序设计

**程序设计是计算机可编程性的体现**

###  程序设计语言

**程序设计语言是一种用于交互（交流）的人造语言**

## 2.编译和解释

### 编程语言的执行方式

**计算机执行源程序的两种方式：编译和解释**

源代码：人类可读

目标代码：计算机可直接执行，人类不可读

### 编译

**将源代码一次性转换为目标代码的过程**

### 解释

**将源代码逐条转换成目标代码同时逐条运行的过程**

每次程序运行时随翻译随执行

### 静态语言和脚本语言

**根据执行方式不同，编程语言分为两类**

**执行方式不同，优势各有不同**

静态语言：使用编译执行，一次性生成目标代码，优化更充分，程序运行速度更快，c,c++,java

脚本语言：使用解释执行，执行程序时需要源代码，维护更灵活，跨多个操作系统平台，python,javascript,PHP

## 3.程序的基本编写方法

### IPO

I：input输入

P：process处理，程序的主要逻辑，处理方法成为算法，是灵魂

O：output输出，程序的输出

### 问题的计算部分

**一个待解决问题中，可以用程序辅助完成的部分**

一个问题可能有多种角度理解，产生不同的计算部分

### 求解计算问题的精简步骤

确定IPO：明确计算部分及功能边界

编写程序：将计算求解的设计变成现实

调试程序：确保程序按照正确的逻辑能正确运行

## 4.Python特点

可移植、可升级、可扩展

健壮性、解释性、编译型

易学、易读、易维护

内存管理器

高级、面向对象

快速原型开发工具

# **二、python基础**

## **1.基础语法**

### **续行**

```python
if signal=='red'and\\
car=='moving'
```

无需续行符可直接换行的两种情况：

1.小括号、中括号、花括号的内部可以多行书写

2.三引号包括下的字符串也可以跨行书写

### **缩进**

增加缩进表示语句块的开始

Python用相同的缩进表示同级别语句块

减少缩进表示语句块的退出

## **变量**

在python中，不需要事先声明变量名及其类型，直接赋值即可创建各种类型的对象变量。这一点适用于python任意类型的对象。

**python中的变量并不直接存储值，而是存储了值的内存地址或者引用**，这也是变量类型随时可以改变的原因。

### 标识符

-首字符是字母或下划线

-其余可以是字母、下划线、数字

-**大小写敏感**

### 关键字

![image-20231026170718170](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261708412.png)

## 2.数据类型

### 数字

-python**支持任意大**的数字，具体仅受内存大小的限制

-**应尽量避免在实数之间直接进行相等性测试**

在数字的算术表达式求值时会进行**隐式的类型转换**

## 3.基本运算

**Python不支持++和--运算符**

### 类型转换与类型判断

![image-20231026173110032](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261731092.png)

### 第三方库不考

## 函数（实现相应功能也可）

# 三、Python序列结构

## 1.序列

**序列是具有先后关系的一组元素**

### 切片

![image-20231026173801422](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261738637.png)

### 序列类型转换函数（去年考）

```python
>>>list('Hello, World!')
['H','e','l','l','o',',',' ','w','o','r','l','d','!']
>>>tuple(hello, world!)
 ('h','e','l','l','o',',',' ','w','o','r','l','d','!')
>>>str([1,2,3])
'[1,2,3]'
>>>aStr='Hello, World'
>>>len(aStr)
13
>>>sorted(aStr)
[' ','!',',','H','W','d','e','l','l','l','o','o','r']
```

## 2.列表（参照实验复习）

### 列表类型定义

`ls=[1,2,3,'a']`

**方括号[]真正创建一个列表，赋值仅传递引用**

### 列表常用方法

**‘方法’在编程中是一个专有名词**

![image-20231026174818512](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261748601.png)

### 字符串

字符串属于不可变序列，不能直接对字符串对象进行元素增加、修改与删除操作![image-20231026175024857](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261750895.png)

### 字符串格式化

**str.format()函数**

```python
>>>"{}{}".format('hello','world')#不设置指定位置，按默认顺序'hello world'
>>>"{0}{1}".format("hello","world")#设置指定位置'hello world'
>>>"{1}{0}{1}".format("hello","world")#设置指定位置'world hello world'
```

### 用format函数格式化字符串

![image-20231026175536182](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261755264.png)



## 字典

**字典中键是不可变数据类型**

### 创建字典

![image-20231026175849562](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261758649.png)

### 字典的基本操作

![image-20231026182217699](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261822777.png)

### 字典方法

![image-20231026182310165](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261823248.png)

![image-20231026182321830](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261823923.png)

![image-20231026182537442](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261825881.png)

## 6.集合

集合中只能包含数字、字符串、元组等**不可变类型**（或者说**可哈希**）的数据，而不能包含列表、字典、集合等可变类型的数据

### 集合的创建

使用大括号{}或set()创建，元素间用逗号分隔

```python
>>>A={"python",123,("python",123)}
{('python',123),123,'python'}
>>>B=set("python123")
{'1','2','3','h','n','o','p','t','y'}
```

### 集合关系运算

![image-20231026183157357](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261831428.png)



# 四、程序控制结构

## 1.条件表达式

### 条件判断

![image-20231026183347981](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261833017.png)

### 条件组合

![image-20231026183411602](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261834635.png)

### 条件判断及组合

![image-20231026183449895](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261834937.png)



## 2.选择结构

![image-20231026183654888](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261836941.png)

## 3.异常处理

![image-20231026183831420](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261838463.png)

### 异常

![image-20231026183900392](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261839447.png)

![image-20231026183923635](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261839783.png)

### 异常处理结构

```python
try:
    #可能会引发异常的代码，先执行一下试试
except Exception[as reason]:
    #如果try中的代码抛出异常并被except捕捉，就执行这里的代码
```

![image-20231026192852099](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261928159.png)

```python
try:
    #可能会引发异常的代码
except Exception[as reason]:
    #用来处理异常的代码
else:
    #如果try子句中的代码没有引发异常，就继续执行这里的代码
```

![image-20231026193018769](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261930823.png)

```python
try:
    #可能会引发异常的代码
except Exception[as reason]:
    #用来处理异常的代码
finally:
    #无论try子句中的代码是否引发异常，都会执行这里的代码
```

![image-20231026193148565](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261931616.png)

## 4.循环结构

![image-20231026193220519](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261932588.png)

break:跳出循环

continue:跳过循环这一轮剩下的语句进入下一轮

### 循环中的else子句（看缩进）

![image-20231026193532538](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261935621.png)

这里的else是对应的第9行的语句，而不是11行的

### 列表推导式

![image-20231026193642734](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261936812.png)

# 五、函数

### 定义

![image-20231026193819669](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261938715.png)

```python
def<函数名>(<参数 (0个或多个)>):
    <函数体>
    return<返回值>
```

## 1.自定义函数

![image-20231026194047331](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261940404.png)

如果函数中没有return语句或者return语句不带任何返回值，那么该函数的返回值为`None`

## 2.函数参数

### 位置参数

![image-20231026194313455](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261943519.png)

### 关键字参数

![image-20231026194338486](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261943610.png)

### 默认参数

![image-20231026194503510](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261945579.png)

![image-20231026194602375](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261946448.png)

![image-20231026194633024](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261946229.png)

![image-20231026194904131](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261949197.png)

## 可变长度参数

![image-20231026195031498](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261950583.png)

![image-20231026195119116](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261951186.png)

### 传递参数时的序列解包

![image-20231026195153453](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261951535.png)

![image-20231026195259949](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261953012.png)

![image-20231026195342537](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261953620.png)

![image-20231026195719384](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261957467.png)

### 传递函数

![image-20231026195758738](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310261957789.png)

### lambda函数

-lambda函数是一种匿名函数，即没有名字的函数

-使用lambda保留字定义，函数名是返回结果

-lambda函数用于定义简单的，能够在一行内表示的函数

-匿名函数：只可以包含一个表达式，该表达式的计算结果可以看作是函数的返回值，不允许包含复合语句，但在表达式中可以调用其他函数

![image-20231026200054268](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262000342.png)

![image-20231026200107675](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262001733.png)

![image-20231026200149334](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262001411.png)

## 3.变量作用域

![image-20231026200234175](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262002237.png)

### 同名变量

![image-20231026200255350](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262002402.png)

### global语句

![image-20231026200354899](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262003947.png)

### 局部变量为组合数据类型

![image-20231026200440398](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262004448.png)

### 总结

![image-20231026200459415](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262004473.png)



# 六、文件及文件操作

## 1.文件的类型

### 文件的理解

-**文件是数据的抽象和集合**

-文件是存储在辅助存储器上的数据序列

-文件是数据存储的一种形式

-文件的展现形态：**文本文件**和**二进制文件**

### 文件

#### 按文件中数据的**组织形式**把文件分为文本文件和二进制文件

-**文本文件**：文本文件存储的是常规**字符串**，由若干文本行组成，通常每行以换行符'\n'结尾。**常规字符串是指记事本或其它文本编辑器能正常显示、编辑并且人类能够直接阅读和理解的字符串**，如英文字母、汉字、数字字符串。文本文件可以使用字处理软件如gedit、记事本进行编辑。

-**二进制文件**：二进制文件把对象内容以**字节串(bytes)**进行存储，无法用记事本或其它普通字处理软件直接进行编辑，通常也无法被人类直接阅读和理解，**需要使用专门的软件**进行解码后 读取、显示、修改或执行。常见的如图形图像文件、音视频文件、可执行文件、资源文件、各种数据库文件、各类office文档等都属于二进制文件。

## 2.文件的相关操作

### 文件的打开

![image-20231026201448684](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262014741.png)

![image-20231026201431225](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262014330.png)

### open()函数-mode

![image-20231026201511596](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262015674.png)

### 打开模式的总结

![image-20231026201531812](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262015865.png)

### 文件相关函数

![image-20231026201706347](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262017402.png)

### 文件的写入

![image-20231026201737831](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262017877.png)

![image-20231026201748998](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262017062.png)

### 上下文管理器with语句

![image-20231026201825147](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262018250.png)

### 文件的读取

![image-20231026201857505](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262018550.png)

![image-20231026201905673](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262019732.png)

### 例子

![image-20231026202006132](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262020222.png)

### 其它文件相关函数

![image-20231026202036312](https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202310262020394.png)
