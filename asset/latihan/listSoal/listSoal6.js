let soalNomor = 0;

let listPertanyaan = [
    {
        pertanyaan: "ada 5 donat cokelat dan 4 donat putih, berapa jumlah semua donat yang ada?",
        benda: '<img src="../asset/image/donat1.png" alt="1" class="click donat m-2 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null">',
        ulangi: 5,
        benda1: '<img src="../asset/image/donat3.png" alt="1" class="click donat m-2 animate__animated animate__bounceIn" onclick="hitung1(this); this.onclick=null">',
        ulangi1: 4,
        pilihan: [
            {jawaban:true, src: "../asset/image/textBilangan/txt9.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt7.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt8.png", size: "50%"}
        ]
    },
    {
        pertanyaan: "ada 10 boneka beruang dan 7 boneka t-rex, berapa jumlah semua boneka yang ada?",
        benda: '<img src="../asset/image/beruang.png" alt="1" class="click donat m-1 ms-2 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null">',
        ulangi: 10,
        benda1: '<img src="../asset/image/dinosaurus1.png" alt="1" class="click donat m-2 animate__animated animate__bounceIn" onclick="hitung1(this); this.onclick=null">',
        ulangi1: 7,
        pilihan: [
            {jawaban:false, src: "../asset/image/textBilangan/txt11.png", size: "50%"},
            {jawaban:true, src: "../asset/image/textBilangan/txt17.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt19.png", size: "50%"}
        ]
    },
    {
        pertanyaan: "ada 8 boneka beruang dan 6 boneka t-rex, berapa jumlah semua boneka yang ada?",
        benda: '<img src="../asset/image/beruang.png" alt="1" class="click donat m-1 ms-2 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null">',
        ulangi: 8,
        benda1: '<img src="../asset/image/dinosaurus1.png" alt="1" class="click donat m-2 animate__animated animate__bounceIn" onclick="hitung1(this); this.onclick=null">',
        ulangi1: 6,
        pilihan: [
            {jawaban:false, src: "../asset/image/textBilangan/txt16.png", size: "50%"},
            {jawaban:true, src: "../asset/image/textBilangan/txt14.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt12.png", size: "50%"}
        ]
    },
    {
        pertanyaan: "ada 7 donat, lalu 4 donat dimakan, berapa sisa donat yang ada?",
        benda: '<img src="../asset/image/donat1.png" alt="1" class="click donat m-1 ms-2 animate__animated animate__bounceIn" onclick="hapus(this); this.onclick=null">',
        ulangi: 4,
        benda1: '<img src="../asset/image/donat1.png" alt="1" class="click donat m-2 animate__animated animate__bounceIn" onclick="hitung1(this); this.onclick=null">',
        ulangi1: 3,
        pilihan: [
            {jawaban:false, src: "../asset/image/textBilangan/txt7.png", size: "50%"},
            {jawaban:true, src: "../asset/image/textBilangan/txt3.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt6.png", size: "50%"}
        ]
    },
    {
        pertanyaan: "ada 15 donat putih, jika 9 donat dimakan, sisa berapa donat yang ada?",
        benda: '<img src="../asset/image/donat3.png" alt="1" class="click donat m-1 ms-2 animate__animated animate__bounceIn" onclick="hapus(this); this.onclick=null">',
        ulangi: 9,
        benda1: '<img src="../asset/image/donat3.png" alt="1" class="click donat m-2 animate__animated animate__bounceIn" onclick="hitung1(this); this.onclick=null">',
        ulangi1: 6,
        pilihan: [
            {jawaban:false, src: "../asset/image/textBilangan/txt2.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt9.png", size: "50%"},
            {jawaban:true, src: "../asset/image/textBilangan/txt6.png", size: "50%"}
        ]
    },
    {
        pertanyaan: "ada 18 kue, lalu 10 kue bolu habis dimakan, berapa kue donat yang tersisa?",
        benda: '<img src="../asset/image/cake.png" alt="1" class="click donat m-1 ms-2 animate__animated animate__bounceIn" onclick="hapus(this); this.onclick=null">',
        ulangi: 10,
        benda1: '<img src="../asset/image/donat1.png" alt="1" class="click donat m-2 animate__animated animate__bounceIn" onclick="hitung1(this); this.onclick=null">',
        ulangi1: 8,
        pilihan: [
            {jawaban:false, src: "../asset/image/textBilangan/txt12.png", size: "50%"},
            {jawaban:true, src: "../asset/image/textBilangan/txt8.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt6.png", size: "50%"}
        ]
    }
]