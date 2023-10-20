import java.util.Iterator;
import java.util.List;
import java.util.Stack;

public class NestedIterator implements Iterator<Integer> {
    private Stack<NestedInteger> stack;

    public NestedIterator(List<NestedInteger> nestedList) {
        stack = new Stack<>();
        // Push the elements from the input list onto the stack in reverse order.
        for (int i = nestedList.size() - 1; i >= 0; i--) {
            stack.push(nestedList.get(i));
        }
    }

    @Override
    public Integer next() {
        // Ensure that hasNext() is called before next()
        if (!hasNext()) {
            return null;
        }
        return stack.pop().getInteger();
    }

    @Override
    public boolean hasNext() {
        // Continue to flatten the nested structure until the stack is empty or a valid integer is found.
        while (!stack.isEmpty()) {
            NestedInteger current = stack.peek();
            if (current.isInteger()) {
                return true;
            } else {
                stack.pop();
                List<NestedInteger> nestedList = current.getList();
                for (int i = nestedList.size() - 1; i >= 0; i--) {
                    stack.push(nestedList.get(i));
                }
            }
        }
        return false;
    }
}
