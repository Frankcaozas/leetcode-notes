function htmlParser(html) {
  let currentPos = 0;
  let result = [];
  let stack = [];

  function parseTag() {
    const tagStart = html.indexOf('<', currentPos);
    if (tagStart === -1) return;

    const tagEnd = html.indexOf('>', tagStart);
    if (tagEnd === -1) return;

    const tag = html.substring(tagStart + 1, tagEnd);
    const isClosingTag = tag.startsWith('/');

    if (!isClosingTag) {
      const tagParts = tag.split(' ');
      const openingTagName = tagParts[0];
      const attributes = {};

      for (let i = 1; i < tagParts.length; i++) {
        const attr = tagParts[i].split('=');
        const attrName = attr[0];
        const attrValue = attr[1].replace(/['"]/g, '');
        attributes[attrName] = attrValue;
      }

      const node = { type: openingTagName, attributes, children: [] };

      if (stack.length > 0) {
        const parent = stack[stack.length - 1];
        parent.children.push(node);
      } else {
        result.push(node);
      }

      if (!tag.endsWith('/')) {
        stack.push(node);
      }
    } else {
      stack.pop();
    }

    currentPos = tagEnd + 1;
    parseTag();
  }

  parseTag();

  return result;
}

const template = `
<div id="app">
  <h1>Hello, {{ name }}!</h1>
  <p>Welcome to our website.</p>
</div>
`;

const ast = htmlParser(template);
console.log(JSON.stringify(ast, null, 2));