let soalNomor = 0;

let listPertanyaan = [
    {
        pertanyaan: "Buah mana yang jumlahnya sama banyak dengan buah semangka?",
        src: "../asset/image/latihan3/7semangka.png", size: "35%",
        pilihan: [
            {jawaban:true, src: "../asset/image/latihan3/7apel.png", size: "100%"},
            {jawaban:false, src: "../asset/image/latihan3/6jeruk.png", size: "100%"},
            {jawaban:false, src: ""},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "Buah mana yang jumlahnya lebih sedikit dari jumlah jeruk?",
        src: "../asset/image/latihan3/10jeruk.png", size: "30%",
        pilihan: [
            {jawaban:false, src: "../asset/image/latihan3/10semangka.png", size: "100%"},
            {jawaban:true, src: "../asset/image/latihan3/6apel.png", size: "100%"},
            {jawaban:false, src: ""},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "Buah jeruk mana yang jumlahnya lebih banyak dari buah semangka?",
        src: "../asset/image/latihan3/7semangka.png", size: "35%",
        pilihan: [
            {jawaban:false, src: "../asset/image/latihan3/6jeruk.png", size: "100%"},
            {jawaban:true, src: "../asset/image/latihan3/8jeruk.png", size: "100%"},
            {jawaban:false, src: ""},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "Bola basket mana yang lebih banyak?",
        src: "../asset/image/latihan3/14bola.png", size: "35%",
        pilihan: [
            {jawaban:false, src: "../asset/image/latihan3/13basket.png", size: "100%"},
            {jawaban:true, src: "../asset/image/latihan3/15basket.png", size: "100%"},
            {jawaban:false, src: ""},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "Pensil mana yang jumlahnya lebih sedikit dari penghapus?",
        src: "../asset/image/latihan3/13penghapus.png", size: "25%",
        pilihan: [
            {jawaban:false, src: "../asset/image/latihan3/15pensil.png", size: "95%"},
            {jawaban:true, src: "../asset/image/latihan3/10pensil.png", size: "95%"},
            {jawaban:false, src: ""},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "Bola mana yang jumlahnya lebih banyak dari jumlah pensil?",
        src: "../asset/image/latihan3/15pensil.png", size: "35%",
        pilihan: [
            {jawaban:false, src: "../asset/image/latihan3/14bola.png", size: "80%"},
            {jawaban:true, src: "../asset/image/latihan3/15basket.png", size: "80%"},
            {jawaban:false, src: ""},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "bilangan berapa yang harus diisi?",
        src: "../asset/image/latihan4/train13.png", size: "90%",
        pilihan: [
            {jawaban:true, src: "../asset/image/textBilangan/txt13.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt17.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt11.png", size: "50%"},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "bilangan berapa yang harus diisi?",
        src: "../asset/image/latihan4/train8.png", size: "90%",
        pilihan: [
            {jawaban:false, src: "../asset/image/textBilangan/txt5.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt6.png", size: "50%"},
            {jawaban:true, src: "../asset/image/textBilangan/txt8.png", size: "50%"},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "bilangan berapa yang harus diisi?",
        src: "../asset/image/latihan4/train17.png", size: "90%",
        pilihan: [
            {jawaban:false, src: "../asset/image/textBilangan/txt15.png", size: "50%"},
            {jawaban:true, src: "../asset/image/textBilangan/txt17.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt20.png", size: "50%"},
            {jawaban:false, src: ""}
        ]
    },
    {
        pertanyaan: "bilangan berapa yang harus diisi?",
        src: "../asset/image/latihan4/train5.png", size: "90%",
        pilihan: [
            {jawaban:true, src: "../asset/image/textBilangan/txt5.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt7.png", size: "50%"},
            {jawaban:false, src: "../asset/image/textBilangan/txt2.png", size: "50%"},
            {jawaban:false, src: ""}
        ]
    }
]