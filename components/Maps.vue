<template>
  <section>
    <div id="maps"></div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    if (window.navigator.geolocation) {
      // 現在地を取得
      navigator.geolocation.getCurrentPosition(
        // 取得成功した場合
        function(position) {
          console.log("position: ", position);
          // 緯度・経度を変数に格納
          var mapLatLng = new google.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          console.log("before routing", mapLatLng);

          // マップオプションを変数に格納
          var mapOptions = {
            zoom: 15, // 拡大倍率
            center: mapLatLng // 緯度・経度
          };
          // マップオブジェクト作成
          var map = new google.maps.Map(
            document.getElementById("maps"), // マップを表示する要素
            mapOptions // マップオプション
          );
          axios
            .get(
              "http://api.nmkj.io:14080/place/" +
                // mapLatLng.lat() +
                "34.7" +
                "/" +
                // mapLatLng.lng() +
                "135.4" +
                "/10000"
            )
            .then(res => {
              for (let event of res.data) {
                console.log(event);
                const marker = new google.maps.Marker({
                  position: event.place,
                  map: map,
                  title: event.place.name
                });
                const infoWindow = new google.maps.InfoWindow({
                  content:
                    '<div><h1 class="title">' +
                    event.title +
                    '</h1><h2 class="subtitle">' +
                    event.description +
                    "</h2></div>"
                });
                marker.addListener("click", function() {
                  infoWindow.open(map, marker);
                });
              }
            });
        },
        // 取得失敗した場合
        function(error) {
          // エラーメッセージを表示
          switch (error.code) {
            case 1: // PERMISSION_DENIED
              alert("位置情報の利用が許可されていません");
              break;
            case 2: // POSITION_UNAVAILABLE
              alert("現在位置が取得できませんでした");
              break;
            case 3: // TIMEOUT
              alert("タイムアウトになりました");
              break;
            default:
              alert("その他のエラー(エラーコード:" + error.code + ")");
              break;
          }
        }
      );
      // Geolocation APIに対応していない
    } else {
      alert("この端末では位置情報が取得できません");
    }
  }
};
</script>

<style lang="scss" scoped>
#maps {
  width: 100vw;
  height: 100vh;
}
</style>
