var firstForm = `
        <div class="oneform">
            <div class="form-row">
                <div class="input-wrapper">
                    <input value="Hanoi (HAN)" />
                    <div class="depart-return popup-result">
                        <ul>
                            <li title="Ha Noi, Viet Nam">
                                <div class="result-item"></div>
                                <i class="fa fa-space-shuttle"> </i>
                                <span>&nbsp Ha Noi, Viet Nam</span>
                            </li>
                        </ul>
                    </div>
                    <div class="input-addon right">
                        <span class="fa fa-exchange"></span>
                    </div>
                </div>
                <div class="input-wrapper">
                    <input placeholder="To where?" />
                    <div class="depart-return popup-result">
                        <ul>
                            <li title="Sai Gon, Viet Nam">
                                <div class="result-item"></div>
                                <i class="fa fa-space-shuttle"> </i>
                                <span>&nbsp Sai Gon, Viet Nam</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="input-wrapper">
                    <input placeholder="Depart - Return" class="addon-left datetimeinput" />
                    <div class="input-addon">
                        <span class="fa fa-calendar-o"></span>
                    </div>
                </div>
                <div class="input-wrapper">
                    <select class="goingtime">
                        <option value="Anytime">Anytime</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                    </select>
                    <div class="sum-traveler">1 adult, Economy</div>
                    <div class="cabin-traveler popup-result">
                        <h4 class="title">Cabin class</h4>
                        <div class="cabin-class-wrapper">
                            <div class="checkbox-2">
                                <input type="radio" name="cabinclass" id="cc1" value="Economy" checked="checked" />
                                <label for="cc1">
                                    <span>Economy</span>
                                </label>
                            </div>
                            <div class="checkbox-2">
                                <input type="radio" name="cabinclass" id="cc2" value="Business" />
                                <label for="cc2">
                                    <span>Business</span>
                                </label>
                            </div>
                            <div class="checkbox-2">
                                <input type="radio" name="cabinclass" id="cc3" value="Premium Economy" />
                                <label for="cc3">
                                    <span>Premium Economy</span>
                                </label>
                            </div>
                            <div class="checkbox-2">
                                <input type="radio" name="cabinclass" id="cc4" value="First" />
                                <label for="cc4">
                                    <span>First</span>
                                </label>
                            </div>
                            <div class="checkbox-2">
                                <input type="radio" name="cabinclass" id="cc5" value="Multiple" />
                                <label for="cc5">
                                    <span>Multiple</span>
                                </label>
                            </div>
                        </div>
                        <h4 class="title">Travelers</h4>
                        <div class="plusminusrow">
                            <span class="unit">Adults</span>
                            <div class="widgets">
                                <span class="minus">
                                    <i class="fa fa-minus"></i>
                                </span>
                                <span data-amount="1" class="amount">1</span>
                                <span class="plus">
                                    <i class="fa fa-plus"></i>
                                </span>
                            </div>
                        </div>
                        <div class="plusminusrow">
                            <span class="unit">Chilren</span>
                            <div class="widgets">
                                <span class="minus">
                                    <i class="fa fa-minus"></i>
                                </span>
                                <span data-amount="0" class="amount">0</span>
                                <span class="plus">
                                    <i class="fa fa-plus"></i>
                                </span>
                            </div>
                        </div>
                        <div class="plusminusrow">
                            <span class="unit">Infants</span>
                            <div class="widgets">
                                <span class="minus">
                                    <i class="fa fa-minus"></i>
                                </span>
                                <span data-amount="0" data-allow-zero="true" class="amount">0</span>
                                <span class="plus">
                                    <i class="fa fa-plus"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-row thirdrow">
                <div class="input-wrapper">
                    <select>
                        <option value="1">Economy</option>
                        <option value="2">Business</option>
                        <option value="3">Premium Economy</option>
                        <option value="4">First</option>
                    </select>
                </div>
            </div>
        </div>   
        `;
var oneform = `
        <div class="oneform">
            <div class="form-row">
                <div class="input-wrapper">
                    <input value="Hanoi (HAN)"/>
                    <div class="depart-return popup-result">
                        <ul>
                        <li title="Ha Noi, Viet Nam">
                            <div class="result-item"></div>
                            <i class="fa fa-space-shuttle"> </i><span>&nbsp Ha Noi, Viet Nam</span>
                        </li>
                        </ul>
                    </div>
                    <div class="input-addon right"><span class="fa fa-exchange"></span></div>
                </div>
                <div class="input-wrapper">
                    <input placeholder="To where?"/>
                    <div class="depart-return popup-result">
                        <ul>
                        <li title="Sai Gon, Viet Nam">
                            <div class="result-item"></div>
                            <i class="fa fa-space-shuttle"> </i><span>&nbsp Sai Gon, Viet Nam</span>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="input-wrapper">
                    <input placeholder="Depart - Return" class="addon-left datetimeinput"/>
                    <div class="input-addon"><span class="fa fa-calendar-o"></span></div>
                </div>
                <div class="input-wrapper">
                    <select class="goingtime">
                        <option value="Anytime">Anytime</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                    </select>
                </div>
            </div>
            <div class="form-row thirdrow">
                <div class="input-wrapper">
                    <select>
                        <option value="1">Economy</option>
                        <option value="2">Business</option>
                        <option value="3">Premium Economy</option>
                        <option value="4">First</option>
                    </select>
                </div>
            </div>
        </div>

        `;

