Html Webpack Plugin:
<pre>
  TypeError: Cannot read property 'title' of undefined
  
  - index.html:17225 
    /home/nadapapa/dev/remarker/ng2-admin/index.html:17225:33
  
  - index.html:17242 module.exports
    /home/nadapapa/dev/remarker/ng2-admin/index.html:17242:3
  
  - index.js:265 
    [remarker]/[html-webpack-plugin]/index.js:265:16
  
  - util.js:16 tryCatcher
    [remarker]/[html-webpack-plugin]/[bluebird]/js/release/util.js:16:23
  
  - promise.js:510 Promise._settlePromiseFromHandler
    [remarker]/[html-webpack-plugin]/[bluebird]/js/release/promise.js:510:31
  
  - promise.js:567 Promise._settlePromise
    [remarker]/[html-webpack-plugin]/[bluebird]/js/release/promise.js:567:18
  
  - promise.js:604 Promise._settlePromiseCtx
    [remarker]/[html-webpack-plugin]/[bluebird]/js/release/promise.js:604:10
  
  - async.js:138 Async._drainQueue
    [remarker]/[html-webpack-plugin]/[bluebird]/js/release/async.js:138:12
  
  - async.js:143 Async._drainQueues
    [remarker]/[html-webpack-plugin]/[bluebird]/js/release/async.js:143:10
  
  - async.js:17 Immediate.Async.drainQueues
    [remarker]/[html-webpack-plugin]/[bluebird]/js/release/async.js:17:14
  
</pre>