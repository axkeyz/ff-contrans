var pasteButton = document.getElementById("paste").addEventListener("click", dumpWebsiteData)

function dumpWebsiteData() {
  document.getElementById("message").innerText = "Pasted data"
}