var cabinTraveler = `
        <div class="sum-traveler">1 adult, Economy</div>
        <div class="cabin-traveler popup-result">
            <h4 class="title">Cabin class</h4>
            <div class="cabin-class-wrapper">
                <div class="checkbox-2">
                <input type="radio" name="cabinclass" id="cc-21" value="Economy" checked="checked"/>
                <label for="cc-21"><span>Economy</span></label>
                </div>
                <div class="checkbox-2">
                <input type="radio" name="cabinclass" id="cc-22" value="Business"/>
                <label for="cc-22"><span>Business</span></label>
                </div>
                <div class="checkbox-2">
                <input type="radio" name="cabinclass" id="cc-23" value="Premium Economy"/>
                <label for="cc-23"><span>Premium Economy</span></label>
                </div>
                <div class="checkbox-2">
                <input type="radio" name="cabinclass" id="cc-24" value="First"/>
                <label for="cc-24"><span>First</span></label>
                </div>
                <div class="checkbox-2">
                <input type="radio" name="cabinclass" id="cc-25" value="Multiple"/>
                <label for="cc-25"><span>Multiple</span></label>
                </div>
            </div>
            <h4 class="title">Travelers</h4>
            <div class="plusminusrow"><span class="unit">Adults</span>
                <div class="widgets"><span class="minus"><i class="fa fa-minus"></i></span><span data-amount="1" class="amount">1</span><span class="plus"><i class="fa fa-plus"></i></span></div>
            </div>
            <div class="plusminusrow"><span class="unit">Chilren</span>
                <div class="widgets"><span class="minus"><i class="fa fa-minus"></i></span><span data-amount="0" class="amount">0</span><span class="plus"><i class="fa fa-plus"></i></span></div>
            </div>
            <div class="plusminusrow"><span class="unit">Infants</span>
                <div class="widgets"><span class="minus"><i class="fa fa-minus"></i></span><span data-amount="0" data-allow-zero="true" class="amount">0</span><span class="plus"><i class="fa fa-plus"></i></span></div>
            </div>
        </div>
        `;
var sum = 1;
var cabinClass = 'Economy';
var setSum = function (sumTraveler) {
    var $sumTraveler = $(sumTraveler);
    var str = '';
    if (sum === 1) {
        str = `1 adult, ${cabinClass}`;
    } else {
        str = `${sum} travelers, ${cabinClass}`;
    }
    $sumTraveler.text(str);
}

var attachEvents = function () {
    sum = 1;
    var cabinClass = 'Economy';
    
    $('.sum-traveler').click(function (e) {
        $('.cabin-traveler').addClass('active');
        e.stopPropagation();
    })
    $(document.body).click(function () {
        $('.cabin-traveler').removeClass('active');
    })
    $('.cabin-traveler').click(function (e) {
        e.stopPropagation();
    })
    $('span.minus').click(function () {
        var $amount = $(this).siblings('.amount');
        var amount = $amount.attr('data-amount');
        if (amount > 0 && sum > 1) {
            amount--;
            $amount.attr('data-amount', amount);
            $amount.text(amount);
            sum--;
            setSum($(this).parents().parents().parents().siblings('.sum-traveler'));
        }
    })
    $('span.plus').click(function () {
        var $amount = $(this).siblings('.amount');
        var amount = $amount.attr('data-amount');
        if (amount < 10) {
            amount++;
            $amount.attr('data-amount', amount);
            $amount.text(amount);
            sum++;
            setSum($(this).parents().parents().parents().siblings('.sum-traveler'));
        }
    })
    $('input:radio[name=cabinclass]').change(function () {
        cabinClass = this.value;
        if (cabinClass === 'Multiple') {
            $('.multi-city').trigger('click');
        } else {
            setSum($(this).parents().parents().parents().siblings('.sum-traveler'));
        }
    })

}

var resetActive = function (el) {
    $(el).siblings().removeClass('active');
    $(el).addClass('active');
}


$('.datetimeinput').daterangepicker({
    "autoApply": true,
    "startDate": moment(),
    "endDate": moment().add(1, 'days')
});

$('.one-way').click(function () {
    resetActive(this);
    $('.flights-form').removeClass('multi');
    $('.flights-form__body').html(firstForm);
    attachEvents();
    $('.datetimeinput').daterangepicker({
        "autoApply": true,
        singleDatePicker: true,
        "startDate": moment()
    });
})
$('.round-trip').click(function () {
    resetActive(this);
    $('.flights-form').removeClass('multi');
    $('.flights-form__body').html(firstForm);
    attachEvents();
    $('.datetimeinput').daterangepicker({
        "autoApply": true,
        "startDate": moment(),
        "endDate": moment().add(1, 'days')
    });
})
$('.multi-city').click(function () {
    $('.flights-form').addClass('multi');
    if (!$(this).hasClass('active')) {
        resetActive(this);
        $('.flights-form__body').append(oneform, oneform);
        $('.datetimeinput').daterangepicker({
            "autoApply": true,
            singleDatePicker: true,
            "startDate": moment()
        });
        $('.cabin-traveler')[0].remove();
        $('.buttons-row.second-row .wrapper').html(cabinTraveler);
        attachEvents();
    }
})
$('button.remove').click(function () {
    if ($('.flights-form__body > .oneform').length > 1) {
        $('.flights-form__body .oneform:last-child').remove();
        if ($('.flights-form__body > .oneform').length === 1) {
            $('button.remove').attr('disabled', true);
        }
    }
})
$('button.add').click(function () {
    if ($('.flights-form__body > .oneform').length < 6) {
        $('.flights-form__body').append(oneform);
        $('button.remove').attr('disabled', false);
    }
})
$('button.clearall').click(function () {
    $('.flights-form__body').html(oneform + oneform + oneform);
    $('.datetimeinput').daterangepicker({
        "autoApply": true,
        singleDatePicker: true,
        "startDate": moment()
    });
})

attachEvents();