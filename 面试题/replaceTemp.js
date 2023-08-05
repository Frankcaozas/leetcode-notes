/**
 * 
 * @param {string} str 
 * @param {Object} data 
 */
function replaceTemplate(str, data){
    console.log(str)
    return str.replace(/\${(\w+)}/, (word, key) =>{
        return data[key] ? data[key] : ''
    })
}   

console.log(replaceTemplate('Hello, ${name}!', { name: 'John' }));
console.log(replaceTemplate('Welcome, ${name}!', { name: 'Alice' }));
console.log(replaceTemplate('Goodbye, ${name}!', { name: 'Bob' }));

