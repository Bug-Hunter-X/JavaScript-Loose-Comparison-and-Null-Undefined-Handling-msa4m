# JavaScript Loose Comparison and Null/Undefined Handling

This repository demonstrates a common JavaScript bug involving loose comparison (==) and the handling of null and undefined values.  The bug arises from the implicit type coercion that occurs with loose equality, leading to unexpected results when comparing with null or undefined.

## Bug Description

The original code uses loose comparison (==) which leads to incorrect results when dealing with null and undefined.  Specifically, it fails to accurately handle cases where one or both input values are null or undefined.  This is because loose equality does not distinguish between null and undefined. 

## Solution

The solution employs strict equality (===) instead. This prevents implicit type coercion and accurately identifies null and undefined values, leading to correct results.

## How to Run

1. Clone the repository.
2. Open `bug.js` to see the buggy code and `bugSolution.js` to see the corrected code.
3. Execute the files in a JavaScript environment (e.g., Node.js, browser's console).