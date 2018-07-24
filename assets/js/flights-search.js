$('.goingtime').daterangepicker({
    "autoApply": true,
    "singleDatePicker": true,
    "startDate": moment()
});
$('.flights-search__search-box').click(function (e) {
    $(this).addClass('active');
    e.stopPropagation();
});
$(document.body).click(function () {
    $('.flights-search__search-box').removeClass('active');
    $('.depart-destination.popup-result').removeClass('active');
})
$('.flights-search__search-box').click(function (e) {
    $('.depart-destination.popup-result').removeClass('active');
    e.stopPropagation();
})
$('.depart-destination.popup-result').click(function (e) {
    $(this).removeClass('active');
    e.stopPropagation();
})

$('.popup-input').click(function (e) {
    $('.depart-destination.popup-result').removeClass('active');
    var $target = $($(this).attr('data-popup-target'));
    $target.addClass('active');
    $('.flights-search__search-box').addClass('active');
    e.stopPropagation();
});
setTimeout(function () {
    $(".loading").removeClass("loading");
}, 3000)
