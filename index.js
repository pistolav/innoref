function myFunction(){
    console.log("Button pressed")
}

function clicked(chapter){
    var elem = document.getElementById("chapter__" +  chapter);
    elem.classList.toggle("hidden")

}

function displayAll() {
    var elems = document.querySelectorAll(".references");
    var index = 0, length = elems.length;
    for (; index < length; index++) {
        elems[index].classList.remove("hidden")
    }

    var button = document.getElementById("toggleDisplay")
    button.setAttribute("onClick", "hideAll()")
    button.innerText = "Skjul alle";

}

    function hideAll(){
        var elems = document.querySelectorAll(".references");
        var index = 0, length = elems.length;
        for(; index < length; index++){
            elems[index].classList.add("hidden")
        }
        var button = document.getElementById("toggleDisplay")
        button.setAttribute("onClick", "displayAll()")
        button.innerText = "Utvid alle"
    }