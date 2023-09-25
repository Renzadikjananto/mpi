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
        if (soalNomor < listPertanyaan.length) {
            betul++;
        }
    } else {
        salah++;
    }

    soalNomor++;
    if(soalNomor == 6){
        modalEnd.show();
        document.getElementById("jawaban").innerHTML = ('<h5>Jawaban Betul : ' + betul + '</h5><h5>Jawaban Salah : ' + salah + '</h5>' )
    }
    mulai();
}

function mulai() {
    txtAngka.innerHTML = "";
    txtAngka.classList.remove('border', 'bg-white');
    bilangan = 0;
    txtAngka1.innerHTML = "";
    txtAngka1.classList.remove('border', 'bg-white');
    bilangan1 = 0;
    document.getElementById('gambarSoal').innerHTML = listPertanyaan[soalNomor].benda.repeat(listPertanyaan[soalNomor].ulangi);
    document.getElementById('gambarSoal1').innerHTML = listPertanyaan[soalNomor].benda1.repeat(listPertanyaan[soalNomor].ulangi1);
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
mulai();