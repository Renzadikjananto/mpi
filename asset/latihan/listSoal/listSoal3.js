let soalNomor = 0;

let listPertanyaan = [
    {
        pertanyaan: "Buah apa yang jumlahnya sama banyak dengan buah semangka?",
        benda: '<img src="../asset/image/semangka.png" alt="1" class="click semangka m-2 my-4 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null">',
        ulangi: 7,
        pilihan: [
            {jawaban:true, src: "../asset/image/latihan3/7apel.png", size: "100%"},
            {jawaban:false, src: "../asset/image/latihan3/6jeruk.png", size: "100%"},
            {jawaban:false, src: ""},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "Buah apa yang jumlahnya lebih sedikit dari jumlah jeruk?",
        benda: '<img src="../asset/image/jeruk.png" alt="1" class="click semangka m-2 my-4 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null">',
        ulangi: 10,
        pilihan: [
            {jawaban:false, src: "../asset/image/latihan3/10semangka.png", size: "100%"},
            {jawaban:true, src: "../asset/image/latihan3/6apel.png", size: "100%"},
            {jawaban:false, src: ""},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "Buah jeruk mana yang jumlahnya lebih banyak dari buah semangka?",
        benda: '<img src="../asset/image/semangka.png" alt="1" class="click semangka m-2 my-4 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null">',
        ulangi: 7,
        pilihan: [
            {jawaban:false, src: "../asset/image/latihan3/6jeruk.png", size: "100%"},
            {jawaban:true, src: "../asset/image/latihan3/8jeruk.png", size: "100%"},
            {jawaban:false, src: ""},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "Bola basket mana yang lebih banyak?",
        benda: '<img src="../asset/image/bola1.png" alt="1" class="click bola1 m-2 my-3 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null">',
        ulangi: 14,
        pilihan: [
            {jawaban:false, src: "../asset/image/latihan3/13basket.png", size: "100%"},
            {jawaban:true, src: "../asset/image/latihan3/15basket.png", size: "100%"},
            {jawaban:false, src: ""},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "Pensil mana yang jumlahnya lebih sedikit dari penghapus?",
        benda: '<img src="../asset/image/penghapus.png" alt="1" class="click penghapus my-3 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null">',
        ulangi: 13,
        pilihan: [
            {jawaban:false, src: "../asset/image/latihan3/15pensil.png", size: "95%"},
            {jawaban:true, src: "../asset/image/latihan3/10pensil.png", size: "95%"},
            {jawaban:false, src: ""},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "Bola mana yang jumlahnya lebih banyak dari jumlah pensil?",
        benda: '<img src="../asset/image/pensil.png" alt="1" class="click pensil m-2 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null">',
        ulangi: 14,
        pilihan: [
            {jawaban:false, src: "../asset/image/latihan3/14bola.png", size: "80%"},
            {jawaban:true, src: "../asset/image/latihan3/15basket.png", size: "80%"},
            {jawaban:false, src: ""},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "bilangan berapa yang harus diisi?",
        benda: '<img src="../asset/image/latihan4/train13.png" alt="1" class="kereta">',
        ulangi: 1,
        pilihan: [
            {jawaban:true, src: "../asset/image/textBilangan/txt13.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt17.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt11.png", size: "50%"},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "bilangan berapa yang harus diisi?",
        benda: '<img src="../asset/image/latihan4/train8.png" alt="1" class="kereta">',
        ulangi: 1,
        pilihan: [
            {jawaban:false, src: "../asset/image/textBilangan/txt5.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt6.png", size: "50%"},
            {jawaban:true, src: "../asset/image/textBilangan/txt8.png", size: "50%"},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "bilangan berapa yang harus diisi?",
        benda: '<img src="../asset/image/latihan4/train17.png" alt="1" class="kereta">',
        ulangi: 1,
        pilihan: [
            {jawaban:false, src: "../asset/image/textBilangan/txt15.png", size: "50%"},
            {jawaban:true, src: "../asset/image/textBilangan/txt17.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt20.png", size: "50%"},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "bilangan berapa yang harus diisi?",
        benda: '<img src="../asset/image/latihan4/train5.png" alt="1" class="kereta">',
        ulangi: 1,
        pilihan: [
            {jawaban:true, src: "../asset/image/textBilangan/txt5.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt7.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt2.png", size: "50%"},
            {jawaban:false, src: ""}
        ]
    }
]