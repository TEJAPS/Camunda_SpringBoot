package parentModule.childModule;

import java.util.ArrayList;

public class TensArray {
    public static void main(String args[]) {
        String[] al = {"name1", "name2", "name3", "name4", "name5", "name6",
                "name7", "name8", "name9", "name10", "name11", "name12"};
        ArrayList<String> names = new ArrayList<>();
        for (int i = 0; i < al.length; i++)
            names.add(al[i]);

        String[][] matrix = myfunc(names, 2, 6);
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 6; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }

        String[][] matrix2 = myfunc(names, 3, 4);
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 4; j++) {
                System.out.print(matrix2[i][j] + " ");
            }
            System.out.println();
        }

    }

    public static int nchoosek(int i, int j) {
        if (j == 0)
            return 1;
        if (j == i)
            return 1;
        return nchoosek(i - 1, j - 1) + nchoosek(i - 1, j);
    }

    public static String[][] myfunc(ArrayList<String> al, int row, int col) {
        int count = 0;


        String[][] arr = new String[row][col];
        for (int i = 0; i < col; i++) {
            for (int j = 0; j < row; j++) {
                arr[j][i] = al.get(count++);
            }
        }
        return arr;
    }

}

class exam {

    static int max;
    static int maxSize = 90;
    static int count = 0;
    static int[][] arr = {{1, 2, 3},
            {4, 5, 6},
            {9, 3, 1}};


    public static void main(String[] args) {
        int[] maxarr = getMax(arr);
        for (int i = 0; i < maxarr.length; i++)
            System.out.print(maxarr[i] + " ");
    }

    public static int[] getMax(int[][] input) {
        int[] retArr = new int[input.length];


        for (int i = 0; i < input.length; i++) {
            max = input[i][0];
            for (int j = 0; j < input[i].length; j++) {
                if (input[i][j] > max) {
                    max = input[i][j];
                }
            }
            retArr[i] = max;
        }
        return retArr;
    }
}