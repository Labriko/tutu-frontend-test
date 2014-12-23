/**
 * Created by Labriko on 21.12.2014.
 */

$(document).ready(function() {
    var progressbar = $('#progressbar'),
        max = progressbar.attr('max'),
        loadingTime = 5,
        time = (1000/max)*loadingTime,
        value = progressbar.val();

    var loading = function() {
        value += 1;

        //Проставляем текущее значение самому прогрессбару
        addValue = progressbar.val(value);

        //Проставляем текущее значение в спан
        $('.progress-value').html(value + '%');

        if (value == max) {
            clearInterval(animate);
        }
    };

    var animate = setInterval(function() {
        loading();
    }, time);
});