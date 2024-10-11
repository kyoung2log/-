## 🔴 문제
> [쿼드트리](https://www.acmicpc.net/problem/1992)


<br/>

## 🟡 Sol
```python
n = int(input())
data = [list(map(int, input())) for i in range(n)]

def check(data):
    d = []
    for i in data:
        d.extend(i)
    if len(set(d)) == 1:
        return "{0}".format(d[0])
    else:
        a = check([n[0:int(len(data)/2)] for n in data[0:int(len(data)/2)]])
        b = check([n[int(len(data)/2):] for n in data[0:int(len(data)/2)]])
        c = check([n[0:int(len(data)/2)] for n in data[int(len(data)/2):]])
        d = check([n[int(len(data)/2):] for n in data[int(len(data)/2):]])
        return "({0}{1}{2}{3})".format(a, b, c, d)

print(check(data))
```
<br/>

## 🟢 풀이
일단 재귀함수로 구현해야하는 문제이므로 재귀함수 check를 만들어주었다.
check함수에 2차원 리스트 data를 전달해주면 1차원으로 펴서 set으로 만든 뒤, 개수가 2개인지(0, 1) 아닌지 확인한다
만약 1개라면 압축이 완료된 상황이기에 압축 결과를 문자열 형태로 리턴해준다.
2개라면 4사분면으로 나누어 재귀를 실행해주고 실행한 결과를 "괄호"안에 넣어 문자열 형태로 리턴해주면 된다.


TMI : 출력형태를 맞추는것이 제일 어려웠다.
다른 사람들의 풀이를 보니 너무 스파게티 코드 같기도..
사실 코드짜면서도 SET으로 바꾸어 확인하는 과정이 너무 지저분하다고 생각했다.

<br/>

## 🔵 Ref
