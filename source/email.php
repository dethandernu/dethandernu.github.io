<?
header('Content-Type: application/json');

$q = html_entity_decode($_POST["email"]);

$response = array();

if (!filter_var($q, FILTER_VALIDATE_EMAIL)) {
  http_response_code(406);
  $response['result'] = false;
  $response['message'] = 'Hmm, det där verkar inte vara en riktigt e-postadress';
}
else {
  http_response_code(200);
  @file_put_contents('hemligalistan.txt', $q."\n", FILE_APPEND);
  $response['result'] = true;
  $response['message'] = "Tusen tack! Vi meddelar dig när boken är klar";
}

echo json_encode($response);

?>