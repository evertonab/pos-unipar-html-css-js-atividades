
$(document).ready(function() {
    
    var cadastroNoticias = $('#cadastro-noticia');
    cadastroNoticias.on("submit", function() {
        try{
            var json = recordFromForm(cadastroNoticias);
            addDataTable(json);
        } catch (e){
            console.error(e);
        }
        return false;
    });
    
    function recordFromForm(form){
        var inputs = form.find('input[type="text"], textarea');
        var json = "";
        inputs.each(function(idx, input){
            
            var name = $(input).attr("name");
            var value = $(input).val();
            if (json !== ""){ 
                json += ","; }
            json += `"${name}": "${value.trim()}"`;
            
        });
        json = `{${json}}`;
        console.log(json);
        return JSON.parse(json);
    }

    

    const addDataTable = (noticiajson) => {

        var tbody = $("#table-noticias tbody");
        var tr = $("<tr></tr>");
        var tdTitulo = $("<td></td>");
        var tdIntroducao = $("<td></td>");
        var tdExclusao = $("<td></td>");


        tdTitulo.text(noticiajson['titulo']);
        tdIntroducao.text(noticiajson['introducao']);
        
        var remover = $('<a ></a>'); 
        remover.text("Remover");
        remover.addClass("btn btn-sm btn-danger");

        remover.on("click", function(){
            removeRow(tr);
            showRowCount();
        });

        tdExclusao.append(remover);
        
        tr.append(tdTitulo, tdIntroducao, tdExclusao);

        tbody.append(tr);
        showRowCount();
    }

})
    function showRowCount(){
        var trs = $("#table-noticias tbody tr");
        var total = trs.length;
        $("#table-noticias tfoot tr td span").text(total); 
        
    }

    const removeRow = (tr) => { tr.remove(); }