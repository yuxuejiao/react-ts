Sass：CSS预处理器

CSS预处理器：将你根据它的规则写出来的格式转换成css

Sass不支持模块化，会引起各文件同名变量之间的冲突

为了解决命名冲突问题，有两种解决方案： CSS-in-JS、CSS Modules
CSS Modules的解决原理：

自定义的类：
.article{
    font-size:  16px;
}

- 1、将你定义的css类，根据自己的规则生成新的类
.aaa{
    font-size: 16px;
}

- 2、将自定义的类和转换后的类进行映射，生成一个json对象
{
    article: aaa
}

- 3、最后调用时，是读取生成的json对象，并且使用它，而不是自定义的类
  styles.article

引入PostCSS --- 插件系统(a tool for transforming css with JS plugins)

安装postcss、postcss-modules、typed-css-modules(将.pcss文件转换为.pcss.d.ts文件，从而可以直接引用)

- 1、在webpack.config.dev.js和webpack.config.prod.js中配置
    新增一种rule为pcss，并且设置cssloader的options为: {
                                                  modules: true,
                                                  importLoaders: 2,
                                                  localIdentName: "[name]__[local]___[hash:base64:5]",
                                              }
- 2、在package.json的scripts增加 
    "tcm": "tcm -p ./src/**/*.pcss && tcm -p ./src/**/*.pcss -w"
                                                                                                                                      

项目中使用到的插件

- 1、postcss-flexbugs-fixes （该插件脚手架自带）
    一种用于修复flexbug的bug的插件。
- 2、precss 
    一个允许你在代码中使用类似Sass标记的插件
- 3、postcss-cssnext 
    一种可以让你使用CSS最新特性的插件。它通过将最新的CSS特性转变为现阶段浏览器所兼容的特性，这样你不用再等待浏览器对某一特定新特性的支持。
    cssnext中包含了autoprefixer的使用，为CSS 中的属性添加浏览器特定的前缀
    - 1、使用 Can I Use 网站提供的数据来确定所要添加的不同浏览器的前缀
    - 2、自定义属性和变量
    - 3、自定义选择器
    - 4、样式规则嵌套
- 4、postcss-plugin-px2rem 
    将px转为rem 
    若是想让px不被转换成rem，则使用大写的PX。如设置rem的基准值 html的font-size则用的就是大写的PX。
在项目中引入以上插件： 
- 1、新增postcss.config.js文件 引入各种以上插件
- 2、在webpack.config.dev.js 和 webpack.config.prod.js中配置
    在css和pcss rule里面的 { loader: require.resolve('postcss-loader'),options: postCssConfig}
    options的值为postcss.config.js输出的值
    
    

