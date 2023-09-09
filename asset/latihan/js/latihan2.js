const soal = document.getElementById('soal');
modalTrue = new bootstrap.Modal(document.getElementById('modalTrue'));
modalFalse = new bootstrap.Modal(document.getElementById('modalFalse'));
modalEnd = new bootstrap.Modal(document.getElementById('modalEnd'));

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
    if(soalNomor == 4){
        soalNomor = 3;
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
    document.getElementById('gambar1').src = listPertanyaan[soalNomor].pilihan[0].src;
    document.getElementById('gambar2').src = listPertanyaan[soalNomor].pilihan[1].src;

    if (listPertanyaan[soalNomor].pilihan[2].src == "") {
        document.getElementById('opsi3').style.display = "none";
    } else {
        document.getElementById('opsi3').style.display = "block";
        document.getElementById('gambar3').src = listPertanyaan[soalNomor].pilihan[2].src;
    }

    if (listPertanyaan[soalNomor].pilihan[3].src != "") {
        document.getElementById('opsi4').style.display = "block";
        document.getElementById('gambar4').src = listPertanyaan[soalNomor].pilihan[3].src;
    } else {
        document.getElementById('opsi4').style.display = "none";
    }

    soal.innerHTML = listPertanyaan[soalNomor].pertanyaan;
}
mulai();