function Time(){
    const date = new Date();
    let hh = date.getHours(); // 시 
    let mm = date.getMinutes(); // 분
    let ss = date.getSeconds(); //초 
    let session = "AM";


    if (hh === 0){
      hh = 12;
    }
    if (hh > 12){
      hh = hh -12;
      session = "PM";
    }

    // hh = (hh < 10) ? "0" + hh : hh;
    // mm = (mm < 10) ? "0" + mm : mm;
    // ss = (ss < 10) ? "0" + ss : ss; 

    const time = hh + "시" + mm + "분" + ss + "초" +session;

    document.getElementById("clock").innerText = time;
    
    setTimeout(()=>Time(),1000); 
  /* setTimeout(function(){
        returm Time();
    }*/

}    Time();
