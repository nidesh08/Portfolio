
  function modalShow()
  {
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var reason=document.getElementById("reason").value;
    if ((name!="")&&(email!="")&&(reason!=""))
    {
        var displayName=document.getElementById("clientName");
        displayName.innerHTML="Hi "+name+"!";
        $("#modal").modal({backdrop: "static"});
    }
}
  /*

  $('#myForm').on('submit', function(e){
    $('modall').modal('show');
    e.preventDefault();
  });
  $('#myForm').on('submit', dunct modalshow(e));
  
  function submitBtn()
  {
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var reason=document.getElementById("reason").value;
    if ((name!="")&&(email!="")&&(reason!=""))
    {
        var displayName=document.getElementById("clientName");
        displayName.innerHTML="Hi "+name+"!";
        
    }
  
  }
  function modalshow(e)
  {
    
    e.preventDefault();
    $("#modal").modal({backdrop: "static"});
  }
*/
  
