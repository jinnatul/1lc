$(function() {

    let problems = "<ul class='collapsible expandable'>"

    // Check if a value is a plain object
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if a value is a plain object</h6></div>"
    + "<div class='collapsible-body codejs'>"+ if_A_ValueIs_A_PlainObject() +"</div></li>"

    // Check if a value is an object
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if a value is an object</h6></div>"
    + "<div class='collapsible-body codejs'>"+ if_A_ValueIsAnObject() +"</div></li>"

    // Check if an object is empty
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if an object is empty</h6></div>"
    + "<div class='collapsible-body codejs'>"+ if_an_ObjectIsEmpty() +"</div></li>"

    // Check if multiple objects are equal
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if multiple objects are equal</h6></div>"
    + "<div class='collapsible-body codejs'>"+ ifMultipleObjectsAreEqual() +"</div></li>"

    // Create an empty map that does not have properties
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Create an empty map that does not have properties</h6></div>"
    + "<div class='collapsible-body codejs'>"+ emptyMapThatDoesNotHaveProperties() +"</div></li>"

    // Create an object from the pairs of key and value
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Create an object from the pairs of key and value</h6></div>"
    + "<div class='collapsible-body codejs'>"+ objectFromThePairsOfKeyAndValue() +"</div></li>"

    // Get the value at given path of an object
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Get the value at given path of an object</h6></div>"
    + "<div class='collapsible-body codejs'>"+ getTheValueAtGivenPathOfAnObject() +"</div></li>"

    // Invert keys and values of an object
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Invert keys and values of an object</h6></div>"
    + "<div class='collapsible-body codejs'>"+ invertKeysAndValuesOfAnObject() +"</div></li>"

    // Omit a subset of properties from an object
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Omit a subset of properties from an object</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Pick a subset of properties of an object
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Pick a subset of properties of an object</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Shallow copy an object
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Shallow copy an object</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    + "</ul>"
    
    $('#pro_object').html(problems);

})

function if_A_ValueIs_A_PlainObject() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "isPlainObject = v => (!!v && typeof v === '<span class='codejs-keyword'>object</span>' "
    + "&& (v.<span class='codejs-other'>__proto__</span> === null || v.<span class='codejs-other'>"
    + "__proto__</span> === <span class='codejs-keyword'>Object</span>.<span class='codejs-defMethod'>"
    + "prototype</span>));<br><br>// Examples<br>"
    + "<span class='codejs-function'>isPlainObject</span>(null);                    // false<br>"
    + "<span class='codejs-function'>isPlainObject</span>('hello world');           // false<br>"
    + "<span class='codejs-function'>isPlainObject</span>([]);                      // false<br>"
    + "<span class='codejs-function'>isPlainObject</span>(Object.create(null));     // false<br>"
    + "<span class='codejs-function'>isPlainObject</span>(function() {});           // false<br>"
    + "<span class='codejs-function'>isPlainObject</span>({});                      // true<br>"
    + "<span class='codejs-function'>isPlainObject</span>({ a: '1', b: '2' });      // true<br>"
    + "</code>"
    return code;
}

function if_A_ValueIsAnObject() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "isObject = v => (v !== <span class='codejs-other'>null</span> && typeof v === "
    + "'<span class='codejs-keyword'>object</span>');<br><br>// Examples<br>"
    + "<span class='codejs-function'>isObject</span>(null);             // false<br>"
    + "<span class='codejs-function'>isObject</span>('hello world');    // false<br>"
    + "<span class='codejs-function'>isObject</span>({});               // true>br>"
    + "<span class='codejs-function'>isObject</span>([]);               // true <br>"
    + "</code>"
    return code;
}

function if_an_ObjectIsEmpty() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "isEmpty = obj => Reflect.<span class='codejs-defMethod'>ownKeys(obj)</span>.length === 0"
    + " && obj.constructor === <span class='codejs-keyword'>Object</span>;<br><br>// Or for "
    + "enumerable property names only<br><span class='codejs-keyword'>let </span>"
    + "isEmpty = obj => <span class='codejs-other'>JSON</span>.stringify(obj) === '<span class='codejs-keyword'>{}</span>';"
    + "</code>"
    return code;
}

function ifMultipleObjectsAreEqual() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "isEqual = (...objects) => objects.<span class='codejs-defMethod'>every</span>(obj => <span "
    + "class='codejs-other'>JSON</span>.<span class='codejs-defMethod'>stringify</span>(obj) === <span "
    + "class='codejs-other'>JSON</span>.<span class='codejs-defMethod'>stringify</span>(objects[0]));"
    + "<br><br>// Examples<br>"
    + "<span class='codejs-function'>isEqual</span>({ foo: 'bar' }, { foo: 'bar' }); // true<br>"
    + "<span class='codejs-function'>isEqual</span>({ foo: 'bar' }, { bar: 'foo' }); // false<br>"
    + "</code>"
    return code;
}

function emptyMapThatDoesNotHaveProperties() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "map = <span class='codejs-keyword'>Object</span>.<span class='codejs-defMethod'>create</span>(null);"
    + "<br><br>// OR<br><span class='codejs-keyword'>let </span> map = {};"
    + "</code>"
    return code;
}

function objectFromThePairsOfKeyAndValue() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "toObj = arr => <span class='codejs-other'>Object</span>.<span class='codejs-defMethod'>fromEntries"
    + "</span>(arr)<br><br>//Or<br><span class='codejs-keyword'>let </span>"
    + "toObj = arr => arr.<span class='codejs-defMethod'>reduce</span>((a, c) => ((a[c[0]] = c[1]), a), {});"
    + "<br><br>// Example<br><span class='codejs-function'>toObj</span>([['a', 1], ['b', 2], ['c', 3]]); "
    + "// <span class='codejs-other'>{ a: 1, b: 2, c: 3 }</span>"
    + "</code>"
    return code;
}

function getTheValueAtGivenPathOfAnObject() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "getValue = <span class='codejs-function'>(path, obj)</span> => path.<span class='codejs-defMethod'>"
    + "split</span>('.').<span class='codejs-defMethod'>reduce</span>((acc, c) => acc && acc[c], obj);"
    + "<br><br>// Example<br>"
    + "<span class='codejs-function'>getValue</span>('a.b', { a: { b: 'Hello World' } }); // 'Hello World';"
    + "</code>"
    return code;
}

function invertKeysAndValuesOfAnObject() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "invert = obj => <span class='codejs-other'>Object</span>.<span class='codejs-defMethod'>keys</span>"
    + "(obj).<span class='codejs-defMethod'>reduce</span><((res, k) => <span class='codejs-other'>Object"
    + "</span>.<span class='codejs-defMethod'>assign</span>(res, {[obj[k]]: k}), {});<br><br>// Example<br>"
    + "<span class='codejs-function'>invert</span>({ a: '1', b: '2', c: '3' }); // { 1: 'a', 2: 'b', 3: 'c' }"
    + "</code>"
    return code;
}