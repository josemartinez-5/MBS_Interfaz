JQuery(document).on('submit',#formlg,function(event){
	event.preventDefault();
	
	JQuery.ajax({
		url:'bioed.liz.mx/modulos/RJM/login.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize() ,
		beforeSend: function(){
			$('.botonlg').val('Validando...');
			
		}
	})
	.done(function(respuesta){
		console.log(respuesta);
		if(respuesta.error){
			if(respuesta.tipo == 'Admin'){
				location.href='../../modulos/Menu/menuGeneral.php';
			}else if(respuesta.tipo='Usuario'){
				location.href='../../modulos/Menu/menu.php';
			}
			
		}else{
			$('.error').slideDown('slow');
			setTimeout(function(){
				$('.error').slideUp('slow')
			},3000);
			$('.botonlg').val('ACCEDER');
		}
		
	})
	.fail(function(resp){
		console.log(resp.responseText);
	})
	.always(function(){
		console.log("complete");
	});
});