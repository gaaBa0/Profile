function expa() {
    var barraLateral = document.querySelector('.barra-lateral');

    var larguraAtual = window.getComputedStyle(barraLateral).width;

    larguraAtual = parseFloat(larguraAtual);

    var exp = document.querySelector('div.expand')

    var perfil = document.querySelector('div.perf')

    var info = document.querySelector('div.info')

    var insta = document.querySelector('div.insta')

    var git = document.querySelector('div.git')

    if (larguraAtual === 25) {
        barraLateral.style.width = '150px';
        exp.innerHTML = '<div class="gg-arrow-left-o" onclick="expa()"></div>'
        exp.style.left = '140px'
        perfil.innerHTML = '<div class="gg-profile"></div> <div class="perfi">Perfil</div>'
        info.innerHTML = '<div class="gg-info"></div> <div class="perfi">Sobre Mim</div>'
        insta.innerHTML = '<div class="gg-instagram"></div> <div class="perfi">Instagram</div>'
        git.innerHTML = '<div class="gg-git-branch"></div> <div class="perfi" style="margin-left: 35px;">GitHub</div>'
    } else {
        barraLateral.style.width = '25px';
        exp.innerHTML = '<div class="gg-arrow-right-o" onclick="expa()"></div>'
        exp.style.left = '10px'
        perfil.innerHTML = '<div class="gg-profile"></div>'
        info.innerHTML = '<div class="gg-info"></div>'
        insta.innerHTML = '<div class="gg-instagram"></div>'
        git.innerHTML = '<div class="gg-git-branch"></div>'
    }
}