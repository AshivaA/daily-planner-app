



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
    var DaytimeString = ["9","10","11","12","13","14","15","16","17"];

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
        Button.attr("class","saveBtn");
        Button.attr("onclick","SaveNote()");
       
         
    // concat note with DaytimeString
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


// local Save notes parts
// =========================

// jquery addEventListener
// =========================
 $(".saveBtn").on("click" ,SaveNote());
  

function SaveNote() {

// accessing to textarea content
// ===================================
     var storeNote09 = $(".note9").val();
     var storeNote10 = $(".note10").val();
     var storeNote11 = $(".note11").val();
     var storeNote12 = $(".note12").val();
     var storeNote13 = $(".note13").val();
     var storeNote14 = $(".note14").val();
     var storeNote15 = $(".note15").val();
     var storeNote16 = $(".note16").val();
     var storeNote17 = $(".note17").val();

// stor notes in local storage
// =================================== 
     var storage09= localStorage.setItem("Note for 09am:", storeNote09 );
     var storage10= localStorage.setItem("Note for 10am:", storeNote10 );
     var storage11= localStorage.setItem("Note for 11am:", storeNote11 );
     var storage12= localStorage.setItem("Note for 12pm:", storeNote12 );
     var storage13= localStorage.setItem("Note for 13pm:", storeNote13 );
     var storage14= localStorage.setItem("Note for 14pm:", storeNote14 );
     var storage15= localStorage.setItem("Note for 15pm:", storeNote15 );
     var storage16= localStorage.setItem("Note for 16pm:", storeNote16 );
     var storage17= localStorage.setItem("Note for 17pm:", storeNote17 );

// access local storage by key property
// ===================================== 
     localStorage.getItem("Note for 09am");
     localStorage.getItem("Note for 10am");
     localStorage.getItem("Note for 11am");
     localStorage.getItem("Note for 12pm");
     localStorage.getItem("Note for 13pm");
     localStorage.getItem("Note for 14pm");
     localStorage.getItem("Note for 15pm");
     localStorage.getItem("Note for 16pm");
     localStorage.getItem("Note for 17pm");

  };

    


