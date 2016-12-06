// sets up the functions and makes them ready to use in the other js files

// initial Setup is achieved
window.onload = function() 
{
    loadHeader();
    loadFooter();
    loadHome();
}

function loadHeader(){
	// waits till the page is loaded and then sets the header
	$("#header").load("../pages/header.html",function(){
		var name = $("#header").attr("titlename");
		$(".GSE_header").text(name);
	});
	
}

function loadFooter(){
	$("#footer").load("../pages/footer.html");	
}

function loadHome(){
	$("#indexContent").load("../pages/home.html");		
}