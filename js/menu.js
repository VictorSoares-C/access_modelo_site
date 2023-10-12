$(document).ready(function() {
    // Quando o botão de menu é clicado
    $(".menu-toggle").on("click", function() {
        // Seleciona o menu de navegação pelo ID
        const menuNav = $("#menu-nav");

        // Verifica se o menu está ativo ou não e alterna a classe 'menu-active' conforme necessário
        if (menuNav.hasClass("menu-active")) {
            menuNav.removeClass("menu-active");
        } else {
            menuNav.addClass("menu-active");
        }
    });

    // Fecha o menu ao clicar em um link
    $("#menu-nav a").on("click", function() {
        $("#menu-nav").removeClass("menu-active");
    });
});
