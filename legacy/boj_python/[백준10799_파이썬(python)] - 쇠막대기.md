## 🔴 문제
> [쇠막대기](https://www.acmicpc.net/problem/10799)


<br/>

## 🟡 Sol
```python
s = input()
s = s.replace("()", "0")
check = 0
stack = ''
for i in s:
    if i == '0' and check == 0:
        continue
    elif i == "(":
        check -= 1
    elif i == ")":
        check += 1
    stack += i
    
answer = 0
check = ''
s = stack
stack = 0
for i in s:
    check += i
    if i == ")":
        index = check.rindex("(")
        answer = answer + check[index:].count('0') + 1
        check = check[0:index] + check[index+1:]

print(answer)
```
<br/>

## 🟢 풀이
레이저가 지나가는 () <- 이 부분을 아래와 같이 0으로 replace 해준다.
()(((()())(())()))(())   =>   0(((00)(0)0))(0)
이 후 괄호로 안감싸진 0은 지워버리면 (((00)(0)0))(0) << 이 상태가 된다.
이 문자열을 돌면서 )를 만나면 그 짝을 찾아서 그 사이의 0의 개수 + 1 을 해 최종 정답을 구함
(2+1) + (1+1) + (4+1) + (4+1) + (1+1) = 17

처음에는 rindex를 몰라서 문자열 => 리스트 => 문자열 변환했더니 시간초과가 났다
찾아봤더니 rindex 문자열을 사용해서 오른쪽에서부터 특정 문자를 찾아 인덱스를 반환할 수 있었다.
그리고, 문자열은 del 키워드가 먹히지 않는데 특정 인덱스의 문자을 삭제하고 싶을 땐 문자열 슬라이싱을 이용해 두 문자열을 합쳐주면 된다.!!


<br/>

## 🔵 Ref
