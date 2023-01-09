$(function(){
	let cg_ary = [0,0,0,0,0,0,0,0,0,0];
	let tool_ary = [0,0,0,0,0,0,0,0,0,0];

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
	})
	$(".open_tool").on("click",function(){
		const index = $("li.open_tool").index(this);
		console.log(index);

		if(tool_ary[index] ==  0){
			$(".change_tool").eq(index).show("fast");
			$(".change_tool").eq(index).css({"display":"flex"});
			$(".change_tool").eq(index).css({"flex-direction":"column"});
			tool_ary[index] = 1;
		}else{
			$(".change_tool").eq(index).hide("fast");
			tool_ary[index] = 0;
		}
	})

	$(".all_hide_button").on("click",function(){
		for(let i = 0; i < cg_ary.length; i++){
			cg_ary[i] = 0;
		}
		$(".change").hide("fast");
	})
})