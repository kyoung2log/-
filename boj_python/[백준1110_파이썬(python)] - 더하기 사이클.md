## 🔴 문제
> [더하기 사이클](https://www.acmicpc.net/problem/1110)

<br/>

## 🟡 Sol
```python
N = int(input())
n = N 
cnt = 0

while 1:
    n = (n%10)*10 + (((int(n/10))+(n%10))%10)
    cnt = cnt + 1
    if(N == n):
        print(cnt)
        break
```
<br/>

## 🟢 풀이
while 문안에 n을 주어지는 조건에 맞게 설정해준다.
주어지는 조건에 맞게 설정하는것이 복잡했다.

<br/>

## 🔵 Ref
