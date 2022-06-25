function updateMap()
{
  fetch("/data.json")
  .then(response => response.json())
  .then(rsp => {
      //console.log(rsp.data)
      rsp.data.forEach(element => {
          latitude = element.latitude;
          longitude = element.longitude;

          cases = element.infected;
          if (cases<25){
              color = "rgb(255, 0, 0)";
          }
          else  if(cases>=25 && cases<=250){
              color = "rgb(139, 0, 0)";
          }
          else if(cases>250 && cases <=500){
              color = "rgb(128, 0, 0)";
          }
          else{
              color = "black"
          }

          // from mapbox
          new mapboxgl.Marker({
            draggable: false,
            color: color
            })
            .setLngLat([longitude, latitude])
            .addTo(map);
          
      });
  })
}
let interval = 2000;
setInterval(updateMap() , interval);

