document.getElementById("copy").addEventListener("click", captureWebsiteData)

function captureWebsiteData() {
  browser.tabs.query({active: true}).then(onCaptured, onError)
}

function onCaptured(tabInfo) {
  srcData = tabInfo[0]
  injector = uploaded[copyIndex]

  executing = browser.tabs.executeScript(srcData.id, {
    code: injector
  })

  executing.then(onExecuted, onError);
}

function onExecuted(result) {
  document.getElementById("paste").disabled = false;
  document.getElementById("message").innerText = "Result: " + JSON.stringify(result[0])
}

function onError(error) {
  document.getElementById("message").innerText = error + "\n\n" + injector
}