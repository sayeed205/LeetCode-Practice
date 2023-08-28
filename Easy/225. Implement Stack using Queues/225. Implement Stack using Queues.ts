class MyStack {
    private q1: number[];
    private q2: number[];

    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(x: number): void {
        this.q1.push(x);
    }

    pop(): number {
        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift()!);
        }
        const result = this.q1.shift()!;
        [this.q1, this.q2] = [this.q2, this.q1];
        return result;
    }

    top(): number {
        return this.q1[this.q1.length - 1];
    }

    empty(): boolean {
        return this.q1.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
