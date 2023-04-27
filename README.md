# ReadTheDoc 项目

参考资料：  
> sphinx官网[https://docs.readthedocs.io/en/stable/tutorial/]  
>
> 入门教程 [https://zhuanlan.zhihu.com/p/264647009]

## 安装过程

1. 安装 python

2. 安装 Sphinx =>  pip3 install sphinx

2.1 安装 Sphinx 表 => pip3 install sphinx-markdown-tables

3. 到根目录运行新建命令 =>  sphinx-quickstart

4. 添加 md 文件支持：

  4.1 安装 recommonmark => pipe3 install recommonmark

  4.2 配置文件conf.py中修改
``` 
extensions = ['recommonmark']
```

5. 使用主题：sphinx_rtd_theme
  5.1 安装 => pipe3 install 使用主题：sphinx_rtd_theme
  5.2 配置文件conf.py中修改

```
import sphinx_rtd_theme
html_theme = "sphinx_rtd_theme"
html_theme_path = [sphinx_rtd_theme.get_html_theme_path()]
```

5. 执行测试命令：make html

查看build/html文件夹内容

## 项目优化

### 添加项目静态资源目录 _static 

conf.py 文件中添加：

```python
html_static_path = ['_static']
```

### 添加自定义样式修改文件：my_themes.css

目录： _static/css/my_themes.css
conf.py 文件中添加：
```python
html_css_files = [
    'css/my_themes.css', # 添加自定义样式
]
```

### 修改主题（sphinx_rtd_theme）样式 

conf.py 文件中`html_theme_path = [sphinx_rtd_theme.get_html_theme_path()]`可找到主题的配置文件

需要修改的文件复制到本地目录`_templates`中，可覆盖主题的对应部分

现有修改只是在标题，和面包屑导航的开头添加 marketin logo