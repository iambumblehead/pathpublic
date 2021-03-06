pathpublic
==========
**(c)[Bumblehead][0], 2012,2013** [MIT-license](#license)  

### OVERVIEW:

`css/main.css` and `static.mydomain.com/css/main.css` could be public paths. pathpublic will get a file's public path.

For example:

```javascript
console.log(pathpublic.get(
    '/home/bumblehead/app/css/main.css',
    'css/'
)); // css/main.css
  
console.log(pathpublic.get(
    '/home/bumblehead/app/css/main.css',
    './css/'
)); // ./css/main.css
  
console.log(pathpublic.get(
    '/home/bumblehead/app/css/main.css',
    'https://static.mydomain.com/css/'
)); // https://static.mydomain.com/css/main.css 
```
 
'Useful for scripts building/deploying a web application.

It may be used in a browser or a node.js script environment.


[0]: http://www.bumblehead.com                            "bumblehead"

---------------------------------------------------------
#### <a id="install"></a>INSTALL:

pathpublic may be downloaded directly or installed through `npm`.

 * **npm**   

 ```bash
 $ npm install pathpublic
 ```

 * **Direct Download**
 
 ```bash  
 $ git clone https://github.com/iambumblehead/pathpublic.git
 $ cd pathpublic && npm install
 ```

---------------------------------------------------------
#### <a id="test"></a>Test:

 to run tests, use `npm test` from a shell.

 ```bash
 $ npm test
 ```
 
---------------------------------------------------------

#### <a id="license">License:

 ![scrounge](https://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2012 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
