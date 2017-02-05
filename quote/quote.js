
$(document).ready(function(){
  $.ajax({
    url: 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=parseQuote',
    dataType: 'jsonp'

  });

  $('#next').click(function() {
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=parseQuote',
      dataType: 'jsonp'

    });
  });
})

function parseQuote(data){
  $('#quote').html(data.quoteText);
  $('#author').html(data.quoteAuthor);
  $('#tweet').attr('href', 'https://twitter.com/intent/tweet' + '?text=' + data.quoteText + ' --' + data.quoteAuthor);

  window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };

    return t;
  }(document, "script", "twitter-wjs"));

}
