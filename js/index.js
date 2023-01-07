$(function(){
	let change = false;
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
})