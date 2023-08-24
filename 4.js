let arr =
  "[{ pid: null, id: '1', name: '杭州市' },{ pid: '1', id: '1-1', name: '滨江区' },{ pid: '1', id: '1-2', name: '萧山区' },]"

arr = arr.substring(1, arr.length - 1).split('},')
arr = arr.slice(0, arr.length - 1).map(
  (v) => (v + '}').replace(/([a-z]+)/g,
  (all, p) => {
    return '"' + p + '"'
  }).replace(/'/g, '"')
)
arr = arr.map((v) => JSON.parse(v, parse))

function parse(k, v) {
  if (v === 'null') return null
  return v
}

const buildTree= (root) => {

  const {pid, id, name} = root
  const node = {pid: pid, id: id, name, children: []}
  for(let i=0; i<arr.length; i++){
      const n = arr[i]
      if(n.pid === id){
          // console.log(n)
          node.children.push(buildTree(n))
      }
  }

  return node
}
let root 
for(const n of arr){
  if(!n.pid ) root = n
}
const res =  buildTree(root)
console.log(res)
