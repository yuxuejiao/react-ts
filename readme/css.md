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
