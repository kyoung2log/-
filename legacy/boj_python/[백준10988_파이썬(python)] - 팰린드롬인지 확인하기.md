## 🔴 문제
> [팰린드롬인지 확인하기](https://www.acmicpc.net/problem/10988)


<br/>

## 🟡 Sol
```python
s = input()
if s == s[::-1]:
    print(1)
else:
    print(0)

```
<br/>

## 🟢 풀이
문자열을 뒤집어서 기존 문자열과 같은지 확인해주면 된다.

<br/>

## 🔵 Ref
