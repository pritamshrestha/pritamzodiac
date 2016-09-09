var myplanet= [
{ 
  name:"mercury",
  distance:"this is the first nearest planet from the sun",
  image:"img/mercury.jpg"

},
{
  name:"venus",
  distance:"This is the second nearest planet form the sun!",
  image:"img/venus.jpg"
},
{
  name:"earth",
  distance:"This is the third nearest planet from the sun",
  image:"img/earth.jpg"
},
{
  name:"mars",
  distance:"This is the fourth nearest planet from the sun",
  image:"img/mars.jpg"
},
{
  name:"jupitar",
  distance:"this is the fifth nearest planet from the sun",
  image:"img/jupitar.jpg"
},
{
  name:"saturn",
  distance:"This is the sixth nearest planet from the sun",
  image:"img/saturn.jpg"
},
{
  name:"uranus",
  distance:"This is the seventh nearest planet from the sun",
  image:"img/uranus.jpg"
},
{
  name:"neptune",
  distance:"This is the eighth nearest planet from the sun",
  image:"img/nepturn.jpg"
},
{
  name:"pluto",
  distance:"This is the farthest planet from the sun",
  image:"img/pluto.jpg"
}
]
// creating the function
function myfunction(){

var name = document.getElementById('name').value.toLowerCase()
for(i=0; i<myplanet.length; i++){
	if(name===myplanet[i].name){
   document.getElementById('chock').innerHTML=myplanet[i].name;
   document.getElementById('myname').innerHTML=myplanet[i].distance;
   document.getElementById('chisapani').src=myplanet[i].image;
   return;
}
else{
	document.getElementById('chock').innerHTML="Type your name correctly"
   document.getElementById('myname').innerHTML= "Try again "
   document.getElementById('chisapani').src="img/bro.png"
}
}
}