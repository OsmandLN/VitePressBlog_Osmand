---
title: '[JS]關於非同步處理機制'
---


![](https://static.coderbridge.com/img/OsmandLN/7b95351b49dd4e129e10eaaba67671e7.png)
(機制流程圖要借別人的來用好像不是那麼方便，反正也不難畫，乾脆自己畫一張好了XD)

1. 瀏覽器主執行環境開始執行堆疊(Stack)內的程式  

2. 全域環境下的程式碼直接被執行 

3. 執行時遇到Web API，常見的如: DOM、AJAX、setTimeout。DOM、AJAX不會立即被執行，其callback function被放進事件佇列(Callback Queue)裡做等待，而setTimeout、setInterval等需要計時的Web API，其計時器開始計時，計時完畢後，callback function放入事件佇列等待。

4. 與此同時，Event loop會持續檢查堆疊中是否為空，如果為空，則把事件佇列中的callback function拉進堆疊中作執行。

5. 重複步驟4，直到所有程式被執行完畢。

####  然後...遇到Promise後才發現...原來程式還有分大小?!

Promise與上述提及的Web API如setTimeout在處理非同步行為的機制上有所不同，要解釋不同之處，就要提及兩個關鍵名詞: Macrotask及Microtask。

Macrotask以中文直譯就是宏觀的任務，簡單地說，就是在Event Queue裡面等著被以非同步方式執行的程式 ; 而Microtask通常由Promise產生。

相較於Web API的Macrotask由Macrotask Queue管理，Microtask則會由Microtask Queue進行管理。
  
  
當一項Macrotask被執行完成後，Event loop會去檢查Microtask Queue中是否有Microtask要執行，如果有，瀏覽器會優先執行這些Microtask，直到Microtask Queue清空為止。  

也就是說，Microtask的執行是穿插在Macrotask的執行之間。

-----

參考資料:

1. [鐵人賽：使用Promise 處理非同步| 卡斯伯Blog - 前端，沒有極限](https://www.casper.tw/javascript/2017/12/29/javascript-proimse/)

2. https://medium.com/itsems-frontend/javascript-event-loop-event-queue-call-stack-74a02fed5625

3. https://iter01.com/1681.html

4. JavaScript 概念三明治 (蔡木景 著)



