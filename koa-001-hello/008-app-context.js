/*
app.context 是从其创建 ctx 的原型。
您可以通过编辑 app.context 为 ctx 添加其他属性。
这对于将 ctx 添加到整个应用程序中使用的属性或方法非常有用，
    这可能会更加有效（不需要中间件）和/或 更简单（更少的 require()），
    而更多地依赖于ctx，这可以被认为是一种反模式。

注意:
    ctx 上的许多属性都是使用 getter ，setter 和 Object.defineProperty() 定义的。
        你只能通过在 app.context 上使用 Object.defineProperty() 来编辑这些属性（不推荐）。
        查阅 https://github.com/koajs/koa/issues/652.
    安装的应用程序目前使用其父级的 ctx 和设置。 因此，安装的应用程序只是一组中间件。
*/