
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    }
}, false);
            
         
function NewTitle() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("MyList").value;
    var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
        alert("You Must Write Something!!");
        } else {
        document.getElementById("List").appendChild(li);
        }
        document.getElementById("Mylist").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

        for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}