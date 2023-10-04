class MyHashMap:
    def __init__(self):
        # Initialize any necessary data structures here
        self.map = {}

    def put(self, key: int, value: int) -> None:
        # Implement the logic to put a key-value pair in the HashMap
        self.map[key] = value

    def get(self, key: int) -> int:
        # Implement the logic to get the value associated with the key
        return self.map.get(key, -1)

    def remove(self, key: int) -> None:
        # Implement the logic to remove the key-value pair from the HashMap
        if key in self.map:
            del self.map[key]


# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)
