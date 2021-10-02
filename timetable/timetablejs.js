let btn=document.getElementById('btn');
var myNodelist=document.getElementsByTagName('li');
let savebtn=document.getElementById('submit');

var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var span2=document.createElement("span2");
  var time=document.getElementById('time').value;
  var txt1 = document.createTextNode("\nDelete");
  var txt = document.createTextNode(time);
  span.className = "close";
  span2.className="timeinput";
  span2.appendChild(txt);
  span.appendChild(txt1);
  myNodelist[i].appendChild(span);
  myNodelist[i].appendChild(span2);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


btn.addEventListener('click',function(){
    var li=document.createElement('li');
    var input=document.getElementById('schedule').value;
    var t = document.createTextNode(input);
    var local=localStorage.getItem(t);
  li.appendChild(t);
  if (input === '') {
    alert("You must write something!");
  } else {
    document.getElementById("inputs-ul").appendChild(li);
    alert("saved successfully");
    
  }
  document.getElementById("schedule").value = "";


  var span = document.createElement("span");
  var span2=document.createElement("span2");
  var time=document.getElementById('time').value;
  var txt1 = document.createTextNode("\nDelete");
  var txt = document.createTextNode(time);
  span.className = "close";
  span2.className="timeinput";
  span2.appendChild( txt);
  span.appendChild(txt1);
  li.appendChild(span);
  li.appendChild(span2);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

    })
    //let addBtn = document.getElementById("addBtn");
/*savebtn.addEventListener("click", function(e) {
  //let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
//   console.log(notesObj);
  showNotes();
});*/