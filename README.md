## fis3-parser-html-plugin

	最初的想法，要使fis3能够解析ejs语法，根据不同的环境输出到页面不同的内容，
	实现同webpack-html-plugin同样的效果

### 1. ejs语法
```html
<% if(metadata.env!='prod'){ %>
<script src="https://cdn.bootcss.com/socket.io/2.0.4/socket.io.js"></script>
<script type="text/javascript">
    var socket = io();
    socket.on('reload', function() {
        window.location.reload();
    })
</script>
<% } %>
```

### 2. fis3配置使用, env是自己配置的参数
```js
fis.media('dev').match('*', {

}).match('*.{js,css,png}', {
    useHash: true,
}).match('/html/(*.html)', {
    release: './$1',
    parser: fis.plugin('html-plugin', {
        env: env
    })
});
```
### 3. Install
```bash
$ npm install fis3-parser-html-plugin -D
```

建议全局安装
