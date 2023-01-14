select = document.getElementById("transfer"); 
options = [
    // add options
]

for(i in options){
    select.add(new Option(options[i].toUpperCase().replace("-", " -> "), options[i]), undefined)
}

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