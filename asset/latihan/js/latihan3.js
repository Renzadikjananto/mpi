var audio = document.getElementById('bgm');
audio.volume = 0.3;

const soal = document.getElementById('soal');
modalTrue = new bootstrap.Modal(document.getElementById('modalTrue'));
modalFalse = new bootstrap.Modal(document.getElementById('modalFalse'));
modalEnd = new bootstrap.Modal(document.getElementById('modalEnd'));

nadaSalah = new sound("../asset/sound_effect/good-6081.mp3");
nadaBetul = new sound("../asset/sound_effect/success-1-6297.mp3");

var pilihan1 = document.getElementById("opsi1");
var pilihan2 = document.getElementById("opsi2");
var pilihan3 = document.getElementById("opsi3");

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

function opsi4() {
    x = 3;
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
    if(soalNomor == 9){
        soalNomor = 8;
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

function mulai() {
    document.getElementById('soalGambar').src = listPertanyaan[soalNomor].src;
    document.getElementById('soalGambar').style.width = listPertanyaan[soalNomor].size;
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

    if (listPertanyaan[soalNomor].pilihan[3].src != "") {
        document.getElementById('opsi4').style.display = "block";
        document.getElementById('gambar4').src = listPertanyaan[soalNomor].pilihan[3].src;
    } 

    if(soalNomor >= 6){
        pilihan1.classList.add("border", "border-3", "rounded-3");
        pilihan2.classList.add("border", "border-3", "rounded-3");
        pilihan3.classList.add("border", "border-3", "rounded-3");
    }else if (soalNomor < 6){
        pilihan1.classList.remove("border", "border-3", "rounded-3");
        pilihan2.classList.remove("border", "border-3", "rounded-3");
        pilihan3.classList.remove("border", "border-3", "rounded-3");
    }

    soal.innerHTML = listPertanyaan[soalNomor].pertanyaan;
}
mulai();