// variabili
var first_image, last_image, first_circle, last_circle;
// prima di iniziare il tutto mi salvo la prima immagine
first_image = $('.visible');
// mi salvo il primo pallino
first_circle = $('.circle_on');

// mi salvo l'ultima immagine
last_image = $('.last_image');
// mi salvo l'ultimo pallino
last_circle = $('.last_circle');

// per la freccia di destra
$('i.fa-chevron-right').click(function(){
  // mi salvo l'immagine corrente
  var img_corrente = $('.visible');
  // mi salvo il pallino corrente
  var circle_corrente = $('.circle_on');

  console.log(img_corrente);

  // mi salvo la prossima immagine
  var prossima_img = img_corrente.next('img');
  // mi salvo il prossimo pallino
  var prossimo_circle = circle_corrente.next('i');

  // tolgo la classe visible all'immagine corrente
  img_corrente.removeClass('visible');
  // tolgo la classe circle_on al pallino corrente
  circle_corrente.removeClass('circle_on');

  // se l'immagine successiva esiste allora mi aggiungerà la classe visible a prossima_img e la classe circle_on al prossimo pallino
  if(prossima_img.length > 0){
    prossima_img.addClass('visible');
    prossimo_circle.addClass('circle_on');
  } else {
    // rimetto la classe visible alla prima immagine e al primo pallino che mi son salvato
    first_image.addClass('visible');
    first_circle.addClass('circle_on');
  }

});

// per la freccia di sinistra
$('i.fa-chevron-left').click(function(){
  // mi salvo l'immagine corrente
  var img_corrente = $('.visible');
  // mi salvo il pallino corrente
  var circle_corrente = $('.circle_on');

  console.log(img_corrente);

  // mi salvo l'immagine precedente
  var img_precedente = img_corrente.prev('img');
  // mi salvo il pallino precedente
  var circle_precedente = circle_corrente.prev('i');

  // tolgo la classe visible all'immagine corrente
  img_corrente.removeClass('visible');
  // tolgo la classe circle_on al pallino corrente
  circle_corrente.removeClass('circle_on');

  // se l'immagine precedente esiste allora mi aggiungerà la classe visible a img_precedente e la classe circle_on a circle_precedente
  if(img_precedente.length > 0){
    img_precedente.addClass('visible');
    circle_precedente.addClass('circle_on');
  } else {
    // rimetto la classe visible all'ultima immagine e all'ultimo pallino che mi son salvato
    last_image.addClass('visible');
    last_circle.addClass('circle_on');
  }
});

// funzione per i pallini
$('i.fa-circle').click(function(){
  // rimuovo la classe visible e circle_on a tutte le immagini e cerchietti
  $('img').removeClass('visible');
  $('i').removeClass('circle_on');

  // se il pallino cliccato ha la classe first
  if($(this).hasClass('first')){
    // aggiungo visible all' immagine con la stessa classe e a questo pallino la classe circle_on
    $('img.first').addClass('visible');
    $(this).addClass('circle_on');
  }
  // se il pallino cliccato ha la classe second
  if($(this).hasClass('second')){
    // aggiungo visible all' immagine con la stessa classe e a questo pallino la classe circle_on
    $('img.second').addClass('visible');
    $(this).addClass('circle_on');
  }
  // se il pallino cliccato ha la classe third
  if($(this).hasClass('third')){
    // aggiungo visible all' immagine con la stessa classe e a questo pallino la classe circle_on
    $('img.third').addClass('visible');
    $(this).addClass('circle_on');
  }
  // se il pallino cliccato ha la classe fourth
  if($(this).hasClass('fourth')){
    // aggiungo visible all' immagine con la stessa classe e a questo pallino la classe circle_on
    $('img.fourth').addClass('visible');
    $(this).addClass('circle_on');
  }
});
