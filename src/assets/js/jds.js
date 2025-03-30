/** CrimsonLogic UX Practice R2-S2 Foundation **/
/** Project Specific Custom Scripts **/

/** Things to do when document is loaded **/
$(document).ready(function() {
  // Overlay the Loader and hides it when page is done loading **/
  showPage();
	
	$(".expand-all").click(function(){
	$(".collapse-all").css('display', 'block');
	$(this).hide();
	$(".accordion-item > div.collapse").removeClass("collapse").addClass("collapsed").addClass("show");
	$('.accordion-header > button').removeClass("collapsed")
	});
	
	$(".collapse-all").on('click', function(){
	$(".expand-all").css('display', 'block');
	$(this).hide();
	$(".accordion-item > div.collapsed").addClass("collapse").removeClass('show');
	$('.accordion-header > button').addClass("collapsed")
	});
	
	
  // Toggle and Slide In or Out the Mobile Menu
  $('.navbar-toggler').click(function(){
    $(".navbar-container").toggleClass("nav-open");
    $("body").toggleClass("nav-open");
    $(this).toggleClass("active");
    $(".navbar-collapse").toggleClass("nav-open");
  });
  
$(".modal").modal();
$(".dropdown-toggle-cust").click(function(){
	$(this).parent(".dropdown-cust").toggleClass("active");

	if($(this).parent(".dropdown-cust").hasClass("active")){
	$(".dropdown-cust").removeClass("active");
	$(this).parent(".dropdown-cust").addClass("active");

	}


	});
	
document.multiselect('.searchFilters')
		.setCheckBoxClick("checkboxAll", function(target, args) {
		})

/** Start of Notification Bar Script **/

$('.notification_close').click(function() {
$(this).parents('.notification_fw').hide('slow');
});
  // Show the Notification after 2 seconds
  setTimeout('$(".notification_fw.bg-primary").show("slow")', 2000);
  setTimeout('$(".notification_fw.bg-success").show("slow")', 2000);
  setTimeout('$(".notification_fw.bg-warning").show("slow")', 2000);
  setTimeout('$(".notification_fw.bg-error").show("slow")', 2000);
  
  
/** End of Notification Bar Script **/

  // Hide the navbar when user scrolls down, show the navbar when the user scrolls up */
  /*var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
	  document.getElementById("navbar-autohide").style.top = "0";
	} else {
      document.getElementById("navbar-autohide").style.top = "-30px";
	}
	prevScrollpos = currentScrollPos;
  }
*/

$(".scroll-right").click(function() {
  event.preventDefault();
  $(".table-responsive").animate(
    {
      scrollLeft: "+=290px"
    },
    "slow"
  );
});

$(".scroll-left").click(function() {
  event.preventDefault();
  $(".table-responsive").animate(
    {
      scrollLeft: "-=290px"
    },
    "slow"
  );
});

	$("#alert_carousel .notification_close").click(function(){
		$("#alert_carousel").hide();
	});
	
	
	
	$('[data-bs-toggle="tooltip"]').tooltip();
	
	$(".popover-link").click(function(){
		$(".popover-content").hide();
		$(this).parent().children(".popover-content").show();
	});
	
	$(".popover-close").click(function(){
		$(".popover-content").hide();
	})
	
	
	




	$(".side-nav ul li .dropdown-toggle-cust").click(function(e){
	e.stopPropagation();
	});

	$(document).click(function(){
	$(".side-nav.collapsed .dropdown-cust").removeClass("active");
	});

	$(".side-nav-collapse").click(function(){
	$(this).toggleClass('collapsed');
	$(".side-nav").toggleClass('collapsed');
	$(".content").toggleClass('collapsed');



	});
	
	
	if($(window).width() <= 767)
	{  
	$(".side-nav ul li .dropdown-toggle-cust").click(function(e){
	e.stopPropagation();
	});

	$(document).click(function(){
	$(".side-nav .dropdown-cust").removeClass("active");
	});
	}
	

    // Change data table previous next text to icon (chevron)
$.extend(true, $.fn.dataTable.defaults.oLanguage.oPaginate, {
    sNext: '<i class="fal fa-chevron-right" ></i>',
    sPrevious: '<i class="fal fa-chevron-left" ></i>'
});
  // Render DataTables  
  $("#datatables-example").DataTable({
    responsive: true,
    colReorder: true,
	retrieve: true,

  });
  
// Change data table previous next text to icon (chevron)


	// Initiate AOS: Animate On Scroll
	AOS.init();
	

});


		if($(window).width() <= 767)
	{   
		$(".popover-link").click(function(){
		$(".popover-content").hide();
		$(".pop-overlay").show();
		$(this).parent().children(".popover-content").show();
	});
	
	$(".popover-close, .pop-overlay").click(function(){
		$(".popover-content").hide();
		$(".pop-overlay").hide();
	})

	}



