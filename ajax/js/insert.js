	$("#fmrData").on('submit',function(e){
			e.preventDefault();
			var formulario=$(this);
			var dataSerializada = formulario.serialize();
				

				$.ajax({
			type : 'POST',
			url: 'php/servicios/get.alumnosBeta.php',
			dataType: 'json',
			data:dataSerializada

		}).done(function(data){
			console.log("correcto");
			console.log(data);
		}).fail(function(){
			console.log("Fallo");
		}).always(function(){
			console.log("completo");
		});


	});


	


	
		
