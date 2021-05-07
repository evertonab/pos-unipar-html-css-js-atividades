$('#carrinho').on("drop", function(){
    dadosTotais();
});

function dadosTotais() {
  var qtde_total = 0;  
  var preco_total = 0;
  
  $("#carrinho").find("article").each(function (idx){
    var preco = $(this).find("input[name='valor']").val();
    var qtde = $(this).find("input[name='qtde']").val();
   
    preco_total = (preco * qtde) + preco_total
    qtde_total = parseInt(qtde) + parseInt(qtde_total)

  })

  $("#valor-total").html("R$" + preco_total);
  $("#total-itens").html(qtde_total);
  
}

$("input[name='qtde']").change(function () {
  dadosTotais();
});

function allowDrop(ev) {
  ev.preventDefault();
  ev.currentTarget.style.border = '3px dotted #ccc'
  ev.currentTarget.style.background = '#ccc'
}

function denyDrop(ev) {
  ev.stopPropagation();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);

}

function leave(ev) {
  ev.preventDefault();
  ev.currentTarget.style.border = 'none'
  ev.currentTarget.style.background = 'inherit'

}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  ev.currentTarget.style.border = 'none'
  ev.currentTarget.style.background = 'inherit'
  dadosTotais()

}


