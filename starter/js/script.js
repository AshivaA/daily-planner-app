



//  set day and date:
// ======================
var today = dayjs();
$("#currentDay").text(today.format("dddd,D MMMM YYYY"));


//  Time blocks:
// ======================
function makeBlock() {

    // DayTime to make Tables loop
    // =========================
    var DayTime= ["09 AM","10 AM","11 AM","12 PM","01 PM","02 PM","03 PM","04 PM","05 PM"];

    // for coloring: time values corresponding to time table to compare with real time 
    // =========================
    var DayTimeReal= [9,10,11,12,13,14,15,16,17];

    // used for concat to note for specifying different classes for textarea
    // =========================
    var DaytimeString = ["09","10","11","12","13","14","15","16","17"];

    // make Tables parts(Time,Textarea,save button) in a loop
    // ==========================
    for (var index = 0; index < DayTime.length; index++) {
        var TimeItems = DayTime[index];

        var Div = $(".container");

        var Table = $("<table>");
        Div.append(Table);


        var TableBody = $("<tbody>");
        Table.append(TableBody);

        var TableContent = $("<tr>");
        TableBody.append(TableContent);

        var TIME = $("<td>");
        TableContent.append(TIME);
        TIME.attr("class","hour");
        TIME.text(TimeItems);

        var TextArea = $("<textarea>");
        TableContent.append(TextArea);
        TextArea.css("width","1000px");
       

        var SAVE = $("<td>");
        TableContent.append(SAVE);
        
        var Button = $("<button>");
        SAVE.append(Button);
        Button.text ("SAVE");
        Button.css("padding","16px");
        Button.attr("id","Btn");
       Button.attr("onclick","SaveNote");

    // concat buttons with DaytimeString to have separate button
    // =========================
        var saveBtn= "Btn".concat(DaytimeString[index]);
        Button.attr("class",saveBtn);

         
    // concat note with DaytimeString  to have separate textarea
    // =========================
        var classNamePhrase = "note".concat(DaytimeString[index]);
        TextArea.attr("class",classNamePhrase);
        
        
    // call changColor function in makeBlock function
    // =========================   
        var NewCurrentTime = DayTimeReal[index];
        ChangeColor(TextArea,NewCurrentTime);
   
}
}

makeBlock();


// function changing color of textarea
// ========================
function ChangeColor(TextArea,NewCurrentTime) {

   // set time matching date and time with table time
   // ========================= 
    var currentTime = dayjs().unix();
    var unix= dayjs.unix(currentTime).format("HH");
    var realTime = parseFloat(unix);

   // if condition part, to change the textarea color according to computer time
   // ========================= 

    if (NewCurrentTime==realTime) {
        
        TextArea.addClass("present");
        
    }else if (NewCurrentTime > realTime){ 
               
        TextArea.addClass("future");
              
    }else{
            
        TextArea.addClass("past"); 
    } 

}


// local storage notes
// =========================
  
// localStorage.clear()
// function to save textarea note 09am==========
  $(".Btn09").on("click",save09);
  function save09(event) {
      event.preventDefault();
  
      var storeNote09 = $(".note09").val();
      localStorage.setItem("Note for 09am:", storeNote09);
    }
    
    var storage09 = localStorage.getItem("Note for 09am:");
    if (storage09) {
      $(".note09").val(storage09);
    }


// function to save textarea note 10am==========
$(".Btn10").on("click",save10);
function save10(event) {
    event.preventDefault();

    var storeNote10 = $(".note10").val();
    localStorage.setItem("Note for 10am:", storeNote10);
  }
  
  var storage10 = localStorage.getItem("Note for 10am:");
  if (storage10) {
    $(".note10").val(storage10);
  }


  //function to save textarea note 11am==========
$(".Btn11").on("click",save11);
function save11(event) {
    event.preventDefault();

    var storeNote11 = $(".note11").val();
    localStorage.setItem("Note for 11am:", storeNote11);
  }
  
  var storage11 = localStorage.getItem("Note for 11am:");
  if (storage11) {
    $(".note11").val(storage11);
  }


  //function to save textarea note 12pm==========
$(".Btn12").on("click",save12);
function save12(event) {
    event.preventDefault();

    var storeNote12 = $(".note12").val();
    localStorage.setItem("Note for 12pm:", storeNote12);
  }
  
  var storage12 = localStorage.getItem("Note for 12pm:");
  if (storage12) {
    $(".note12").val(storage12);
  }


   //function to save textarea note 13pm==========
$(".Btn13").on("click",save13);
function save13(event) {
    event.preventDefault();

    var storeNote13 = $(".note13").val();
    localStorage.setItem("Note for 13pm:", storeNote13);
  }
  
  var storage13 = localStorage.getItem("Note for 13pm:");
  if (storage13) {
    $(".note13").val(storage13);
  }


     //function to save textarea note 14pm==========
$(".Btn14").on("click",save14);
function save14(event) {
    event.preventDefault();

    var storeNote14 = $(".note14").val();
    localStorage.setItem("Note for 14pm:", storeNote14);
  }
  
  var storage14 = localStorage.getItem("Note for 14pm:");
  if (storage14) {
    $(".note14").val(storage14);
  }

    //function to save textarea note 15pm==========
$(".Btn15").on("click",save15);
function save15(event) {
    event.preventDefault();

    var storeNote15 = $(".note15").val();
    localStorage.setItem("Note for 15pm:", storeNote15);
  }
  
  var storage15 = localStorage.getItem("Note for 15pm:");
  if (storage15) {
    $(".note15").val(storage15);
  }


    //function to save textarea note 16pm==========
$(".Btn16").on("click",save16);
function save16(event) {
    event.preventDefault();

    var storeNote16 = $(".note16").val();
    localStorage.setItem("Note for 16pm:", storeNote16);
  }
  
  var storage16 = localStorage.getItem("Note for 16pm:");
  if (storage16) {
    $(".note16").val(storage16);
  }


     //function to save textarea note 17pm==========
$(".Btn17").on("click",save17);
function save17(event) {
    event.preventDefault();

    var storeNote17 = $(".note17").val();
    localStorage.setItem("Note for 17pm:", storeNote17);
  }
  
  var storage17 = localStorage.getItem("Note for 17pm:");
  if (storage17) {
    $(".note17").val(storage17);
  }


