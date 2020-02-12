#include <stdlib.h>
/*
    NOTE: param1 must be a sorted array.

    param1 : array of Integers.
    param2 : size of the array (param 1)
    return type : Integer Pointer
*/

int* array_to_set(int const* const n, int size)
{
    int *un = malloc(size * sizeof(int));
    int i = 0, index = 0;

    while(i < size) un[i] = -1;

    for (int i = 0; i < size; i++)
    {
        int streak = 0, flag = 0;
        for (int j = i+1; j <= size; j++)
        {
            if (n[i] == n[j] ) {
                streak++; 
            } else {
                flag = 1;
                break;
            }
        }
        if (flag)
        {
            un[index] = n[i];
            index++;
            i += streak;
        }

    }

    return un;
}