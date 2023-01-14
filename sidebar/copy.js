document.getElementById("copy").addEventListener("click", captureWebsiteData)

function captureWebsiteData() {
  browser.tabs.query({active: true}).then(onCaptured, onError)
}

function onCaptured(tabInfo) {
  srcData = tabInfo[0]
  injector = document.getElementById("transfer").value

  executing = browser.tabs.executeScript(srcData.id, {
    file: "../copy/"+injector+".js"
  })

  executing.then(onExecuted, onError);
}

function onExecuted(result) {
  document.getElementById("paste").disabled = false;
  document.getElementById("message").innerText = JSON.stringify(result[0].summary)
}

function onError(error) {
  document.getElementById("message").innerText = error
}