import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Selections } from './shrek.js';
import { Giphy } from './api.js';

$(document).ready(function() {
  let gif = new Giphy();
  (async ()=> {
     const response = await gif.getGiphy();
     let gifVid = getElements(response);
     console.log(gifVid);
  })();
  const getElements = function (response) {
    let i = Math.floor(Math.random()*10);
       document.getElementById('gif').src = response.data[i].images.original.url;
       console.log(response);
    }

  $("form#ageForm").submit(function(event){
    event.preventDefault();
    var userAge = parseInt($("input#age").val());
    var userMovie = ($("input:radio[name=movies]:checked").val());
    var userTime = ($("input:radio[name=times]:checked").val());
    var userChoices = new Selections (userAge, userMovie, userTime);
    userChoices.ageCheck();
    userChoices.timeCheck();
    $(".hidden").show();
    $(".hiddenMovie").text(userChoices.movie);
    $(".hiddenTime").text(userChoices.time);
    $(".hiddenPrice").text(userChoices.price);
    console.log(userChoices.price);
  })
})
