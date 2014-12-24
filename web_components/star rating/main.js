/**
 * Created by labriko on 21.12.14.
 */

$(document).ready(function() {
    var classList = $('.star-rating').attr('class');
    classList = classList.split(' ');
    console.log(classList);


    for (var i = 0; i < classList.length; i++) {
        console.log(classList[i]);
        if (/star\d/.test(classList[i])) {
            var num = classList[i].substr(4, 5);
            console.log(num);
            $(".star-rating > input[name='star-rating']:nth-of-type(" + num + ")").prop("checked", "true");

        }
    }
});