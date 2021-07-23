import axios from "axios";

let meshLayer = null

window.onload = () => {
  // const mymap = L.map('mapid').setView([38.0, 138.0], 5);
  // L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  //   attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>",
  //   maxZoom: 13
  // }).addTo(mymap);

  for (let i = 0; i < 20; i++) {
    axios.get(`https://cyberjapandata.gsi.go.jp/xyz/pale/5/22/${i}.png`, {
      responseType: "blob"
    }).then(res => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file.png'); //or any other extension
      document.body.appendChild(link);
      link.click();
    })
  }

  // meshLayer = new L.TileLayer.MVTSource({
  //   url: "data/metpv_mesh_tile/5/22/14.pbf",
  //   maxZoom: 13,
  //   // clickableLayers: ["mesh"],
  //   clickableLayers: ["metpv_mesh"],
  //   mutexToggle: true,
  //   getIDForLayerFeature: function (feature) {
  //     return feature.properties.id;           // ここで、一意となるキー項目を指定してやる
  //   },
  //   style: function (feature) {
  //     const point_code = $('#point_list').val();
  //     if (feature.properties.pointcode === point_code) {
  //       return {
  //         color: "rgba(128,128,0, 0.3)",
  //         outline: {color: "rgba(255,128,0,0.3)", size: 2}
  //       }
  //     } else {
  //       return {
  //         color: "rgba(128,128,0, 0.0)",
  //         outline: {color: "rgba(128,128,0, 0.0)", size: 0}
  //       }
  //     }
  //   },
  //   //onClick: onClickMesh,
  // });
  // meshLayer.addTo(mymap);

}
