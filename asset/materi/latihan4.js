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
var bilangan2 = 0;
var bilangan3 = 0;

function hitung(x) {
    bilangan++;
    var txtAngka = document.getElementById('txtAngka');
    var Operasi = document.getElementById('operasi');
    var hasil = document.getElementById('samaDengan');
    if (bilangan != 0 && bilangan2 != 0) {
        Operasi.innerHTML = '<h1><i class="fa-solid fa-'+ listPertanyaan[soalNomor].operasi +' fa-2xl "></i></h1>'
        hasil.innerHTML = '<h1><i class="fa-solid fa-equals fa-2xl"></i></h1>'
    }
    x.classList.replace('animate__bounceIn', 'animate__flash');
    x.classList.add('shadow-sm');
    txtAngka.innerHTML = '<img src="../../asset/image/textBilangan/txt' + bilangan + '.png" alt="1" class="txtAngka animate__animated animate__bounce">';
    txtAngka.classList.add('border', 'bg-white');
    Speech = new sound("../asset/speech/" + bilangan + ".mp3");
    Speech.play();
    if (bilangan == (listPertanyaan[soalNomor].benda1.length)) {
        setTimeout(function () {
            kesimpulan();
        }, 3000);
    }
}

function hitung2(x) {
    bilangan2++;
    var txtAngka = document.getElementById('txtAngka2');
    var Operasi = document.getElementById('operasi');
    var hasil = document.getElementById('samaDengan');
    if (bilangan != 0 && bilangan2 != 0) {
        Operasi.innerHTML = '<h1><i class="fa-solid fa-'+ listPertanyaan[soalNomor].operasi +' fa-2xl "></i></h1>'
        hasil.innerHTML = '<h1><i class="fa-solid fa-equals fa-2xl"></i></h1>'
    }
    x.classList.replace('animate__bounceIn', 'animate__flash');
    x.classList.add('shadow-sm');
    txtAngka.innerHTML = '<img src="../../asset/image/textBilangan/txt' + bilangan2 + '.png" alt="1" class="txtAngka animate__animated animate__bounce">';
    txtAngka.classList.add('border', 'bg-white');
    Speech = new sound("../asset/speech/" + bilangan2 + ".mp3");
    Speech.play();
    if (bilangan2 == (listPertanyaan[soalNomor].benda2.length)) {
        setTimeout(function () {
            kesimpulan();
        }, 3000);
    }
}

function kesimpulan() {
    if (bilangan == listPertanyaan[soalNomor].benda1.length && bilangan2 == listPertanyaan[soalNomor].benda2.length) {
        var txtAngka = document.getElementById('txtAngka3');
        if (listPertanyaan[soalNomor].operasi == "minus") {
            x = listPertanyaan[soalNomor].benda1.length - listPertanyaan[soalNomor].benda2.length;
        }
        else{
            x = listPertanyaan[soalNomor].benda1.length + listPertanyaan[soalNomor].benda2.length;
        }
        
        txtAngka.innerHTML = '<img src="../../asset/image/textBilangan/txt' + x + '.png" alt="1" class="txtAngka animate__animated animate__bounce">';
        txtAngka.classList.add('border', 'bg-white');
    }
}

function mulai() {
    txtAngka.innerHTML = "";
    txtAngka.classList.remove('border', 'bg-white');
    txtAngka2.innerHTML = "";
    txtAngka2.classList.remove('border', 'bg-white');
    txtAngka3.innerHTML = "";
    txtAngka3.classList.remove('border', 'bg-white');
    document.getElementById('operasi').innerHTML = "";
    document.getElementById('samaDengan').innerHTML = "";
    bilangan = 0;
    bilangan2 = 0;
    listPertanyaan[soalNomor].benda1.forEach(myFunction);
    listPertanyaan[soalNomor].latar.forEach(myFunction);

    document.getElementById('gambarSoal').innerHTML = listPertanyaan[soalNomor].benda1 + listPertanyaan[soalNomor].benda2 + listPertanyaan[soalNomor].benda3;
    document.getElementById('latar').innerHTML = listPertanyaan[soalNomor].latar;

    function myFunction(item, index, arr) {
        arr[index] = item;
    }

    soal.innerHTML = listPertanyaan[soalNomor].pertanyaan;
    $(function () {
        $(".click").draggable();
        $("#txtAngka").draggable();
        $("#txtAngka2").draggable();
        $("#txtAngka3").draggable();
    });
}
mulai();