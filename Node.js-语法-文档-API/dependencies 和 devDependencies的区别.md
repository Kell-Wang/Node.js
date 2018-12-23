

--save-dev 是你开发时候依赖的东西，--save 是你发布之后还依赖的东西。

比如，你写 ES6 代码，如果你想编译成 ES5 发布那么 babel 就是devDependencies。
如果你用了 jQuery，由于发布之后还是依赖jQuery，所以是dependencies。

但是在 npm 里面除了二进制的依赖，似乎也不用区分是不是dev。
因为使用npm就是自己编译的意思，而不使用npm直接拿编译后的版本的，这些依赖项也看不到。
