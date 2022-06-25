$(document).ready(function(){
    $('#filterIcon').click(function(){
        $('.filter-column').slideToggle('slow')
    });
    $('input:checkbox').click(function(){
        var box = $(this)
        if (box.is(':checked')) {
            /* $("input:checkbox[name='checkName3']").prop('checked', false);
            checkName3 : ده عاوزينه متغير في كل الاعمدة 
            فهستبدل السطر اللي فوق بالسطرين اللي تحت*/
            var group =  "input:checkbox[name=" + box.attr('name') + "]";
            $(group).prop('checked', false);
            box.prop('checked', true);
        }
    })
})