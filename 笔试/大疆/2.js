// 题目描述：
// 输入 url 字符串，依次输出 protocol、hostname、port、pathname、search 字段和对应的值，其中 search 为字段排序后再输出

// 输入：

// https://enterprise.dji.com/cn/flighthub-2

// 输出：

// protocol=https:

// hostname=enterprise.dji.com

// port=

// pathname=/cn/flighthub-2

// 要求： 不能直接使用 sort、URL 对象等封装函数

// 输入描述
// url 字符串

// 输出描述
// 依次打印值

// 样例输入
// http://localhost:8080/hello-world?sponsor=dji&group=enterprise
// 样例输出
// protocol=http:
// hostname=localhost
// port=8080
// pathname=/hello-world
// search:group=enterprise
// search:sponsor=dji

let line

function execUrl(str) {
  // @TODO: 实现逻辑
  const protocol = url.split('://')[0]
  console.log(`protocol=${protocol}`)
  // 获取 hostname
  const hostname = url.split('://')[1].split('/')[0]
  console.log(`hostname=${hostname}`)

  // 获取 port
  let port = ''
  if (hostname.includes(':')) {
    port = hostname.split(':')[1]
    hostname = hostname.split(':')[0]
  }
  console.log(`port=${port}`)

  // 获取 pathname
  const pathname = url.split(hostname)[1]
  console.log(`pathname=${pathname}`)

  // 获取 search 字段和对应的值
  const search = url.split('?')[1]
  const searchFields = search.split('&')
  searchFields.sort()
  for (const field of searchFields) {
    console.log(`search:${field}`)
  }
}

while ((line = read_line()) != '') {
  execUrl(line)
}
