import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] findDiagonalOrder(List<List<Integer>> nums) {
        int n = nums.size();
        List<List<Integer>> temp = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            int m = nums.get(i).size();
            for (int j = 0; j < m; j++) {
                int ti = i + j;

                if (temp.size() <= ti) {
                    temp.add(new ArrayList<>());
                }
                temp.get(ti).add(0, nums.get(i).get(j));
            }
        }

        List<Integer> result = new ArrayList<>();
        for (List<Integer> row : temp) {
            result.addAll(row);
        }

        // Convert List<Integer> to int[]
        int[] resultArray = new int[result.size()];
        for (int i = 0; i < result.size(); i++) {
            resultArray[i] = result.get(i);
        }

        return resultArray;
    }
}
