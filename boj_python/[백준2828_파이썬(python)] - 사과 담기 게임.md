## 🔴 문제
> [사과 담기 게임](https://www.acmicpc.net/problem/2828)


<br/>

## 🟡 Sol
```python
from collections import deque

n, m = map(int, input().split())
j = int(input())

q = deque()
for i in range(n):
    q.append(1) if i<m else q.append(0)

def check(d):
    if q[c-1] == 1:
        return 0
    else:
        q.rotate(d)
        return 1 +  check(d)

prev = 1
result = 0
for _ in range(j):
    c = int(input())
    if prev < c:
        result += check(1)
    else:
        result += check(-1)
    prev = c

print(result)
```
<br/>

## 🟢 풀이
먼저 바구니의 상태를 큐로 만든 뒤 rotate()를 사용해 이동시켜줘야겠다고 생각했다.
그 후 반복문을 돌면서 하나씩 값을 입력받는다.
오른쪽으로 이동해야 하는 상황(prev<c)이면 1을 전달하고, 왼쪽으로 이동해야 하는 상황이면 -1을 전달해주었다. 
check 함수에서는 해당 위치에서 떨어지는 사과를 받을 수 있는지 체크하게 바구니의 인덱스 값이 1이라 사과를 받을 수 있는 상황이라면(q[c-1] == 1) 이동거리가 0이므로 0을 리턴해주었다.
사과를 받을 수 없는 상황이라면 매개변수로 전달받은 방향값(1, -1)을 이용해 rotate 시켜준 뒤 1+check(d)를 리턴해준다.
참고로 j값이 증가할때마다 prev를 c로 수정해주어야 한다.

<br/>

## 🔵 Ref
