var audio = document.getElementById('bgm');
audio.volume = 0.07;

const soal = document.getElementById('soal');
modalTrue = new bootstrap.Modal(document.getElementById('modalTrue'));
modalFalse = new bootstrap.Modal(document.getElementById('modalFalse'));
modalEnd = new bootstrap.Modal(document.getElementById('modalEnd'));
modalintro = new bootstrap.Modal(document.getElementById('modalIntro'));

nadaSalah = new sound("../asset/sound_effect/good-6081.mp3");
nadaBetul = new sound("../asset/sound_effect/success-1-6297.mp3");

function opsi1() {
    x = 0;
    cekJawaban();
}

function opsi2() {
    x = 1;
    cekJawaban();
}

function opsi3() {
    x = 2;
    cekJawaban();
}


function cekJawaban() {
    if (listPertanyaan[soalNomor].pilihan[x].jawaban) {
        if (soalNomor < listPertanyaan.length - 1) {
            modalTrue.show();
            soalNomor++;
            nadaBetul.play();
        } else {
            modalEnd.show();
            nadaBetul.play();
        }
    } else {
        modalFalse.show();
        nadaSalah.play();
    }
    mulai();
}

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
    txtAngka.innerHTML = '<img src="../asset/image/textBilangan/txt' + bilangan + '.png" alt="1" class="txtAngka animate__animated animate__bounce">';
    txtAngka.classList.add('border', 'bg-white');
    Speech = new sound("../asset/speech/" + bilangan + ".mp3");
    Speech.play();
}

function mulai() {
    txtAngka.innerHTML = "";
    txtAngka.classList.remove('border', 'bg-white');
    bilangan = 0;
    document.getElementById('gambarSoal').innerHTML = listPertanyaan[soalNomor].benda.repeat(listPertanyaan[soalNomor].ulangi);
    document.getElementById('gambar1').src = listPertanyaan[soalNomor].pilihan[0].src;
    document.getElementById('gambar1').style.width = listPertanyaan[soalNomor].pilihan[0].size;
    document.getElementById('gambar2').src = listPertanyaan[soalNomor].pilihan[1].src;
    document.getElementById('gambar2').style.width = listPertanyaan[soalNomor].pilihan[1].size;

    if (listPertanyaan[soalNomor].pilihan[2].src == "") {
        document.getElementById('opsi3').style.display = "none";
    } else {
        document.getElementById('opsi3').style.display = "block";
        document.getElementById('gambar3').src = listPertanyaan[soalNomor].pilihan[2].src;
        document.getElementById('gambar3').style.width = listPertanyaan[soalNomor].pilihan[2].size;
    }

    soal.innerHTML = listPertanyaan[soalNomor].pertanyaan;
}

// AUDIO PADA INTRO
intro1 = setTimeout(function () {
    intro = new sound("../asset/speech/latihan1/intro1.mp3");
    intro.play();
}, 0);

intro2 = setTimeout(function () {
    intro = new sound("../asset/speech/latihan1/intro2.mp3");
    intro.play();
}, 7000);

intro3 = setTimeout(function () {
    intro = new sound("../asset/speech/latihan1/intro3.mp3");
    intro.play();
}, 15000);
intro4 = setTimeout(function () {
    intro = new sound("../asset/speech/latihan1/intro4.mp3");
    intro.play();
}, 22000);

function stopIntro(){
    intro.stop();
    clearTimeout(intro2);
    clearTimeout(intro3);
    clearTimeout(intro4);
}

// AUDIO PADA AKTIVITAS
function aktivitas(){
    aktivitas1 = setTimeout(function () {
        aktivitas1 = new sound("../asset/speech/latihan1/aktivitas1.mp3");
        aktivitas1.play();
    }, 0);
    
    aktivitas2 = setTimeout(function () {
        aktivitas = new sound("../asset/speech/latihan1/aktivitas2.mp3");
        aktivitas.play();
    }, 7000);
    
    aktivitas3 = setTimeout(function () {
        aktivitas = new sound("../asset/speech/latihan1/aktivitas3.mp3");
        aktivitas.play();
    }, 15000);
}
function stopAktivitas(){
    aktivitas1.stop();
    clearTimeout(aktivitas2);
    clearTimeout(aktivitas3);
    audio.pause();
}
mulai();
modalintro.show();