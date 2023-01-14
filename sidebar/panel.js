document.getElementById("transfer").addEventListener("change", enableCopy)

function enableCopy() {
    document.getElementById("copy").disabled = false;
}

select = document.getElementById("transfer"); 
options = browser.storage.local.get("sites")

for(i in options){
    select.add(new Option(options[i].toUpperCase().replace("-", " -> "), options[i]), undefined)
}