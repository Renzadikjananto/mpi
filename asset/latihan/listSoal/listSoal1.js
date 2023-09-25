let soalNomor = 0;

let listPertanyaan = [
    {
        pertanyaan: "ada berapa banyak potongan buah semangka?",
        benda: '<img src="../asset/image/semangka.png" alt="1" class="click semangka m-3 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="width: 13%">',
        ulangi: 5,
        pilihan: [
            {jawaban:true, src: "../asset/image/textBilangan/txt5.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt1.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt3.png", size: "50%"}
        ]
    },
    {
        pertanyaan: "ada berapa jumlah buah apel?",
        benda: '<img src="../asset/image/apel.png" alt="1" class="click semangka mx-5 my-3" onclick="hitung(this); this.onclick=null" style="width: 10%">',
        ulangi : 7,
        pilihan: [
            {jawaban:false, src: "../asset/image/textBilangan/txt9.png", size: "50%"},
            {jawaban:true, src: "../asset/image/textBilangan/txt7.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt8.png", size: "50%"}
        ]
    },
    {
        pertanyaan: "ada berapa jumlah buah jeruk?",
        benda: '<img src="../asset/image/jeruk.png" alt="1" class="click semangka my-3 mx-3" onclick="hitung(this); this.onclick=null" style="width: 10%">',
        ulangi : 9,
        pilihan: [
            {jawaban:false, src: "../asset/image/textBilangan/txt2.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt4.png", size: "50%"},
            {jawaban:true, src: "../asset/image/textBilangan/txt9.png", size: "50%"}
        ]
    },
    {
        pertanyaan: "ada berapa jumlah donat cokelat?",
        benda: '<img src="../asset/image/donat1.png" alt="1" class="click semangka m-2 my-4" onclick="hitung(this); this.onclick=null">',
        ulangi : 14,
        pilihan: [
            {jawaban:true, src: "../asset/image/textBilangan/txt14.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt17.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt19.png", size: "50%"}
        ]
    },
    {
        pertanyaan: "ada berapa jumlah donat putih?",
        benda: '<img src="../asset/image/donat3.png" alt="1" class="click semangka m-2 my-4" onclick="hitung(this); this.onclick=null">',
        ulangi : 16,
        pilihan: [
            {jawaban:false, src: "../asset/image/textBilangan/txt14.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt18.png", size: "50%"},
            {jawaban:true, src: "../asset/image/textBilangan/txt16.png", size: "50%"}
        ]
    },
    {
        pertanyaan: "sekarang coba kalian pilih buah apa yang jumlahnya 5?",
        benda: '<img src="../asset/image/textBilangan/txt5.png" alt="1" class="click angkaSoal">',
        ulangi : 1,
        pilihan: [
            {jawaban:true, src: "../asset/image/latihan2/5jeruk.png", size: "100%"},
            {jawaban:false, src: "../asset/image/latihan2/9semangka.png", size: "100%"},
            {jawaban:false, src: " ../asset/image/latihan2/7apel.png", size: "100%"}
        ]
    },
    {
        pertanyaan: "sekarang coba kalian pilih bola apa yang jumlahnya 10?",
        benda: '<img src="../asset/image/textBilangan/txt10.png" alt="1" class="click angkaSoal">',
        ulangi : 1,
        pilihan: [
            {jawaban:false, src: "../asset/image/latihan1/12bolu.png", size: "100%"},
            {jawaban:false, src: "../asset/image/latihan1/14donat.png", size: "100%"},
            {jawaban:true, src: "../asset/image/latihan1/10donat.png", size: "100%"}
        ]
    },
    {
        pertanyaan: "sekarang coba kalian pilih bola apa yang jumlahnya 14",
        benda: '<img src="../asset/image/textBilangan/txt14.png" alt="1" class="click angkaSoal">',
        ulangi : 1,
        pilihan: [
            {jawaban:false, src: "../asset/image/latihan1/10donat.png", size: "100%"},
            {jawaban:true, src: "../asset/image/latihan1/14donat.png", size: "100%"},
            {jawaban:false, src: "../asset/image/latihan1/12bolu.png", size: "100%"}
        ]
    },
    {
        pertanyaan: "sekarang coba kalian pilih buah apa yang jumlahnya 9?",
        benda: '<img src="../asset/image/textBilangan/txt9.png" alt="1" class="click angkaSoal">',
        ulangi : 1,
        pilihan: [
            {jawaban:false, src: "../asset/image/latihan2/16jeruk.png", size: "100%"},
            {jawaban:false, src: "../asset/image/latihan2/14apel.png", size: "100%"},
            {jawaban:true, src: "../asset/image/latihan2/9semangka.png", size: "100%"}
        ]
    },
    {
        pertanyaan: "sekarang coba kalian pilih buah apa yang jumlahnya 16?",
        benda: '<img src="../asset/image/textBilangan/txt16.png" alt="1" class="click angkaSoal">',
        ulangi : 1,
        pilihan: [
            {jawaban:false, src: "../asset/image/latihan2/14apel.png", size: "100%"},
            {jawaban:false, src: "../asset/image/latihan2/9semangka.png", size: "100%"},
            {jawaban:true, src: "../asset/image/latihan2/16jeruk.png", size: "100%"}
        ]
    }
]