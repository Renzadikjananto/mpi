let soalNomor = 0;

let listPertanyaan = [
    {
        pertanyaan: "berapa bilangan yang terbentuk dari gabungan 2 kelompok kue diatas?",
        benda: '<img src="../asset/image/donat1.png" alt="1" class="click cupcake m-2 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null">',
        ulangi: 3,
        benda1: '<img src="../asset/image/cake.png" alt="1" class="click donat m-2 animate__animated animate__bounceIn" onclick="hitung1(this); this.onclick=null">',
        ulangi1: 4,
        pilihan: [
            {jawaban:false, src: "../asset/image/textBilangan/txt6.png", size: "60%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt9.png", size: "60%"},
            {jawaban:true, src: "../asset/image/textBilangan/txt7.png", size: "60%"}
        ]
    },
    {
        pertanyaan: "Ayo pisahkan kue-kue diatas menjadi 2 kelompok!",
        benda: '<img src="../asset/image/latihan5/gabungan9.png" alt="1" class="mt-5 animate__animated animate__bounceIn" style="width:30%; position:absolute; left: 35%;">',
        ulangi: 1,
        benda1: '<img src="../asset/image/donat1.png" alt="1" class="click donat m-2 mt-5 animate__animated animate__bounceIn" onclick="hitung1(this); this.onclick=null">',
        ulangi1: 0,
        pilihan: [
            {jawaban:true, src: "../asset/image/latihan5/uraian9.png", size: "100%"},
            {jawaban:false, src: "../asset/image/latihan5/uraian6.png", size: "100%"},
            {jawaban:false, src: "../asset/image/latihan5/uraian7.png", size: "100%"}
        ]
    },
    {
        pertanyaan: "berapa bilangan yang terbentuk dari gabungan 2 kelompok boneka diatas?",
        benda: '<img src="../asset/image/beruang.png" alt="1" class="click boneka m-2 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null">',
        ulangi: 6,
        benda1: '<img src="../asset/image/dinosaurus1.png" alt="1" class="click boneka m-2 animate__animated animate__bounceIn" onclick="hitung1(this); this.onclick=null">',
        ulangi1: 6,
        pilihan: [
            {jawaban:false, src: "../asset/image/textBilangan/txt14.png", size: "55%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt18.png", size: "55%"},
            {jawaban:true, src: "../asset/image/textBilangan/txt12.png", size: "55%"}
        ]
    },
    {
        pertanyaan: "berapa bilangan yang terbentuk dari gabungan 2 kelompok boneka diatas?",
        benda: '<img src="../asset/image/beruang.png" alt="1" class="click boneka m-2 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null">',
        ulangi: 7,
        benda1: '<img src="../asset/image/dinosaurus1.png" alt="1" class="click boneka m-2 animate__animated animate__bounceIn" onclick="hitung1(this); this.onclick=null">',
        ulangi1: 8,
        pilihan: [
            {jawaban:false, src: "../asset/image/textBilangan/txt17.png", size: "55%"},
            {jawaban:true, src: "../asset/image/textBilangan/txt15.png", size: "55%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt11.png", size: "55%"}
        ]
    },
    {
        pertanyaan: "Ayo pisahkan boneka-boneka diatas menjadi 2 kelompok!",
        benda: '<img src="../asset/image/latihan5/gabungan15.png" alt="1" class="mt-2 animate__animated animate__bounceIn" style="width:30%; position:absolute; left: 35%;">',
        ulangi: 1,
        benda1: '<img src="../asset/image/donat1.png" alt="1" class="click donat m-2 mt-5 animate__animated animate__bounceIn" onclick="hitung1(this); this.onclick=null">',
        ulangi1: 0,
        pilihan: [
            {jawaban:false, src: "../asset/image/latihan5/uraian10.png", size: "100%"},
            {jawaban:false, src: "../asset/image/latihan5/uraian12.png", size: "100%"},
            {jawaban:true, src: "../asset/image/latihan5/uraian15.png", size: "100%"}
        ]
    },
    {
        pertanyaan: "Ayo pisahkan kue-kue diatas menjadi 2 kelompok!",
        benda: '<img src="../asset/image/latihan5/gabungan7.png" alt="1" class="mt-5 animate__animated animate__bounceIn" style="width:30%; position:absolute; left: 35%;">',
        ulangi: 1,
        benda1: '<img src="../asset/image/donat1.png" alt="1" class="click donat m-2 mt-5 animate__animated animate__bounceIn" onclick="hitung1(this); this.onclick=null">',
        ulangi1: 0,
        pilihan: [
            {jawaban:false, src: "../asset/image/latihan5/uraian9.png", size: "100%"},
            {jawaban:true, src: "../asset/image/latihan5/uraian7.png", size: "100%"},
            {jawaban:false, src: "../asset/image/latihan5/uraian6.png", size: "100%"}
        ]
    }
]