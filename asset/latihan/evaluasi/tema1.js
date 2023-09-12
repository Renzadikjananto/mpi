const soal = document.getElementById('soal');
modalEnd = new bootstrap.Modal(document.getElementById('modalEnd'));
var betul = 0;
var salah = 0;

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
            betul++;
        }
    } else {
        salah++;
    }

    soalNomor++;
    if(soalNomor == listPertanyaan.length){
        modalEnd.show();
        document.getElementById("betul").innerHTML = ('<p>' + parseFloat(betul/listPertanyaan.length)*100 + '</p>')
    }
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