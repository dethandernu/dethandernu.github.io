#= require fastclick/lib/fastclick
#= require odometer/odometer
#= require jquery.lazyload/jquery.lazyload
#= require jquery.inview/jquery.inview
#= require classie/classie
#= require slideshow
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


$('form#interest').submit( (e) ->
  e.preventDefault()
  field = $(@).find('input[name="email"]')
  email = $(@).find('input[name="email"]').val()
  url = $(@).attr('action')
  return false unless email
  $.post(url, email: email)
  .success((r) ->
    alert r.message
    field.val('')
  )
  .fail((r)->
    alert r.message
  )
)

$('.photo').each( (i, el) ->
  $(el).one('inview', (e, visible) ->
    if visible
      elm = $(@);
      elm.css('background-image', "url(#{elm.data('src')})")
  )
)

$('img.profile').lazyload();

window.addEventListener('load', ->
    FastClick.attach(document.body);
, false)