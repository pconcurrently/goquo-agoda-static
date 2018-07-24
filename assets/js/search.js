var timer;

function setAmounts() {
    //- console.log($( "#slider-range" ).slider( "values", 0 ), $( "#slider-range" ).slider( "values", 1 ));
    $("#amount1").val($("#slider-range").slider("values", 0));
    $("#amount2").val($("#slider-range").slider("values", 1));
}

$("#slider-range").slider({
    range: true,
    min: 0,
    max: 15000000,
    step: 500,
    values: [1800000, 9000000],
    slide: function (event, ui) {
        setAmounts();
    }
});

setTimeout(function () {
    $(".loading").removeClass("loading");

    $('#start-date-picker').daterangepicker({
        "autoApply": true,
        "startDate": moment(),
        "endDate": moment().add(1, 'days')
    }, function (start, end, label) {});

    setAmounts();
    $(document).tooltip({
        position: {
            my: "center top-40",
            at: "center top"
        }
    });
}, 3000)

$('.hotel-thumbnails img').hover(function () {
    var thisPreview = $($(this).parents().parents().parents(".hotel-item").children('.thumbnail-preview'));
    var source_image = $(this).attr('src');
    thisPreview.children('img').attr('src', source_image);
    thisPreview.css('display', 'block');
    if (timer) {
        clearTimeout(timer);
    }
})

$('.hotel-thumbnails img').mouseleave(function () {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        $('.thumbnail-preview img').attr('src', '');
        $('.thumbnail-preview').css('display', 'none');
    }, 200)
})

$('.hotel-item').click(function () {
    location.href = "./hotel-detail.html";
})

function initMap() {
    map = new google.maps.Map(document.getElementById('google-map'), {
        center: {
            lat: 21.008164,
            lng: 105.791835
        },
        zoom: 16
    });
}

$('.occupancy-box').click(function () {
    $('.occupancy-edit').css('display', 'block');
    $('.search-result-backdrop').css('display', 'block');
});
$('#destination-input').click(function () {
    $('.destination-search-results').css('display', 'block');
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
