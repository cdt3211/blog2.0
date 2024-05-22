---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'CS61A学习笔记'
date: '2023-09-10'
tags: ['python','cs61a']
---

# HW

## hw01

### Q5 If Function vs Statement

Let's try to write a function that does the same thing as an `if` statement.

```python
def if_function(condition, true_result, false_result):
    if condition:
        return true_result
    else:
        return false_result
```

Despite the doctests above, this function actually does *not* do the same thing as an `if` statement in all cases. To prove this fact, write functions `cond`, `true_func`, and `false_func` such that `with_if_statement` prints the number `47`, but `with_if_function` prints both `42` and `47`.

```python
def with_if_statement():
    """
    >>> result = with_if_statement()
    47
    >>> print(result)
    None
    """
    if cond():
        return true_func()
    else:
        return false_func()

def with_if_function():
    """
    >>> result = with_if_function()
    42
    47
    >>> print(result)
    None
    """
    return if_function(cond(), true_func(), false_func())

def cond():
    "*** YOUR CODE HERE ***"
    return False

def true_func():
    "*** YOUR CODE HERE ***"
    print(42)

def false_func():
    "*** YOUR CODE HERE ***"
    print(47)
```

执行`result = with_if_statement(`)和`result = with_if_function()`结果不同，是因为在`with_if_function()`函数中，`return if_function(cond(), true_func(), false_func())`的执行方式是根据`if_function`函数的逻辑来确定的。

```python
def if_function(condition, true_result, false_result):
    """Return true_result if condition is a true value, and
    false_result otherwise.
    """
    if condition:
        return true_result
    else:
        return false_result
```

这个函数是一个普通的Python函数，它接受三个参数：`condition`、`true_result`和`false_result`。然后根据`condition`的值来返回其中之一。函数内部的`if condition:`语句用于判断`condition`的值，如果`condition`为真，就返回`true_result`，否则返回`false_result`。

在这个特定的情况下，`cond()`、`true_func()`和`false_func()`都是函数调用，它们在`if_function`函数调用之前就已经被执行了。这是因为在调用`if_function(cond(), true_func(), false_func())`时，函数参数是在调用前就计算并传递给`if_function`的。所以，`cond()`、`true_func()`和`false_func()`都会在`if_function`的内部判断之前执行，而不是根据条件选择执行其中之一。

# LAB

## lab01

### Q7:Double Eights

Write a function that takes in a number and determines if the digits contain two adjacent 8s.

```python
def double_eights(n):
    """Return true if n has two eights in a row.
    >>> double_eights(8)
    False
    >>> double_eights(88)
    True
    >>> double_eights(2882)
    True
    >>> double_eights(880088)
    True
    >>> double_eights(12345)
    False
    >>> double_eights(80808080)
    False
    """
    "*** YOUR CODE HERE ***"
    while n:
        last=n%10 #提取末位数字
        n//=n #消去末位数字
        if last==8==(n%10): #判断最后两位是否是8
            return True
    return False
```

# PRO

Pro7test

## Hog



```python
def count(n):
	def say(s0, s1):
		print(n, s0)
		return count(n + 1)
	return say
```

输入`s0, s1 = play(always_roll(1), always_roll(1), dice=make_test_dice(5), goal=10, say=count(1))`后，输出

```Python
1 5
2 5
3 10
```

> 这个代码的效果是无限递归地调用`count`函数，并不断地增加参数`n`的值，每次都打印出当前的`n`和`s0`的值。因为没有终止条件，所以这个递归将会无限循环下去，直到出现栈溢出或手动停止程序运行。

> 需要注意的是，`s1`参数在这个代码中没有被使用，因此对于代码的功能来说是没有影响的。如果想要更清楚地理解代码的目的和效果，需要查看完整的代码或者了解更多关于`s1`参数的用法。

因此，第二行n+1=2，但是第二轮是p1掷色子，s0不会增加，故s0仍然为5，第三轮到p0掷色子，s0增加为10

### pro9

```python
def max_scoring_num_rolls(dice=six_sided, trials_count=1000):
    """Return the number of dice (1 to 10) that gives the highest average turn
    score by calling roll_dice with the provided DICE over TRIALS_COUNT times.
    Assume that the dice always return positive outcomes.
    >>> dice = make_test_dice(1, 6)
    >>> max_scoring_num_rolls(dice)
    1
    """
    # BEGIN PROBLEM 9
    "*** YOUR CODE HERE ***"
    i=1
    max=0
    while i<=10:
        a=make_averaged(roll_dice,trials_count)(i,dice)
        if a>max:
            max=a
            num=i
        i+=1
    return num
    # END PROBLEM 9
```

> 这段代码是一个函数，其目的是找出在一定数量的试验中，使用不同数量的骰子（从1到10颗）时，哪种数量的骰子能够获得最高的平均得分。
>
> 在这段代码中，`make_averaged(roll_dice, trials_count)` 返回了一个新的函数，然后立即对这个新函数进行了调用，传递了参数 `(i, dice)`。这种写法是函数的嵌套调用。
>
> 让我们分解这个表达式的含义：
>
> 1. `make_averaged(roll_dice, trials_count)`：这部分代码调用了函数 `make_averaged`，并传递了两个参数 `roll_dice` 和 `trials_count`。`make_averaged` 函数返回了一个新的函数，该函数用于计算指定函数的平均值，其中 `roll_dice` 是要计算平均值的函数，`trials_count` 是进行平均值计算时的试验次数。
> 2. `(i, dice)`：这部分是对上述返回的新函数的调用。这个新函数接受两个参数，分别是 `i` 和 `dice`。在这个上下文中，`i` 表示骰子的数量，`dice` 表示模拟掷骰子的函数。这个调用返回了 `i` 个骰子使用 `dice` 模拟的平均得分。
>
> 所以，整个表达式 `make_averaged(roll_dice, trials_count)(i, dice)` 的作用是计算使用 `i` 个骰子、模拟掷骰子的函数 `dice` 的平均得分，基于 `trials_count` 次试验。这个平均值是通过嵌套调用两个函数实现的。
