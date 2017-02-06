(function(){

$(document).ready(function(){

$.ajax({
			type : 'POST',
			url: 'php/servicios/get.alumnos.php',
			dataType: 'json',


		}).done(function(data){
			
			if(data.error){
				alert("Error");
				return;
			};
			data.alumnos.forEach(function(alumnos,index){
					var content ="<tr>";
						
content+=' <td>'+alumnos.id+'</td>';
content+='<td>'+alumnos.nombre+'</td>';
content+='<td class="text-center "><a class="btn btn-primary" href="actualizar.html?id = '+alumnos.id+'">';
content+='	<i class="fa fa-edit "></i>';
content+='</a></td>';
content+='<td class="text-center"><a class="btn btn-danger" data-id='+alumnos.id+' href="">';
content+='	<i class="fa fa-trash"></i>';
content+='</a></td>';
content+='</tr>';

$("#registro").append(content);
			});



		}).fail(function(){
			console.log("Fallo");
		}).always(function(){
			console.log("completo");
		});

});






})();