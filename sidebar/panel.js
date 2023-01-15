// Add reactivity to tab toggler
tabButton = document.getElementById("change-tab")
tabButton.addEventListener("click", changeTab)
function changeTab() {
    tabs = document.getElementsByClassName("tab")

    for(i=0; i<tabs.length; i++) {
        tabs[i].style.display == "none" ?
        tabs[i].style.display = "block" :
        tabs[i].style.display = "none"
    }

    tabButton.innerHTML == "Upload JS templates" ?
    tabButton.innerHTML = "Transfer data" :
    tabButton.innerHTML = "Upload JS templates"
}

// Add drag & drop upload
var copyjs = document.getElementById('copy-js');
var pastejs = document.getElementById('paste-js');
var uploaded = []
const copyIndex = 0
const pasteIndex = 1

function onFile(upload, index) {
    var me = this,
    file = upload.files[0],
    name = file.name.replace(/\.[^/.]+$/, '');

    if (file.type === 'application/x-javascript') {
        if (file.size < (3000 * 1024)) {
            upload.parentNode.className = 'area uploading';
            
            var reader = new FileReader();

            reader.onload = (function(f) {
                return function(e) {
                    uploaded[index] = e.target.result
                };
            })(file)

            reader.readAsText(file);
        } else {
            window.alert('File size is too large, please ensure you are uploading a file of less than 3MB');
        }
    } else {
        window.alert('Only application/x-javascript (.js) files are accepted');
    }
}

copyjs.addEventListener('dragenter', function (e) {upload.parentNode.className = 'area dragging'})
copyjs.addEventListener('dragleave', function (e) {upload.parentNode.className = 'area'})
copyjs.addEventListener('dragdrop', function (e) {onFile(copyjs, copyIndex)})
copyjs.addEventListener('change', function (e) {onFile(copyjs, copyIndex)})

pastejs.addEventListener('dragenter', function (e) {upload.parentNode.className = 'area dragging'})
pastejs.addEventListener('dragleave', function (e) {upload.parentNode.className = 'area'})
pastejs.addEventListener('dragdrop', function (e) {onFile(pastejs, pasteIndex)})
pastejs.addEventListener('change', function (e) {onFile(pastejs, pasteIndex)})