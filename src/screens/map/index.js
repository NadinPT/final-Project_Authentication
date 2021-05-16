import "./style.scss";

let map;

window.initMap = () => {
  navigator.geolocation.getCurrentPosition((pos) => {
    //получаем наши координаты (нужно разрешить)
    var crd = pos.coords;
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: crd.latitude, lng: crd.longitude },
      zoom: 8,
    });
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const infoWindow = new google.maps.InfoWindow();

    for (var i = 0; i < 15; i++) {
      const marker = new google.maps.Marker({
        position: {
          lat: crd.latitude + Math.random(),
          lng: crd.longitude + Math.random(),
        },
        map,
        label: labels[i],
        animation: google.maps.Animation.DROP,

        title: "Hello World!",
      });
      marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
      });
    }
  });
};
