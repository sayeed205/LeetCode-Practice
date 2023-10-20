class NestedIterator:
    def __init__(self, nestedList: [NestedInteger]):
        self.stack = nestedList[
            ::-1
        ]  # Create a stack and reverse the input list

    def next(self) -> int:
        # Ensure that hasNext() is called before next()
        return self.stack.pop().getInteger()

    def hasNext(self) -> bool:
        while self.stack:
            if self.stack[-1].isInteger():
                return True
            # If the top element is a list, flatten it and extend the stack
            nested_list = self.stack.pop().getList()
            self.stack.extend(
                nested_list[::-1]
            )  # Reverse the list for proper order
        return False
