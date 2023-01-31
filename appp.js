
let TIME_LIMIT = 30;

function thirty()
{
  console.log("changes are not getting reflected");
  TIME_LIMIT = 7;
  document.querySelector(".limit").style.display = "none";
  document.querySelector(".card").style.display = "block";
  document.querySelector(".test").style.display = "block";
  document.querySelector(".buttons").style.display = "block";
  time = TIME_LIMIT;
}

function sixty()
{
  TIME_LIMIT = 60;
  document.querySelector(".limit").style.display = "none";
  document.querySelector(".card").style.display = "block";
  document.querySelector(".test").style.display = "block";
  document.querySelector(".buttons").style.display = "block";
  time = TIME_LIMIT;
}

let quotes_array = [
"kire bhai kamon achis",
" ha bhai bhalo achi",
" now some english coming up",
" yeah keep going",
" type as hard as you can",
" thats what she said",
" failure is the condiment that gives success its flavor",
" maybe throw in a word like sesquipedalian",
" so you made it this far",
" the only way to do great work is","ki bolbona",
" bhai ekhane pouche geli nice re",
" learning never exhausts the mind",
" thak r likte hobe na"
];

let time = TIME_LIMIT;
let words = 0;
let quoteNo=0;
let j=0;
let wpm=0;
let timer= null;
let flag = 0;
let findj=0;
let errors = 0;
let accuracy = 100;
let charsTyped = 0;
let gameStarted = false;
let correct = 0;
let topspeed = 0;
let done = 0;
let name = '';

let quote_text = document.querySelector(".test");

function intervals()
{
  gameStarted = true;
  clearInterval(timer);
  timer = setInterval(updateTimer,1000);
}

function updateTimer(){
  if(time>=0)
  {
    game(time--);
  }
  else
  {
    finishGame();
  }
}

let textarea = document.getElementById("textarea");

textarea.onkeyup = function(evt) {
    this.scrollTop = this.scrollHeight;
}

function updateQuote() {

  if(flag==0)
  {flag = 1; quoteNo--;}
  if (quoteNo < quotes_array.length - 1)
  	quoteNo++;
  else
  	quoteNo = 0;

  quote_text.textContent = null;
  current_quote = quotes_array[quoteNo];

  // separate each character and make an element
  // out of each of them to individually style them
  current_quote.split('').forEach(char => {
  	const charSpan = document.createElement('span')
  	charSpan.innerText = char
  	quote_text.appendChild(charSpan)
  })

  // roll over to the first quote

}

function processText()
{
  if(mobileUser()==true)
  {
    var typed = textarea.innerText;
    var char = typed[typed.length-1];

    e = $.Event('keydown');
    e.keyCode= char; // enter
    $('textarea').trigger(e);
  }
}

document.addEventListener('keydown',function(){

                     //all this inside a callback

  if(!gameStarted)
  return;

  if(j==quotes_array[quoteNo].length)  // this part changes the line when enter is pressed after a quote is complete .
  {
    j=0;
    updateQuote();
    console.log("quote updated");
  }

  if(!((event.keyCode>=65 && event.keyCode<=90) || (event.keyCode>=97 && event.keyCode<=122)|| (event.key==' ') || (event.key=='.') || (event.key==',') || (event.key==';') || (event.key=="'")))
  return;

  quoteSpanArray = quote_text.querySelectorAll('span');
  findj = 0;
  charsTyped++;

	quoteSpanArray.forEach((char, index) => {
    let typedChar = event.key;


    if(findj++!=j)
    return;

		// character not currently typed
		if (typedChar == null) {
      console.log("Null character typed");
		// correct character
		} else if (typedChar === char.innerText) {
		char.classList.add('green');
		char.classList.remove('grey');

		// incorrect character
		} else {
      if(j==0&&typedChar==' ')
      return;
		char.classList.add('red');
		char.classList.remove('grey');

		}
	});

  if(quotes_array[quoteNo][j]==event.key)
  {
    if(quotes_array[quoteNo][j]==' ')
    {
      words++;
      wpm = words/(TIME_LIMIT-time)*60;
      if(wpm>topspeed && time<TIME_LIMIT-4)
      topspeed=wpm;
    }
    j++;
    correct ++;
  }
  else{
      errors++;
    }

})

