---
title: "[JS]關於非同步處理機制"
---

![](https://static.coderbridge.com/img/OsmandLN/7b95351b49dd4e129e10eaaba67671e7.png)
(機制流程圖要借別人的來用好像不是那麼方便，反正也不難畫，乾脆自己畫一張好了 XD)

1. 瀏覽器主執行環境開始執行堆疊(Stack)內的程式

2. 全域環境下的程式碼直接被執行

3. 執行時遇到 Web API，常見的如: DOM、AJAX、setTimeout。DOM、AJAX 不會立即被執行，其 callback function 被放進事件佇列(Callback Queue)裡做等待，而 setTimeout、setInterval 等需要計時的 Web API，其計時器開始計時，計時完畢後，callback function 放入事件佇列等待。

4. 與此同時，Event loop 會持續檢查堆疊中是否為空，如果為空，則把事件佇列中的 callback function 拉進堆疊中作執行。

5. 重複步驟 4，直到所有程式被執行完畢。

#### 然後...遇到 Promise 後才發現...原來程式還有分大小?!

Promise 與上述提及的 Web API 如 setTimeout 在處理非同步行為的機制上有所不同，要解釋不同之處，就要提及兩個關鍵名詞: Macrotask 及 Microtask。

Macrotask 以中文直譯就是宏觀的任務，簡單地說，就是在 Event Queue 裡面等著被以非同步方式執行的程式 ; 而 Microtask 通常由 Promise 產生。

相較於 Web API 的 Macrotask 由 Macrotask Queue 管理，Microtask 則會由 Microtask Queue 進行管理。

當一項 Macrotask 被執行完成後，Event loop 會去檢查 Microtask Queue 中是否有 Microtask 要執行，如果有，瀏覽器會優先執行這些 Microtask，直到 Microtask Queue 清空為止。

也就是說，Microtask 的執行是穿插在 Macrotask 的執行之間。

<br/>

以下來看看關於非同步的觀念題，可以先想一下之後再看答案:

```javascript
const first = () =>
  new Promise((resolve, reject) => {
    console.log(3)

    let p = new Promise((resolve, reject) => {
      console.log(7)

      setTimeout(() => {
        console.log(5)
        resolve(6)
      }, 0)

      resolve(1)
    })

    resolve(2)

    p.then((arg) => {
      console.log(arg)
    })
  })

first().then((arg) => {
  console.log(arg)
})

console.log(4)
```

<br>
----我----<br>
<br>
----是----<br>
<br>
----防----<br>
<br>
----雷----<br>
<br>
----區----<br>
<br>

<strong>答案是: 3 &#8594; 7 &#8594; 4 &#8594; 1 &#8594; 2 &#8594; 5 </strong>

分析如下: (原則: 先同步再非同步，非同步的執行: macrotask &#8594; microtask &#8594; macrotask)

1. 程式由上而下執行，先遇到first函式被呼叫，進到內部第一層promise，印出3。
2. 繼續往下看，p在宣告後被呼叫，callback function內由上而下，印出7。
3. 執行全域下的同步任務，印出4。
4. 再來由上而下處理非同步任務部分，p裡面的resolve(1)內的1會被p.then的.then callback接住，並印出1。
5. first函式中resolve(2)內的2，會被first().then的.then callback接住，並印出2。
6. 執行setTimeout這個macrotask內的程式碼，印出5。
7. setTimeout內的resolve(6)，由於沒有.then callback接住，也就無法在接住後進一步印出，故不會在console中看到。

<hr>

參考資料:

1. [鐵人賽：使用 Promise 處理非同步| 卡斯伯 Blog - 前端，沒有極限](https://www.casper.tw/javascript/2017/12/29/javascript-proimse/)

2. https://medium.com/itsems-frontend/javascript-event-loop-event-queue-call-stack-74a02fed5625

3. https://iter01.com/1681.html

4. JavaScript 概念三明治 (蔡木景 著)

5. https://123davidbill.medium.com/前端面試必考題-promise-a5f7582be3e0

6. https://pjchender.dev/javascript/js-promise/
