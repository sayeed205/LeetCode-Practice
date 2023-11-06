class SeatManager {
    last: number;
    pq: number[];

    constructor(n: number) {
        this.last = 0;
        this.pq = [];
    }

    reserve(): number {
        if (this.pq.length === 0) {
            return ++this.last;
        } else {
            this.pq.sort((a, b) => a - b);
            return this.pq.shift()!;
        }
    }

    unreserve(seatNumber: number): void {
        if (seatNumber === this.last) {
            this.last--;
        } else {
            this.pq.push(seatNumber);
        }
    }
}
