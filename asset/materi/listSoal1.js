let soalNomor = 0;

let listPertanyaan = [{
        pertanyaan: "",
        latar: [
            '<img src="../asset/image/materi1.png" alt="piring" class="intro">'
        ],
        benda: [            
        ]
    },

    {
        pertanyaan: "ada berapa jumlah semangka?",
        latar: [
            '<img src="../asset/image/plate.png" alt="piring" class="piring" style="left: 10%;">',
            '<img src="../asset/image/plate.png" alt="piring" class="piring" style="left: 60%;">',
        ],
        benda: [
            '<img src="../asset/image/semangka.png" alt="1" class="click semangka animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 20%; top:22%;">',
            '<img src="../asset/image/semangka.png" alt="1" class="click semangka animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 14%; top:26%;">',
            '<img src="../asset/image/semangka.png" alt="1" class="click semangka animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 27%; top:26%;">',
            '<img src="../asset/image/semangka.png" alt="1" class="click semangka animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 10%; top:32%;">',
            '<img src="../asset/image/semangka.png" alt="1" class="click semangka animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 19%; top:32%;">',
            '<img src="../asset/image/semangka.png" alt="1" class="click semangka animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 29%; top:32%;">',
            '<img src="../asset/image/semangka.png" alt="1" class="click semangka animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 14%; top:39%;">',
            '<img src="../asset/image/semangka.png" alt="1" class="click semangka animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 24%; top:39%;">',
        ]
    },
    
    {
        pertanyaan: "ada berapa jumlah jeruk?",
        latar: [
            '<img src="../asset/image/plate.png" alt="piring" class="piring" style="left: 60%;">',
        ],
        benda: [
            '<img src="../asset/image/jeruk.png" alt="1" class="click jeruk my-5 mx-3 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 15%; top:10%;">',
            '<img src="../asset/image/jeruk.png" alt="1" class="click jeruk my-5 mx-3 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 25%; top:10%;">',
            '<img src="../asset/image/jeruk.png" alt="1" class="click jeruk my-5 mx-3 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 15%; top:28%;">',
            '<img src="../asset/image/jeruk.png" alt="1" class="click jeruk my-5 mx-3 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 25%; top:28%;">',
            '<img src="../asset/image/jeruk.png" alt="1" class="click jeruk my-5 mx-3 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 15%; top:46%;">',
            '<img src="../asset/image/jeruk.png" alt="1" class="click jeruk my-5 mx-3 animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 25%; top:46%;">',
        ],
    },

    {
        pertanyaan: "ada berapa jumlah apel?",
        latar: [
            '<img src="../asset/image/plate.png" alt="piring" class="piring" style="left: 60%;">',
        ],
        benda: [
            '<img src="../asset/image/apel.png" alt="1" class="click apel animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 15%; top:15%;">',
            '<img src="../asset/image/apel.png" alt="1" class="click apel animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 26%; top:15%;">',
            '<img src="../asset/image/apel.png" alt="1" class="click apel animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 20%; top:31%;">',
            '<img src="../asset/image/apel.png" alt="1" class="click apel animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 11%; top:32%;">',
            '<img src="../asset/image/apel.png" alt="1" class="click apel animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 28%; top:33%;">',
            '<img src="../asset/image/apel.png" alt="1" class="click apel animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 24%; top:48%;">',
            '<img src="../asset/image/apel.png" alt="1" class="click apel animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 15%; top:49%;">',
        ]
    },
    {
        pertanyaan: "ada berapa jumlah donat cokelat?",
        latar: [
            '<img src="../asset/image/plate.png" alt="piring" class="piring" style="left: 60%; top: 20%">',
            '<img src="../asset/image/plate.png" alt="piring" class="piring" style="left: 60%; top: 60%">',
        ],
        benda: [
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 22%; top:30%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 30%; top:30%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 10%; top:45%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 18%; top:45%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 26%; top:45%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 34%; top:45%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 42%; top:45%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 10%; top:60%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 18%; top:60%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 26%; top:60%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 34%; top:60%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 42%; top:60%;">',
        ],
    },
    {
        pertanyaan: "ada berapa jumlah donat putih?",
        latar: [
            '<img src="../asset/image/plate.png" alt="piring" class="piring" style="left: 60%; top: 20%">',
            '<img src="../asset/image/plate.png" alt="piring" class="piring" style="left: 60%; top: 60%">',
        ],
        benda: [
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 14%; top:30%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 22%; top:30%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 30%; top:30%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 38%; top:30%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 10%; top:45%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 18%; top:45%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 26%; top:45%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 34%; top:45%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 42%; top:45%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 10%; top:60%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 18%; top:60%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 26%; top:60%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 34%; top:60%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 42%; top:60%;">',
        ],
    },
    {
        pertanyaan: "ada berapa jumlah kue bolu?",
        latar: [
            '<img src="../asset/image/plate.png" alt="piring" class="piring" style="left: 60%; top: 20%">',
            '<img src="../asset/image/plate.png" alt="piring" class="piring" style="left: 60%; top: 60%">',
        ],
        benda: [
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 18%; top:30%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 26%; top:30%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 34%; top:30%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 10%; top:45%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 18%; top:45%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 26%; top:45%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 34%; top:45%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 42%; top:45%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 10%; top:60%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 18%; top:60%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 26%; top:60%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 34%; top:60%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 42%; top:60%;">',
        ],
    }
]