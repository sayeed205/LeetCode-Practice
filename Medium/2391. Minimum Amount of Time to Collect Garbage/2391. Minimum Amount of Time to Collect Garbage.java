class Solution {
    public int garbageCollection(String[] garbage, int[] travel) {
        int acc = 0;
        // Calculate cumulative travel times
        int[] travelAccumulated = new int[travel.length + 1];
        for (int i = 0; i < travel.length; i++) {
            acc += travel[i];
            travelAccumulated[i + 1] = acc;
        }
        
        // Use nested loops to iterate through the garbage array and accumulate counts and last indices
        int p = 0, m = 0, g = 0, lastP = 0, lastM = 0, lastG = 0;
        for (int i = 0; i < garbage.length; i++) {
            String s = garbage[i];
            for (char c : s.toCharArray()) {
                switch (c) {
                    case 'P':
                        p += 1;
                        lastP = i;
                        break;
                    case 'M':
                        m += 1;
                        lastM = i;
                        break;
                    case 'G':
                        g += 1;
                        lastG = i;
                        break;
                }
            }
        }
        
        // Calculate total time
        return p + m + g + travelAccumulated[lastP] + travelAccumulated[lastM] + travelAccumulated[lastG];
    }
}
