## 🔴 문제
> [주사위 세개](https://www.acmicpc.net/problem/2480)


<br/>

## 🟡 Sol
```python
t1, t2, t3 = map(int, input().split())

if(t1 == t2 == t3):
    print(10000 + t1*1000)
elif(len(set([t1, t2, t3])) == 3):
    print(max([t1, t2, t3])*100)
else:
    if(t1 == t2):
        print(t1*100 + 1000)
    elif(t1 == t3):
        print(t1*100 + 1000)
    else:
        print(t2*100 + 1000)
```
<br/>

## 🟢 풀이
값을 각각 t1, t2, t3로 입력받아줬다.
세 값이 다 같은경우, 세 값이 다 다른경우, 세 값중 두 값이 같은경우로 나누어서 풀었다.
하하 ~

<br/>

## 🔵 Ref
> 