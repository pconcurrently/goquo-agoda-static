setTimeout(function () {
    $(".loading").removeClass("loading");

    $('#start-date-picker').daterangepicker({
        "autoApply": true,
        "startDate": moment(),
        "endDate": moment().add(1, 'days')
    });
}, 3000)

$('#destination-input').focus(function () {
    $('.destination-search-results').css('display', 'block');
    $('.search-result-backdrop').css('display', 'block');
    $('.occupancy-edit').css('display', 'none');
});

$('.occupancy-box').click(function () {
    $('.occupancy-edit').css('display', 'block');
    $('.destination-search-results').css('display', 'none');
    $('.search-result-backdrop').css('display', 'block');
});

$('.search-result-backdrop').click(function () {
    $(this).css('display', 'none');

    $('.popup-result').css('display', 'none');
})
$('.popup-result ul li').click(function () {
    $('.search-result-backdrop').css('display', 'none');
    $('.popup-result').css('display', 'none');
})

$(".search-button").click(function () {
    $(this).addClass('on-load');
    setTimeout(function () {
        location.href = "./search.html";
    }, 2500);
})

function setSpanText(unit, amount) {
    if (unit === 'Adults') {
        $('span.adults-text').text(amount + ' adults, ');
    } else if (unit === 'Children') {
        $('span.children-text').text(amount + ' children');
    } else {
        $('span.rooms').text(amount + ' rooms');
    }
}

$('span.minus').click(function () {
    var $amount = $(this).siblings('.amount');
    var $unit = $(this).siblings('.unit');

    var amount = $amount.attr('data-amount');
    var allowZero = $amount.attr('data-allow-zero');
    var unit = $unit.text();
    if (amount > 1 || (allowZero && amount == 1)) {
        amount--;
        $amount.attr('data-amount', amount);
        $amount.text(amount);

        setSpanText(unit, amount);
    };
})
$('span.plus').click(function () {
    var $amount = $(this).siblings('.amount');
    var $unit = $(this).siblings('.unit');

    var amount = $amount.attr('data-amount');
    var unit = $unit.text();

    amount++;
    $amount.attr('data-amount', amount);
    $amount.text(amount);

    setSpanText(unit, amount);
})
