# Remove Duplicates from Sorted Array

### Problem Domain:
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

### Algorithm to solve:
Here's a step-by-step guide to solving the problem:

1. **Initialize Pointers**: Start with two pointers. One pointer will track the current position in the array where the next unique element should be placed, and the other pointer will iterate through the array to find unique elements.

2. **First Element**: The first element in the array is always unique, so place it at the start of the array and move the pointer for the position where the next unique element should go to the next position.

3. **Iterate Through the Array**: Use the second pointer to iterate through the array starting from the second element.

4. **Compare Elements**: For each element the second pointer visits, compare it with the last unique element found (the element just before the current position pointer).

5. **Identify Unique Elements**: If the current element is different from the last unique element found, it means it's a unique element.

6. **Place Unique Element**: Place this unique element at the position indicated by the current position pointer, then move the position pointer one step forward.

7. **Continue Iteration**: Continue this process until you have checked all elements in the array.

8. **Return the Count of Unique Elements**: The current position pointer will indicate the number of unique elements in the array.

By following these steps, you effectively shift all unique elements to the beginning of the array while maintaining their relative order. The count of unique elements is given by the position pointer.

### Code Solution:
```Javascript
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let uniqueIndex = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] != nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }
    return uniqueIndex + 1;
};
```
### Whiteboard
[Whiteboard](//add imagehere)

### Explanation of Solution:
Certainly! Let's delve deeper into how the pointers work in your function:

### Initialization

1. **Check for Empty Array**:
   ```plaintext
   if (nums.length === 0){
     return 0;
   }
   ```
   - This part ensures that if the array is empty, the function returns `0` immediately, as there are no elements to process.

2. **Initialize `uniqueIndex`**:
   ```plaintext
   let uniqueIndex = 0;
   ```
   - `uniqueIndex` is initialized to `0`. This pointer will keep track of the position in the array where the next unique element should be placed. Initially, it points to the first element of the array.

### Iteration and Comparison

3. **Iterate Through the Array**:
   ```plaintext
   for(let i = 1; i < nums.length; i++) {
   ```
   - `i` is another pointer that starts from `1` and iterates through the array up to the last element. It checks each element to see if it's a duplicate.

4. **Compare Elements**:
   ```plaintext
   if(nums[i] != nums[uniqueIndex]){
   ```
   - Inside the loop, you compare the current element (`nums[i]`) with the element at the `uniqueIndex` position (`nums[uniqueIndex]`).
   - If `nums[i]` is not equal to `nums[uniqueIndex]`, it means you have found a new unique element.

### Updating Pointers and Array

5. **Increment `uniqueIndex` and Update the Array**:
   ```plaintext
   uniqueIndex++;
   nums[uniqueIndex] = nums[i];
   ```
   - When a new unique element is found, you increment `uniqueIndex` by `1`. This moves the `uniqueIndex` pointer to the next position in the array.
   - You then place the current element (`nums[i]`) at the new `uniqueIndex` position in the array (`nums[uniqueIndex] = nums[i]`).
   - This operation effectively shifts unique elements towards the beginning of the array, ensuring that the first `uniqueIndex + 1` elements are unique.

### Final Count

6. **Return the Count of Unique Elements**:
   ```plaintext
   return uniqueIndex + 1;
   ```
   - After the loop has processed all elements, the function returns `uniqueIndex + 1`. This value represents the total number of unique elements in the array, as `uniqueIndex` is zero-based.

### Visual Example

Let's take an example array: `[1, 1, 2, 2, 3, 3, 4]`.

- Initially, `uniqueIndex` is `0` and `i` starts from `1`.

1. **First Iteration (`i = 1`)**:
   - Compare `nums[1]` (`1`) with `nums[0]` (`1`). They are equal, so no action is taken.

2. **Second Iteration (`i = 2`)**:
   - Compare `nums[2]` (`2`) with `nums[0]` (`1`). They are different.
   - Increment `uniqueIndex` to `1`.
   - Update `nums[1]` to `2`. The array now looks like `[1, 2, 2, 2, 3, 3, 4]`.

3. **Third Iteration (`i = 3`)**:
   - Compare `nums[3]` (`2`) with `nums[1]` (`2`). They are equal, so no action is taken.

4. **Fourth Iteration (`i = 4`)**:
   - Compare `nums[4]` (`3`) with `nums[1]` (`2`). They are different.
   - Increment `uniqueIndex` to `2`.
   - Update `nums[2]` to `3`. The array now looks like `[1, 2, 3, 2, 3, 3, 4]`.

5. **Fifth Iteration (`i = 5`)**:
   - Compare `nums[5]` (`3`) with `nums[2]` (`3`). They are equal, so no action is taken.

6. **Sixth Iteration (`i = 6`)**:
   - Compare `nums[6]` (`4`) with `nums[2]` (`3`). They are different.
   - Increment `uniqueIndex` to `3`.
   - Update `nums[3]` to `4`. The array now looks like `[1, 2, 3, 4, 3, 3, 4]`.

Finally, the function returns `uniqueIndex + 1`, which is `4`, indicating there are 4 unique elements (`[1, 2, 3, 4]`). The rest of the array beyond this count is not important as per the problem's requirements.
