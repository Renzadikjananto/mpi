var audio = document.getElementById('bgm');
audio.volume = 0.07;

const soal = document.getElementById('soal');
modalTrue = new bootstrap.Modal(document.getElementById('modalTrue'));
modalFalse = new bootstrap.Modal(document.getElementById('modalFalse'));
modalEnd = new bootstrap.Modal(document.getElementById('modalEnd'));

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

function lanjut() {
    if (soalNomor == listPertanyaan.length - 1) {
        soalNomor = listPertanyaan.length - 2;
    }
    soalNomor++;
    mulai();
}

function kembali() {
    if (soalNomor == 0) {
        soalNomor = 1;
    }
    soalNomor--;
    mulai();
}

var bilangan = 0;

function hitung(x) {
    bilangan++;
    var txtAngka = document.getElementById('txtAngka');
    x.classList.replace('animate__bounceIn', 'animate__flash');
    x.classList.add('shadow-sm');
    txtAngka.innerHTML = '<img src="../../asset/image/textBilangan/txt' + bilangan + '.png" alt="1" class="txtAngka animate__animated animate__bounce">';
    txtAngka.classList.add('border', 'bg-white');
    Speech = new sound("../asset/speech/" + bilangan + ".mp3");
    Speech.play();
    if (bilangan == (listPertanyaan[soalNomor].benda.length)) {
        setTimeout(function () {
            kesimpulan();
        }, 3000);
    }
}

function kesimpulan() {
    // Speech2 = new sound("../asset/speech/" + bilangan + ".mp3");
    // Speech2.play();
}



function mulai() {
    txtAngka.innerHTML = "";
    txtAngka.classList.remove('border', 'bg-white');
    bilangan = 0;
    listPertanyaan[soalNomor].benda.forEach(myFunction);
    listPertanyaan[soalNomor].latar.forEach(myFunction);

    document.getElementById('gambarSoal').innerHTML = listPertanyaan[soalNomor].benda;
    document.getElementById('latar').innerHTML = listPertanyaan[soalNomor].latar;

    function myFunction(item, index, arr) {
        arr[index] = item;
    }

    soal.innerHTML = listPertanyaan[soalNomor].pertanyaan;
    $(function () {
        $(".click").draggable();
    });
}
mulai();