function game(time){
  console.log(time);
  document.querySelector(".mycard").innerHTML="<h1>"+time+'s'+"</h1>";
}


function start(){
  console.log("called");
  textarea.disabled=false;
  textarea.select();
  updateQuote();
  intervals();
}

function finishGame(){
  clearInterval(timer);
  //correct = correct;
  wpm = Math.round(words/TIME_LIMIT*60);
  var cpm = Math.round((correct)/TIME_LIMIT*60);
  accuracy = Math.round(correct/charsTyped*100);
  document.querySelector(".mycard").innerHTML="<h1>"+Math.round(wpm)+' wpm'+"</h1>"+"<h1>"+accuracy+' %'+"</h1>"+"<h1>"+cpm+' cpm'+"</h1>";
  console.log("the Game is over");
  console.log(errors);

  console.log("Accuracy was = ",accuracy);
  document.querySelector(".btn").href="index.html"
  document.querySelector(".btn").onclick=""
  if(wpm>10 &&wpm<30)
  {
    var audio = new Audio('css/kichu_bolar_nei.mp3')
  }
  else if (wpm>=30 && wpm<40) {
    var audio = new Audio('css/school-30-40.mp3')
  }
  else if (wpm>=40 && wpm<50) {
    var audio = new Audio('css/thik-ache-40-50.mp3')
  }
  else if (wpm>=50 && wpm<60) {
    var audio = new Audio('css/eitto-chai-50-60.mp3')
  }
  else if (wpm>=60 && wpm<70) {
    var audio = new Audio('css/shera-60-70.mp3')
  }
  else if (wpm>=70 && wpm<80) {
    var audio = new Audio('css/programmer-new.mp3')
  }
  else if (wpm>=80) {
    var audio = new Audio('css/fullspeed80.mp3')
  }
  done = 23;
  audio.play();
  call_ajax();
  console.log("v1.2");
  resetValues();
}

function call_ajax () {
  $.ajax({
    url : "play.php",
    type: "POST",
    data : "namejs="+name+"&wpm="+wpm+"&accuracy="+accuracy+"&topspeed="+topspeed
  });
  // $.ajax({
  //  url : "play.php",
  //  type: "POST",
  //  data : "wpm="+wpm
  //  });
  //   $.ajax({
  //    url : "play.php",
  //    type: "POST",
  //    data : "accuracy="+accuracy
  //    });
  //    $.ajax({
  //     url : "play.php",
  //     type: "POST",
  //     data : "topspeed="+topspeed
  //     });
}

function resetValues(){
  words=0;
  wpm=0;
  quoteNo=0;
  j=0;
  time = TIME_LIMIT;
  flag = 0;
  errors = 0;
  accuracy = 100;
  textarea.value="";
  textarea.disabled = true;
  gameStarted = false;
  correct = 0;
  charsTyped=0;
  topspeed = 0;
}

function work(){
  console.log("v1.2");
  name = document.querySelector(".nameclass").innerText;
  name = name.trim();
  if(name == '')
  {
    document.querySelector(".no_name").hidden = false;
    document.querySelector("#content").style.display = "none";
  }
  else{
    document.querySelector(".writing-area").style.display = "inline-block";
    start();
  }

}




// function varTest() {
//   var x = 1;
//   {
//     var x = 2;  // same variable!
//     console.log(x);  // 2
//   }
//   console.log(x);  // 2
// }
//
// function letTest() {
//   let x = 1;
//   {
//     let x = 2;  // different variable
//     console.log(x);  // 2
//   }
//   console.log(x);  // 1
// }
