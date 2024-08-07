/* Trigger Animation */

$(document).ready(function() {
    $('a').on('click', function() {
        $('.container').addClass('is-active');
        $(this).remove();
        $('.text').show(); // Показать текст после нажатия кнопки
    });
});