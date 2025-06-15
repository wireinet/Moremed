// USER
$(function(){
    const user = $('.user');
    const userIdent = $('.user__ident');
    user.click(function(){
        userIdent.toggleClass('user__ident--logined');
        alert('Welcome to our site!');
    });
});