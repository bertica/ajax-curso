$("#btn-jugadores").click(function(event) {
  $.ajax({
      url: 'http://www.media.formandome.es/phonegap/tutorial/futbolistas.php',
      type: 'GET',
      dataType: 'json',
    })
    .done(function(futbolistas) {
      console.log("success");
      console.log(futbolistas);
      var listado;
      $.each(futbolistas,function(index, futbolista){
      	listado+="<tr><td>"+futbolista.apellido+"</td><td>"+futbolista.equipo+"</td></tr>";
      });
      $("#listado").html(listado);
      //$("table").show();
      $("table").css("display",'block');
    })
    .fail(function() {
      console.log("error");
    });

});
