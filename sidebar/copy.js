var result

document.getElementById("copy").addEventListener("click", function (e) {captureWebsiteData(copyIndex)})
document.getElementById("paste").addEventListener("click", function (e) {captureWebsiteData(pasteIndex)})

function captureWebsiteData(index) {
  browser.tabs.query({active: true}).then(function (e) {onCaptured(e, index)}, onError)
}

function onCaptured(tabInfo, index) {
  srcData = tabInfo[0]
  injector = uploaded[index]

  executing = browser.tabs.executeScript(srcData.id, {
    code: injector
  })

  executing.then(onExecuted, onError);
}

function onExecuted(result) {
  if (document.getElementById("paste").disabled){
    document.getElementById("paste").disabled = false;
  }

  try {
    document.getElementById("message").innerText = result[0]["message"]
  } catch(error) {
    onError(error)
  }
}

function onError(error) {
  document.getElementById("message").innerText = error
}