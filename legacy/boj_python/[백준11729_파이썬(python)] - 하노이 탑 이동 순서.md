## 🔴 문제
> [하노이 탑 이동 순서](https://www.acmicpc.net/problem/11729)


<br/>

## 🟡 Sol
```python
N = int(input())

def hanoi(N, start, end):
    if (N == 1):
        print(start, end)
        return
    hanoi(N-1, start, 6-start-end)
    print(start, end)
    hanoi(N-1, 6-start-end, end)

print(2**N-1)
hanoi(N, 1, 3)
```
<br/>

## 🟢 풀이
어려워서 눈물 한바가지 흘리다가 풀이를 검색해봤다.

하노이의 탑을 재귀로 표현하려면 다음 3단계로 풀이 가능하다.
1. n-1개의 원판을 1번 막대에서 2번 막대로 이동
2. 남은 1개의 원판을 1번 막대에서 3번 막대로 이동
3. 3단계 에서는 다시 n-1개의 원판을 2번 막대에서 3번 막대로 이동
 
<br/>

## 🔵 Ref
> https://study-all-night.tistory.com/6