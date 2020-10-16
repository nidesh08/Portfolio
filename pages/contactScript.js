
  function modalShow()
  {
      var name=document.getElementById("name").value;
      var email=document.getElementById("email").value;
      var reason=document.getElementById("reason").value;

      
      if (document.getElementById("name").value == "")
      {
        document.getElementById("msg").innerHTML="Please enter your name.";
      }
      else
      {
        document.getElementById("msg").innerHTML="";
      }

      if (document.getElementById("email").value == "")
      {
        document.getElementById("msg1").innerHTML="Please enter your email.";
      }
      else
      {
        document.getElementById("msg1").innerHTML="";
      }

      if  (document.getElementById("reason").value == "")
      {
        document.getElementById("msg2").innerHTML="Please select your reason.";
      }
      else
      {
        document.getElementById("msg2").innerHTML="";
      }

      if  ((name!="")&&(email!="")&&(reason!=""))
      {
          var displayName=document.getElementById("clientName");
          displayName.innerHTML="Hi "+name+"!";
          $("#modal").modal({backdrop: "static"});
        clearr();
    }
  }

  function clearr()
  {
      document.getElementById("msg").innerHTML="";
      document.getElementById("msg1").innerHTML="";
      document.getElementById("msg2").innerHTML="";
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("reason").value="";
  }
 