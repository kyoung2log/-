n = int(input())
cordi = list(input().split())
a = [1, 1]

for i in cordi:
  if(i == 'R'):
    if(a[1] != n):
      a[1] = a[1] + 1
  elif(i == 'U'):
    if(a[0] != 1):
      a[0] = a[0] - 1
  elif(i == 'D'):
    if(a[0] != n):
      a[0] = a[0] + 1
  elif(i == 'L'):
    if(a[1] != 1):
      a[1] = a[1] - 1

print(a[0], a[1])