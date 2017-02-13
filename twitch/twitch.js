var streamers = ["summit1g", "joshog", "brunofin", "bigdaddyden76"];

$(document).ready(function() {

  for (i = 0; i < streamers.length; i++) {
    $.ajax({
      url: 'https://wind-bow.gomix.me/twitch-api/streams/' + streamers[i] + '?callback=parseTwitch',
      dataType: 'jsonp',
    });
  }
})

function parseTwitch(data){

  var name = data._links.self.split("/").pop();
  var status = '';
  var bg_color = '';

  if (!data.stream) {
    status = 'offline';
    bg_color = '6441A4';
  } else {
    status = 'streaming ' + data.stream.game;
    bg_color = '009933';
  }

  $(".channel-display").append([
    "<div class='panel panel-default container' id='s_" + name + "'>",
      "<div class='panel-body row' style='background-color: #" + bg_color + "'>",
        "<div class='col-xs-3 stream_name'>" + name + "</div>",
        "<div class='col-xs-9 stream_status'>" + status + "</div>",
      "</div>",
    "</div>"
  ].join("\n"));

  $('#s_' + name).click(function(e) {
            e.preventDefault();
            window.location = 'https://www.twitch.tv/' + name;
  });
}
