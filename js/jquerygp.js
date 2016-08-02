$("#gallery li img").hover(function(){
        $('#gallery li img').removeClass('change');
        $(this).addClass('change');
        $('#main-img').attr('src',$(this).attr('src'));
});

alert("Always click a picture, you never know what you'll find");