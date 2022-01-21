$(".agregar").on("click", function(e){
    e.preventDefault();

    let divo = $(`<div>`); //Div
    $(".Lista").append(divo); //Agregamos el div a la ul

    let lis = $(`<li class="lis">`); //Lista
    divo.append(lis); //Agregamos el li al div

    let ite = $(`<p class="itemShop">`); //Parrafo
    let texto = $("#newText").val(); //Agarramos el valor de la caja de texto
    ite.text(texto); //Le ponemos al parrafo el texto de la textbox
    lis.append(ite); //Agregamos el parrafo a la lista

    let botonche = $(`<button class="checar">Check</button>`); //Boton Check
    let botondel = $(`<button class="del">Delete</button>`); //Boton Delete
    lis.append(botonche); //Agregamos el boton Check al li donde yace el parrafo
    lis.append(botondel); //Agregamos el boton Delete al li donde yace el parrafo

  })
  
  $(".Lista").on('click', ".checar", function(){
    $(this).prev().toggleClass('chec')
  })

  $(".Lista").on('click', ".del", function(){
    $(this).parent().remove()
  })