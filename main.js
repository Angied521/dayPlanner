

(function()
{
  // instantiate a moment object
  var NowMoment = moment();
  

  // display value of moment object in #displayMoment div
  var eDisplayMoment = document.getElementById('displayMoment');
  eDisplayMoment.innerHTML = NowMoment;
  
})();

// saving to local storage

if (window.localStorage){
    var txtcontent = document.getElementById('content');

    txtcontent.value = localStorage.getItem('content');

    txtcontent.addEventListener('input', function(){
        localStorage.setItem('content',txtcontent.value);
    }, false);
}

//change colors to grid

function Myfunction () 
{ 
val = document.myform.text_area.value; 
mydoc = document.open(); 
mydoc.write(val); 
mydoc.execCommand("saveAs",true,".html"); //you can change the .txt to your extention
history.go(-1);
}

//change colors to grid