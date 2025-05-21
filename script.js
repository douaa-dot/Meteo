function getWeather() {
  const city = $('#cityInput').val().trim();
  if (!city) {
    $('#weatherDisplay').html('<p>Veuillez entrer une ville.</p>');
    return;
  }

  $.ajax({
    url: 'meteo.php',
    method: 'GET',
    data: { city: city },
    dataType: 'json',
    success: function(data) {
      const display = $('#weatherDisplay');
      if (data.cod === 200) {
        display.html(`
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>Température :</strong> ${data.main.temp} °C</p>
          <p><strong>Humidité :</strong> ${data.main.humidity} %</p>
          <p><strong>Conditions :</strong> ${data.weather[0].description}</p>
        `);
      } else {
        display.html('<p>Ville non trouvée.</p>');
      }
    },
    error: function() {
      $('#weatherDisplay').html('<p>Erreur de récupération des données.</p>');
    }
  });
}
