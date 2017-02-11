
$(document).ready(function(){

  $('#s_go').click(function(e) {
    e.preventDefault();
    var search_term = $('#s_input').val();
    $.ajax({
      url: '',
      dataType: 'jsonp'
    });
  });
})

function parseWiki(data){

}
