$(document).ready(() => {
    $("a").on("click", function (t) {
		t.preventDefault();
        window.location.replace(window.location.href);
	})

    $(".hide-input").on("focus", function () {
        $(this).attr("type", "text");
    })

    $(".hide-input").on("blur", function () {
        $(this).attr("type", "password");
    })

    $('.cb-input').on('keyup blur', function () {
        if ($(this).val().trim().length < 3) {
			$(this).addClass('cb-textfield__input--error');
            $(this).parent().children().last().show();
		} else {
            $(this).removeClass('cb-textfield__input--error');
            $(this).parent().children().last().hide();
		}
    })

    $('.submit-btn').on('click', function (e) {
        $(".cb-input").each(function () {
			if ($(this).val().trim().length < 3) {
                $(this).addClass('cb-textfield__input--error');
                $(this).parent().children().last().show();
                e.preventDefault();
            }
		});
    });
})