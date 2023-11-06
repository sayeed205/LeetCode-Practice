import java.util.PriorityQueue;

class SeatManager {
    private int last;
    private PriorityQueue<Integer> pq;

    public SeatManager(int n) {
        last = 0;
        pq = new PriorityQueue<>();
    }

    public int reserve() {
        if (pq.isEmpty()) {
            return ++last;
        } else {
            int seat = pq.poll();
            return seat;
        }
    }

    public void unreserve(int seatNumber) {
        if (seatNumber == last) {
            last--;
        } else {
            pq.offer(seatNumber);
        }
    }
}
