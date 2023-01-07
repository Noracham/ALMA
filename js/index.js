$(function(){
	let cg_ary = [0,0,0,0,0,0,0,0,0,0];

	$(".open").on("click",function(){
		const index = $("li.open").index(this);
		console.log(index);

		if(cg_ary[index] ==  0){
			$(".change").eq(index).show("fast");
			cg_ary[index] = 1;
		}else{
			$(".change").eq(index).hide("fast");
			cg_ary[index] = 0;
		}
		// $(".open h1").select();
		// document.execCommand("copy");

	})
	$(".all_hide_button").on("click",function(){
		for(let i = 0; i < cg_ary.length; i++){
			cg_ary[i] = 0;
		}
		$(".change").hide("fast");
	})
})