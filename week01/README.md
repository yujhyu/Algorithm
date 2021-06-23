# 这周学习 数据结构，以及 数组的特性
### 链表 Linked List

- 单链表

  - next

- 问题

  - 空链表？

- 双链表

  - next
  - pre

- 时间复杂度

  - insert

    - O(n)

  - lookup

    - O(1)

  - delete

    -  O(1)

  - append （push back）

    - O(1)

  - prepend （push front）

    - O(1)

### 数组 Array

- 特点

  - 随机

- 关键

  - 索引与寻址

- 操作

  - 插入 inserting
  - 删除 deleting

- 时间复杂度

  - insert

    - O(1)

  - lookup

    - O(n)

  - delete

    -  O(n)

  - append （push back）

    - O(1)

  - prepend （push front）

    - O(n)

- 问题

  - 如何实现变长数组？

    - 支持索引与随机访问
    - 分配多长的连续空间？
    - 空间不够怎么办？
    - 空间剩余很多如何回收？

### 栈 Stack

- 特点

  - 后进先出

- 问题
- 时间复杂度

### 队列 Queue

- 特点

  - 先进先出

- 问题
- 时间复杂度

  - push 入栈入队：O(1)
  - pop 出栈出队：O(1)
  - Access 访问栈顶、队头：O(1)

### 双端队列  Deque

- 特点

  - 先进先出

- 问题
- 时间复杂度

  - 队头、队尾插入、删除、访问：O(1)

### 优先队列 Priority Queue

- 特点

  - 先进先出

- 问题
- 时间复杂度

  - 访问最值：O(1)
  - 插入：一般是 O(logN)
  - 取最值：O(logN)