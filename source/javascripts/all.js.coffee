
$('[data-twitter-count]').each((el, i) ->
  url = $(@).data('twitter-count')
  return unless url
  $.ajax(
    url: 'http://urls.api.twitter.com/1/urls/count.json?url=' + encodeURIComponent(url)
    dataType: 'jsonp'
  ).success (r) =>
    $(@).html(r.count)
)

$('[data-facebook-count]').each((el, i) ->
  url = $(@).data('facebook-count')
  return unless url
  $.ajax(
    url: 'http://graph.facebook.com/' + encodeURIComponent(url)
    dataType: 'jsonp'
  ).success (r) =>
    $(@).html(r.shares)
)
