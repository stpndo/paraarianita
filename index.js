const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('la quiero bastantee mi arinita<3 disculpeme por a veces hacerle renegar:c solo tengo ojos para usted y eres tu la q me tiene loquillo .. se que no nos veremos seguido pero uno se las puede ingeniar xd, como le dije q con tal solo apreciar su belleza, darle un abrazito y llenarnos de besos ya es mucho para mi<3 muchos besitos para ti mi amor ya no esta sola<33.  ')
});

ayaBtn.addEventListener('click',function () {
    alert('okk, me hiciste sentir mal')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})

nouBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nouBtn.style.setProperty('top',randomY+'%');
    nouBtn.style.setProperty('left',randomX+'%');
    nouBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})