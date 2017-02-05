
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
  $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + data.quoteText + '" -' + data.quoteAuthor));
}
