$(function(){
	$(".copy_button").on("click",function(){
		console.log("クリックされました");
		$(".open h1").select();
		document.execCommand("copy");
	})
})