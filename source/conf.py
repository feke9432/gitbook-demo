# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information
import sphinx_rtd_theme
html_theme = "sphinx_rtd_theme"
html_theme_path = [sphinx_rtd_theme.get_html_theme_path()]
# 主题配置可查看下面链接
# https://sphinx-rtd-theme.readthedocs.io/en/stable/configuring.html
html_theme_options = {
  'navigation_depth': 8,
  'collapse_navigation': False
}
# html_style='css/my_theme.css'

project = 'Marketin 帮助文档'
copyright = '2023, Marketin'
author = 'Marketin'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
     'recommonmark',
     'sphinx_markdown_tables'
 ]

templates_path = ['_templates']
exclude_patterns = []

language = 'zh'

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output


html_static_path = ['_static']
html_css_files = [
    'css/my_themes.css', # 添加自定义样式
]
html_js_files = [
  'lib/jquery-3.6.4.min.js'
]
html_favicon = '_static/images/favicon.ico'

html_show_sourcelink = False # 去掉sourcelink文字
html_show_sphinx = False # 去掉底部power by

html_logo = '_static/images/logo.svg' # 页面logo