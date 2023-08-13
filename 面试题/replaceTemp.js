/**
 * 
 * @param {string} str 
 * @param {Object} data 
 */
function replaceTemplate(str, data){
    return str.replace(/\${(\w+)}/g, (_, key )=>{
        console.log(key)
        return data[key] || ''
    })
}

console.log(replaceTemplate('Hello, ${name}!  ${name}', { name: 'abc' }));
console.log(replaceTemplate('Welcome, ${name}!', { name: 'Alice' }));
console.log(replaceTemplate('Goodbye, ${name}!', { name: 'Bob' }));

