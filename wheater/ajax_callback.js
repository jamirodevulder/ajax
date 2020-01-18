function makeAjaxCall(url, methodType){
    let promiseObj = new Promise(function(resolve, reject){
      console.log(url); // DEBUG:
      let xmlhttp = new XMLHttpRequest();
      xmlhttp.open(methodType, url, true);
      xmlhttp.send();
      xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState === 4){
          if (xmlhttp.status === 200){
            console.log("xmlhttp done successfully"); // DEBUG:
            let serverResponse = xmlhttp.responseText; //server antwoord met string
            console.log(serverResponse); // DEBUG:
            resolve(serverResponse); // word via return promiseObj teruggegeven
          } else {
            reject(xmlhttp.status);
            console.log("xmlhttp failed");
          }
        } else {
          console.log("xmlhttp processing going onnn");
        }
      }
      console.log("XMLHttpRequest sent successfully");
    });
    return promiseObj;
  }
  function errorHandler(statusCode){
    console.log("failed with status", status);
  }
