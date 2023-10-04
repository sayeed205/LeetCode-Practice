class MyHashMap {
    private static final int SIZE = 10000;
    private Node[] bucket;

    class Node {
        int key;
        int value;
        Node next;

        public Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }

    public MyHashMap() {
        bucket = new Node[SIZE];
    }

    public void put(int key, int value) {
        int index = key % SIZE;
        Node newNode = new Node(key, value);

        if (bucket[index] == null) {
            bucket[index] = newNode;
        } else {
            Node prev = null;
            Node current = bucket[index];
            while (current != null) {
                if (current.key == key) {
                    current.value = value;
                    return;
                }
                prev = current;
                current = current.next;
            }
            prev.next = newNode;
        }
    }

    public int get(int key) {
        int index = key % SIZE;
        Node current = bucket[index];

        while (current != null) {
            if (current.key == key) {
                return current.value;
            }
            current = current.next;
        }

        return -1;
    }

    public void remove(int key) {
        int index = key % SIZE;
        Node prev = null;
        Node current = bucket[index];

        while (current != null) {
            if (current.key == key) {
                if (prev == null) {
                    bucket[index] = current.next;
                } else {
                    prev.next = current.next;
                }
                return;
            }
            prev = current;
            current = current.next;
        }
    }
}


/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap obj = new MyHashMap();
 * obj.put(key,value);
 * int param_2 = obj.get(key);
 * obj.remove(key);
 */