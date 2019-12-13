(function () {
  // instantiate a moment object
  var NowMoment = moment();

  var loadInputValues = function () {
    var contentVal = localStorage.getItem('content')
    document.querySelector('#content').value = contentVal

  }

  // display value of moment object in #displayMoment div
  var eDisplayMoment = document.getElementById('displayMoment');
  eDisplayMoment.innerHTML = NowMoment;
  loadInputValues()
})();


// saving to local storage


function myFunction(targetElementId) {
  console.log(targetElementId)
  var text = document.querySelector(`#${targetElementId}`).value
  localStorage.setItem(`${targetElementId}`, text);
  retrieve()
}
//retrieve saved local storage content
//i would finish entering for all content id but this is not saving when refreshed

function retrieve() {



  var saved = localStorage.getItem(`${targetElementId}`, text);
if (saved) {
  text.innerHTML = saved
}

  //var text = localStorage.getItem("content1").value =saved;


  // document.getElementById("content1").innerHTML = localStorage.targetElementId, text;

  localStorage.getItem("content2");
  console.log(localStorage.getItem("content2"));
  document.getElementById("content2").innerHTML = localStorage.getItem("text");

  
}

retrieve()


//change colors to grid


// id time to equal now moment



