struct NestedIterator {
    flattened: Vec<i32>,
    index: usize,
}

impl NestedIterator {
    fn new(nested_list: Vec<NestedInteger>) -> Self {
        let mut flattened = Vec::new();
        Self::flatten(&nested_list, &mut flattened);

        Self {
            flattened,
            index: 0,
        }
    }

    fn flatten(nested: &[NestedInteger], result: &mut Vec<i32>) {
        for ni in nested {
            match ni {
                NestedInteger::Int(val) => result.push(*val),
                NestedInteger::List(list) => Self::flatten(list, result),
            }
        }
    }

    fn next(&mut self) -> i32 {
        let val = self.flattened[self.index];
        self.index += 1;
        val
    }

    fn has_next(&self) -> bool {
        self.index < self.flattened.len()
    }
}
