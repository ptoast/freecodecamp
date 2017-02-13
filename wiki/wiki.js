var numResults = 5;
var firstTime = true;

$(document).ready(function() {


  $('#s_go').click(function(e) {
    e.preventDefault();
    var search_term = $('#s_input').val();
    if (search_term !== '') {
      if (firstTime) {
        makePanels();
        firstTime = false;
      }
      $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        data: 'action=query&format=json&prop=&list=search&srsearch='+ search_term + '&srnamespace=0&srlimit=' + numResults + '&srprop=snippet%7Ctitlesnippet&callback=parseWiki',
        dataType: 'jsonp',
        //type: 'GET',
        //headers: {'Api-User-Agent': 'getWiki/1.0 (ptoast4@gmail.com)'}

      });
    }
  });
})

function parseWiki(data){
  for (i = 0; i < numResults; i++) {
    $('#result' + i + ' h2').html(data.query.search[i].title);
    $('#result' + i + ' .panel-body').html('...' + data.query.search[i].snippet + '...');
    $('#result' + i).attr("href", "https://en.wikipedia.org/wiki/" + data.query.search[i].title)
  }
}

function makePanels() {
  // Create wiki result panels
  for (i = 0; i < numResults; i++) {
    $(".wiki-display").append([
      "<a id='result" + i + "' href='#'>",
        "<div class='panel panel-default text-left'>",
          "<div class='panel-heading'>",
            "<h2 class='panel-title'></h2>",
          "</div>",
          "<div class='panel-body'></div>",
        "</div>",
      "</a>"
    ].join("\n"));
  }
}
