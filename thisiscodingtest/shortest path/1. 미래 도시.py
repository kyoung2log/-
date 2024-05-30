INF = int(1e9)

N, M = map(int, input().split())
graph = [[INF]*(N+1) for _ in range(N+1)]

for i in range(1, N+1):
  for j in range(1, N+1):
    if i == j:
      graph[i][j] = 0

for i in range(M):
  a, b = map(int, input().split())
  graph[a][b] = 1
  graph[b][a] = 1

# X : 회사 K : 소개팅 K -> X 가야됨
X, K = map(int, input().split())

for k in range(N+1):
  for i in range(N+1):
    for j in range(N+1):
      graph[i][j] = min(graph[i][j], graph[i][k]+graph[k][j])

for i in graph:
  print(i)
if graph[1][K] == INF or graph[K][X] == INF:
  print("존나멀어")
else:
  print(graph[1][K]+graph[K][X])