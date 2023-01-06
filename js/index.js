$(function(){
	// document.querySelector(".copy_button").onclick = () => navigator.clipboard.writeText("コピーさせたい文字列");
	$(".copy_button").on("click",function(){
		navigator.clipboard.writeText("コピー成功");
	})
})