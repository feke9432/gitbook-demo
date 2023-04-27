const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');

const directoryPath2 = path.join(__dirname, '../_book');

// 读取目录下所有 html 文件
fs.readdir(directoryPath2, (err, files) => {
  if (err) {
    console.error('Error reading directory: ', err);
    return;
  }

  // 遍历文件，读取内容并修改
  files.forEach(file => {
    let filePath = path.join(directoryPath2, file, file + '.html');
    if (/\.html/.test(file)) {
      filePath = path.join(directoryPath2, file);
    }
    if (path.extname(filePath) === '.html') {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file: ', filePath, err);
          return;
        }

        // 使用 jsdom 将 HTML 文件转换为 DOM 对象
        const dom = new jsdom.JSDOM(data, {
          includeNodeLocations: true
        });
        // 删除 .book-summary 元素
        const document = dom.window.document;
        let faviconEl = document.querySelector('link[type="image/x-icon"]');

        if(faviconEl) {
          faviconEl.href = faviconEl.href + '?v=' + Date.now();
        }
        document.body.style = 'font-size: 16px;line-height: 1.5;';
        deleteDom('.book-summary');
        deleteDom('.book-header');
        deleteDom('.navigation.navigation-prev');
        deleteDom('.navigation.navigation-next');
        function deleteDom(classStr) {
          const element = document.querySelector(classStr);
          console.log(element, classStr)
          if (element) {
            element.parentNode.removeChild(element);
          }
        }

        let el = document.querySelector('.book-body')

        if (el) {
          el.style = 'left: 0!important;';
        }

        // 将修改后的内容写回到 HTML 文件中
        fs.writeFile(filePath, dom.serialize(), err => {
          if (err) {
            console.error('Error writing file: ', filePath, err);
          } else {
            console.log('File modified: ', filePath);
          }
        });
      });
    }
  });
});