// sets up the functions and makes them ready to use in the other js files

// initial Setup is achieved
window.onload = function() 
{
    loadHeader();
    loadFooter();
    // removes the loading animation once the doc is ready
    $( document ).ready(function() {
        $('.modal').css({'display' : 'none'});
    });
 	
    
}



function loadHeader(){
	// waits till the page is loaded and then sets the header
	$("#header").load("../pages/header.html",function(){
		var name = $("#header").attr("titlename");
		$(".GSE_header").text(name);
		var backNavigationLink = $("#header").attr("backNavigation");
		if(backNavigationLink != null){
			$(".GSE_backArrow").before('<div onclick="window.location=&quot;'+backNavigationLink+'&quot;" class="backArrow";><i class="GSE-icon-header-style material-icons">arrow_back</i></div>');

		}
	});
	
}

function loadFooter(){
	$("#footer").load("../pages/footer.html");	
}

function expandFollowingDiv(clickedElement){
	//alert("hi");
	var elem = $(clickedElement).next();
	// displays or hides the text
	elem.slideToggle("ease");
}
