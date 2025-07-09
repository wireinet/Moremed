// USER
$(function(){
    function loginform(){
        const user = $('.user');
        const popupLogin = $('.popup--login-form');
        popup(user, popupLogin);
        let loginRequest = $('.login-form input[type="submit"]');
        loginRequest.on('click', function(e){
            let userLogin = $('.login-form input[name="username"]');
            let userPass = $('.login-form input[name="userpass"]');
            e.preventDefault();
            function checkFilled(){
                if (userLogin.val() == "" ){userLogin.addClass('error');}
                else {userLogin.removeClass('error');}

                if (userPass.val() == "" ){userPass.addClass('error');}
                else {userPass.removeClass('error');}
            }
            if (userLogin.val() != "" && userPass.val() != ""){
                userLogin.removeClass('error');
                userPass.removeClass('error');
                userLogin.addClass('access-granted');
                userPass.addClass('access-granted');
                setTimeout(function(){
                    popupLogin.removeClass('active');
                    enableScrollBody();
                    logined();
                }, 1000);
            }
            else {checkFilled();}

        });
    }
    loginform();
    function logined(){
        $('.user__ident').toggleClass('user__ident--logined');
        // И все что нужно сделать при залогиненном пользователе...
        // Загрузить аватар и тд..
    }
});