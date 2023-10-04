struct MyHashMap {
    map: std::collections::HashMap<i32, i32>,
}

impl MyHashMap {
    fn new() -> Self {
        MyHashMap {
            map: std::collections::HashMap::new(),
        }
    }

    fn put(&mut self, key: i32, value: i32) {
        self.map.insert(key, value);
    }

    fn get(&self, key: i32) -> i32 {
        *self.map.get(&key).unwrap_or(&-1)
    }

    fn remove(&mut self, key: i32) {
        self.map.remove(&key);
    }
}


/**
 * Your MyHashMap object will be instantiated and called as such:
 * let obj = MyHashMap::new();
 * obj.put(key, value);
 * let ret_2: i32 = obj.get(key);
 * obj.remove(key);
 */