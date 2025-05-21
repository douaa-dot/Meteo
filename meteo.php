<?php
header('Content-Type: application/json; charset=utf-8');

if (isset($_GET['city']) && !empty($_GET['city'])) {
  $city = urlencode($_GET['city']);
  $apiKey = 'da1b00e22836cae01f84895b968bc2c1'; // Remplace par ta vraie clé API
  $url = "https://api.openweathermap.org/data/2.5/weather?q=$city&units=metric&lang=fr&appid=$apiKey";

  $response = file_get_contents($url);
  if ($response !== FALSE) {
    echo $response;
  } else {
    echo json_encode(["cod" => 404, "message" => "Ville non trouvée"]);
  }
} else {
  echo json_encode(["cod" => 400, "message" => "Aucune ville fournie"]);
}
?>