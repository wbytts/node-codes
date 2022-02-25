/*
设置签名的 Cookie 密钥。
这些被传递给 KeyGrip，但是你也可以传递你自己的 KeyGrip 实例。

例如，以下是可以接受的：
app.keys = ['im a newer secret', 'i like turtle'];
app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');

这些密钥可以倒换，并在使用 { signed: true } 参数签名 Cookie 时使用。
ctx.cookies.set('name', 'tobi', { signed: true });
*/