$(function(){
	let change = false;
	$(".open").on("click",function(){
		const index = $("li.open").index(this);
		console.log("クリックされました");

		if(change ==  false){
			$(".change").eq(index).show("fast");
			change = true;
		}else{
			$(".change").eq(index).hide("fast");
			change = false;
		}
		// $(".open h1").select();
		// document.execCommand("copy");

	})
})