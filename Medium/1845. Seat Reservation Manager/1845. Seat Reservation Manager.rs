use std::cmp::Reverse;
use std::collections::BinaryHeap;

struct SeatManager {
    last: i32,
    pq: BinaryHeap<Reverse<i32>>,
}

impl SeatManager {
    fn new(n: i32) -> Self {
        SeatManager {
            last: 0,
            pq: BinaryHeap::new(),
        }
    }

    fn reserve(&mut self) -> i32 {
        if self.pq.is_empty() {
            self.last += 1;
            self.last
        } else {
            let seat = self.pq.pop().unwrap().0;
            seat
        }
    }

    fn unreserve(&mut self, seat_number: i32) {
        if seat_number == self.last {
            self.last -= 1;
        } else {
            self.pq.push(Reverse(seat_number));
        }
    }
}
