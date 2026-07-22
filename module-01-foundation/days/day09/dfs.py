graph = {
    "A": ["B", "C"],
    "B": ["D", "E"],
    "C": ["F"],
    "D": [],
    "E": ["F"],
    "F": []
}


def dfs(graph, node, visited=None):
    if visited is None:
        visited = []

    visited.append(node)

    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

    return visited


print("DFS Visit Order:")
print(dfs(graph, "A"))