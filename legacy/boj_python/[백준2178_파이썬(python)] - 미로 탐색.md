## 🔴 문제
> [미로 탐색](https://www.acmicpc.net/problem/2178)


<br/>

## 🟡 Sol
```python
from collections import deque
n, m = map(int, input().split())

data = []
for i in range(n):
    data.append(list(map(int, input())))

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(x, y):
    q = deque()
    q.append((x, y))
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx < 0 or ny < 0 or nx >= n or ny >= m:
                continue
            if data[nx][ny] == 0:
                continue
            if data[nx][ny] == 1:
                data[nx][ny] = data[x][y] + 1
                q.append((nx, ny))
    return data[n-1][m-1]


print(bfs(0, 0))
```
<br/>

## 🟢 풀이
시작 지점에서 가장 가까운 노드를 차례대로 모두 탐색해야하기 때문에 BFS를 사용해 풀어준다.


<br/>

## 🔵 Ref
>  이코테 미로탈출