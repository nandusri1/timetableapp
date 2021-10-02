let addbtn=document.getElementById('add-btn');
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\nDelete");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
addbtn.addEventListener('click',function(){
    var li=document.createElement('li');
    var input=document.getElementById('task-input').value;
    var t = document.createTextNode(input);
  li.appendChild(t);
  if (input === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myul").appendChild(li);
    alert("Item added successfully");
    
  }
  document.getElementById("task-input").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\nDelete");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
})