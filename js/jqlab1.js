$('p:eq(1)').attr('id', 'sp');
$('#fp').remove();
$('#fdiv').css({
    backgroundColor: 'grey',
    color: 'white'
}
);

$("button").click(function(){
    $('#sp').after("<p>Hello user</p>");
});


$('#4p').hide();

$('#sdiv').hover(
    function () {
        $('#4p').text('About to select a link').show();
    },
    function () {
        $('#4p').hide();
    }
)