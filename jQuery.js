$(document).ready(function(){
    $('img').click(function(){
        var firstImg = $(this).attr('src');
        var secondImg = $(this).attr('data-alt-src');
        $(this).attr('src',secondImg);
        $(this).attr('data-alt-src',firstImg);
    })
    
    // $('img').click(function(){
    //     $(this).fadeOut();
    // })
})