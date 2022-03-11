function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.title = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();

  function setFavicons(favImg){
    let headTitle = document.querySelector('head');
    
    let favIcons = [
        { rel: 'apple-touch-icon' },
        { rel: 'apple-touch-startup-image' },
        { rel: 'shortcut icon' }
    ]
    
    favIcons.forEach(function(favIcon){
        let setFavicon = document.createElement('link');
        setFavicon.setAttribute('rel', favIcon.rel);
        setFavicon.setAttribute('href', favImg);
        headTitle.appendChild(setFavicon);
    });
}
setFavicons('data:image/png;base64,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');