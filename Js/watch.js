$(document).ready(function(){
    $('#textShow').click(function(){
        read();
        // if ($('#dots').css('display', 'none')){
        //     $('#dots').css('display', 'inline')
        //     $('#more').css('display', 'none')
        //     $(this).text('عرض عناصر اقل');
        // }
        // else {
        //     $('#dots').css('display', 'none')
        //     $('#more').css('display', 'inline')
        //     $(this).text('عرض المزيد');
        // }
    });
    $('.reply').click(function(){
        $(this).parents('div.row').next('div.card').toggle();
    })
});
function read(){
    var dots = document.getElementById('dots');
    var more = document.getElementById('more');
    var btn = document.getElementById('textShow');
    if(dots.style.display === 'none'){
        dots.style.display = 'inline';
        btn.innerHTML = 'عرض المزيد';
        more.style.display = 'none';
    } else {
        dots.style.display = 'none';
        btn.innerHTML = 'عرض عناصر أقل';
        more.style.display = 'inline';
    }
}