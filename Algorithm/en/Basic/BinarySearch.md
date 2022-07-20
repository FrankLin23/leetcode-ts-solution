# Binary Search

Binary Search is a search algorithm that finds the position of a target value within a sorted array.

Binary Search compares the value to the middle element of the array.If they are not equal,the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found.If the search ends with the remaining half being empty, the target is not in the array.

## Code Template

```TypeScript
function check(x: number) : boolean {
    /*...*/
}
//When the array is divided into [l, mid] and [mid + 1, r]
function bSearch1(l: number, r: number): number {
    while (l < r) {
        let mid = l + r >> 1;
        if (check(mid)) r = mid;
        else l = mid + 1;
    }
    return l;
}
//When the array is divided into [l, mid - 1] and [mid, r]
function bSearch2(l: number, r: number): number {
    while (l < r) {
        let mid = l + r + 1 >> 1;
        if (check(mid)) l = mid;
        else r = mid - 1;
    }
    return l;
}
```
