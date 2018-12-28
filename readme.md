//connect to mongodb server inside docker from outside

first 
docker inspect mongodb 
<!-- (mongodb is container of mongodb) -->
get the IPAdsress , example : 172.17.0.2

docker exec -it mongodb bash
mongo 172.17.0.2:27017 // lauch server mongodb to ip address

finally, insert 172.17.0.2:27017/test to config :)