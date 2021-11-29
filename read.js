function list(){
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function() {
    if(this.readyState==4&&this.status==200)
    {
        var response=JSON.parse(this.responseText);
        var out="";  
        for(i=0;i<response.length;i++){         
                out+=`<br><input type=checkbox ${response[i].completed? "checked disabled='true'":""}>${response[i].title}</input><br>`;
                
                document.getElementById("demo").innerHTML=out;         
        }

    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}
    
var d=document.getElementById("demo");
d.style.backgroundColor="aquamarine";
d.style.width="50%";



var demo = document.getElementById("demo");
demo.addEventListener('change', function() {
setTimeout(()=>{
  let checkbox = document.querySelectorAll ('input[type="checkbox"]:checked');
  if (checkbox.length == 95)
  alert("Congrats. 5 Tasks have been Successfully Completed");
  })
});



 



