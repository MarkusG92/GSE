// sets up the functions and makes them ready to use in the other js files


window.addEventListener("load", function(){ if(!window.pageYOffset){ hideAddressBar(); } } );
window.addEventListener("orientationchange", hideAddressBar );

// initial Setup is achieved
window.onload = function() 
{

    loadHeader();
    loadFooter();
    
    // differentiate between different pages
    var pageId = $('body').attr("id");
	

	if(pageId == "firstSteps"){
		startLoading();
		getContentFirstSteps(removeLoading);
        //$('.modal').css({'display' : 'none'});
	}
	else if (pageId == "faq"){
		startLoading();
		getContentFaq(removeLoading);
	}
	

    // removes the loading animation once the doc is ready
    $( document ).ready(function() {
        //$('.modal').css({'display' : 'none'});
    });
}

function removeLoading(){

	$("body").removeClass("loading");
}

function startLoading(){
	$("body").addClass("loading");
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

function hideAddressBar()
{
  if(!window.location.hash)
  {
      if(document.height < window.outerHeight)
      {
          document.body.style.height = (window.outerHeight + 50) + 'px';
      }

      setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
  }
}

function expandFollowingDiv(clickedElement){
	//alert("hi");
	var elem = $(clickedElement).next();
	// displays or hides the text
	elem.slideToggle("ease");
}

function getContentFirstSteps(callback){
	fetch('https://gsebackendapi.azurewebsites.net/Api/FirstSteps', {
            method: 'get'
        }).then(function(response) {
            return response.json();
        }).then(function(json) {
            //print result to console
            console.log(json);
            //get target element
            const target = document.getElementById('targetContainer');
            var html = '';
            //iterate through json array
            json.forEach(function(item) {
                html += `
                <li class="mdl-list__item">
					<a class="mdl-list__item-secondary-action">
					<div onclick="expandFollowingDiv(this)">
					<button  class="GSE-menu-button GSE-text-color menu-button mdl-button mdl-js-button mdl-js-ripple-effect">
								${item.description}
					</button>
					</div>
					<div class="GSE_hidden GSE-text-color">
					${item.information}
					</div></a>
						</li>
                `;
            });
            //print created html to console
            console.log(html);
            //write html to element
            target.innerHTML = html;
        }).catch(function(err) {
            //print error to console
            console.error(err);
        }).then(function(){
        	callback();
        });	       
}
function getContentFaq(callback){
// Get target element from DOM
    var target = document.getElementById('target');

    //Fetch data from API-route
    fetch('https://gsebackendapi.azurewebsites.net/Api/FAQs', {
        //choose http method
        method: 'get'
    }).then(function(response) {
        //Promise returns response
        //get json from response
        return response.json();
    }).then(function(json) {
        //promise returns data as JSON
        var html = '';
        //iterate through arry
        json.forEach(function(item) {
            //create html from data
            html += `
                    <li class="mdl-list__item mdl-list__item--three-line">
                        <span class="mdl-list__item-primary-content">
                          <i class="material-icons mdl-list__item-avatar">info i</i>
                          <span>${item.question}</span>
                          <span class="mdl-list__item-text-body">
                                ${item.answer}
                              <span class="mdl-list__item-secondary-info">
                                <a href="${item.link}" target="_blank">Source</a>
                              </span>
                          </span>
                        </span>
                      </li>
                `;
        });

        //writing created html to DOM
        target.innerHTML = html;
    }).catch(function(err) {
        //if error happen they will be printed to the console
        console.error(err);
    }).then(function(){
        	callback();
        });

}
 