var myfamily= [
{ 
  name:"prisumsa",
  age:"hey i'm 4 years old,still baby",
  image:"img/prisumsa.jpg"

},
{
  name:"pritam",
  age:"hey i'm 29 years old, still young!",
  image:"img/pritam.jpg"
},
{
  name:"suchana",
  age:"hey i'm 28 years old, i am still young",
  image:"img/suchana.jpg"
},
{
  name:"premkumari",
  age:"hey i'm 48 years old,i am already grandmother",
  image:"img/premkumari.jpg"
},
{
  name:"nabin",
  age:"hey it's me 25 years handsome nabin",
  image:"img/nabin.jpg"
},
{
  name:"bimal",
  age:"hey it's me 37 years old bimal",
  image:"img/bimal.jpg"
},
{
  name:"rayans",
  age:"hey it's me 3 years old baby",
  image:"img/rayans.jpg"
},
{
  name:"shreejita",
  age:"hey i'm 30 years old, shreejita",
  image:"img/shreejita.jpg"
},
{
  name:"rajendra",
  age:"hey i'm 39 years old rajendra",
  image:"img/rajendra.jpg"
},
{
  name:"sabina",
  age:"hey i'm 36 years old, sabina",
  image:"img/sabina.jpg"
},
{
  name:"aayus",
  age:"hey i'm 19 years old very handsome man",
  image:"img/aayus.jpg"
},
{
  name:"aasma",
  age:"hey i'm 22years old,beautiful girl",
  image:"img/aasma.jpg"
},
{
  name:"dhannarayan",
  age:"hey i'm 75 years old,i am already grandfather",
  image:"img/dhan.jpg"
},
{
  name:"laxmi",
  age:"hey i'm 72 years old,i am already  great grandmother",
  image:"img/laxmi.jpg"
},
{
  name:"netrakumar",
  age:"hey i'm 34 years old",
  image:"img/netrakumar.jpg"
},
{
  name:"shila",
  age:"hey i'm 29 years old",
  image:"img/shila.jpg"
},
{
  name:"sweshna",
  age:"hey i'm 7 years old",
  image:"img/sweshna.jpg"
},
{
  name:"nirvika",
  age:"hey i'm 48 years old,i am already grandmother",
  image:"img/nirvika.jpg"
},
{
  name:"narayan",
  age:"hey i'm 32 years old 'daji'",
  image:"img/daji.jpg"
},

{
  name:"bhim",
  age:"hey i'm 130 years old 'kancha'",
  image:"img/bhim.jpg"
},
{
  name:"ranjit",
  age:"hey i'm 25 years old 'kid'",
  image:"img/ranjit.jpg"
},



]
// creating the function
function myfunction(){

var name = document.getElementById('name').value.toLowerCase()
for(i=0; i<myfamily.length; i++){
	if(name===myfamily[i].name){
   document.getElementById('chock').innerHTML=myfamily[i].name;
   document.getElementById('myname').innerHTML=myfamily[i].age;
   document.getElementById('chisapani').src=myfamily[i].image;
   return;
}
else{
	document.getElementById('chock').innerHTML="Type your name correctly"
   document.getElementById('myname').innerHTML= "Try again "
   document.getElementById('chisapani').src="img/bro.png"
}
}
}