function tocaSom (audioSelector) {
   const element = document.querySelector (audioSelector);

   if (element && element.localName === 'audio') {
        element.play()
   }
   else {
    console.log('Elemento inexistente')
   }
}

const buttonList = document.querySelectorAll('.tecla');

for (let contador = 0; contador < buttonList.length; contador++) {

    const tecla = buttonList[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function() {
        tocaSom(idAudio)
    }


    tecla.onkeydown = e => {
        if (e.code === ('Enter' || 'Espace')){
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa')
    }


}
