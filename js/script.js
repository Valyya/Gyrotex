$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


$(document).ready(function() {

	// вкладки с содержанием
        
        $(".tab_content").hide();
        $(".tab_content:first").show();
        /* в режиме вкладок */
        $("ul.tabs li").click(function () {
            $(".tab_content").hide();
            var activeTab = $(this).attr("rel");
            $("#" + activeTab).fadeIn();
            $("ul.tabs li").removeClass("active");
            $(this).addClass("active");
            $(".tab_accordion").removeClass("d_active");
            $(".tab_accordion[rel^='" + activeTab + "']").addClass("d_active");
        });
        /* в режиме аккордеона */
        $(".tab_accordion").click(function () {
            $(".tab_content").hide();
            var d_activeTab = $(this).attr("rel");
            $("#" + d_activeTab).fadeIn();
            $(".tab_accordion").removeClass("d_active");
            $(this).addClass("d_active");
            $("ul.tabs li").removeClass("active");
            $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
        });
        /* дополнительный класс tab_last, 
        чтобы добавить границу к правой 
        стороне последней вкладки. */
        $('ul.tabs li').last().addClass("tab_last");
});

