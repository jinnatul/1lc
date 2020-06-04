$(function() {

    let problems = "<ul class='collapsible expandable'>"

    // Check if all array elements are equal to a given value
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if all array elements are equal to a given value</h6></div>"
    + "<div class='collapsible-body codejs'>"+ allArrayElementsEqual() +"</div></li>"

    // Check if all items in an array are equal
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if all items in an array are equal</h6></div>"
    + "<div class='collapsible-body codejs'>"+ allItemsArrayEqual() +"</div></li>"

    // Check if an array contains a value matching some criterias
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if an array contains a value matching some criterias</h6></div>"
    + "<div class='collapsible-body codejs'>"+ if_an_arrayContains_A_valueMatchingSomeCriterias() +"</div></li>"

    // Check if an array is not empty
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if an array is not empty</h6></div>"
    + "<div class='collapsible-body codejs'>"+ if_a_arrayIsNotEmpty() +"</div></li>"

    // Check if an array is subset of other array
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if an array is subset of other array</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if an object is an array
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if an object is an array</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Clone an array
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Clone an array</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Compare two arrays regardless of order
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Compare two arrays regardless of order</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Compare two arrays
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Compare two arrays</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Convert an array of objects to a single object
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Convert an array of objects to a single object</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Convert an array of strings to numbers
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Convert an array of strings to numbers</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Create an array of cumulative sum
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Create an array of cumulative sum</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Create an array of numbers in the given range
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Create an array of numbers in the given range</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Empty an array
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Empty an array</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Find the closest number from an array
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Find the closest number from an array</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Find the length of the longest string in an array
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Find the length of the longest string in an array</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Find the maximum item of an array
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Find the maximum item of an array</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Find the minimum item of an array
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Find the minimum item of an array</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Flatten an array
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Flatten an array</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Generate an array of random integers in a given range
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Generate an array of random integers in a given range</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get a random item from an array
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Get a random item from an array</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the average of an array
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Get the average of an array</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the intersection of arrays
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Get the intersection of arrays</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the sum of array of numbers
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Get the sum of array of numbers</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the unique values of an array
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Get the unique values of an array</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get union of arrays
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Get union of arrays</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Merge two arrays
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Merge two arrays</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Partition an array based on a condition
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Partition an array based on a condition</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Remove falsy values from array
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Remove falsy values from array</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Shuffle an array
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Shuffle an array</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Sort an array of numbers
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Sort an array of numbers</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Split an array into chunks
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Split an array into chunks</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Swap the rows and columns of a matrix
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Swap the rows and columns of a matrix</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Unzip an array of arrays
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Unzip an array of arrays</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Zip multiple arrays
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Zip multiple arrays</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    $('#pro_array').html(problems);

})

function allArrayElementsEqual() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "isEqual = <span class='codejs-function'>(arr, value)</span> => arr.every(item => item === value);<br><br>"
    + "Or <br><br>// Ends earlier for false arrays<br>"
    + "<span class='codejs-keyword'>let </span> isEqual = <span class='codejs-function'>(arr, value)</span> =>"
    + "!arr.some(item => item !== value);<br><br>// Examples<br>"
    + "isEqual(['<span class='codejs-value'>foo</span>', '<span class='codejs-value'>foo</span>'],"
    + "'<span class='codejs-value'>foo</span>');     // true<br>"
    + "isEqual(['<span class='codejs-value'>foo</span>', '<span class='codejs-value'>bar</span>'],"
    + "'<span class='codejs-value'>foo</span>');     // false<br>"
    + "isEqual(['<span class='codejs-value'>bar</span>', '<span class='codejs-value'>bar</span>']," 
    + "'<span class='codejs-value'>foo</span>');     // false"
    + "</code>"
    return code
}

function allItemsArrayEqual() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "areEqual = arr => arr.length > 0 && arr.every(item => item === arr[0]);<br><br>"
    + "Or <br><br>"
    + "<span class='codejs-keyword'>let </span>"
    + "areEqual = arr => <span class='codejs-keyword'>new </span> Set(arr).size === 1;<br><br>// Examples<br>"
    + "areEqual([1, 2, 3, 4]); // false<br>"
    + "areEqual(['hello', 'hello', 'hello']); // true<br>";
    + "</code>"
    return code
}

function if_an_arrayContains_A_valueMatchingSomeCriterias() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "contains = <span class='codejs-function'>(arr, criteria)</span> => arr.some(v => criteria(v));"
    + "<br><br>// Examples<br>"
    + "<span class='codejs-function'>contains</span>([10, 20, 30], v => v > 25 ); // true<br>"
    + "<span class='codejs-function'>contains</span>([10, 20, 30], v => v > 100 || v < 15 ); // true<br>"
    + "<span class='codejs-function'>contains</span>([10, 20, 30], v => v > 100 ); // false<br>"
    + "</code>"
    return code;
}

function if_a_arrayIsNotEmpty() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "isNotEmpty = arr => <span class='codejs-other'>Array</span>.<span class='codejs-defMethod'>"
    + "isArray</span>(arr) && <span class='codejs-other'>Object</span>.<span class='codejs-defMethod'>"
    + "keys</span>(arr).length > 0;<br><br>// Examples<br>"
    + "<span class='codejs-function'>isNotEmpty</span>([]); // false<br>"
    + "<span class='codejs-function'>isNotEmpty</span>([1, 2, 3]); // true<br>"
    + "</code>"
    return code;
}