let age=24
let name="Prateek"

let Password;

let comm = null;

console.log(typeof(Password));

console.log(typeof(comm)); // Object 

/*

    **Data Type: what kind of value a variable holds (number, text, true/false, etc.). It also defines what operations can be done on that value.

    **there are 2 type of data type present in js like primitive and non primitive 

    **primitive data types are number, string, bigInt, boolean, undefine, null, symbol.

    **non prmitive datatypes are Object, arrays, functions 

    IMORTANT INTERVIEW QUESTION

    **typeof null returns "object" due to a historical bug in JavaScript’s implementation,
    and it is preserved for backward compatibility.

    When JavaScript was first created (very early days):

    Values were stored using type tags in memory
    Objects had a tag like 0x00
    null was accidentally also represented as 0x00

    So JavaScript incorrectly interpreted:

    null → as an object type

*/


