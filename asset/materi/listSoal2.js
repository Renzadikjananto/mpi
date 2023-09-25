let soalNomor = 0;

let listPertanyaan = [{
        pertanyaan: "",
        latar: [
            '<img src="../asset/image/materi1.png" alt="piring" class="intro">'
        ],
        benda1: [            
        ],benda2: [            
        ],benda3: [            
        ]
    },

    {
        pertanyaan: "hitung dan bandingkanlah jumlah kelompok buah, <br> kemudian urutkanlah dari yang paling sedikit",
        latar: [
            '<img src="../asset/image/plate.png" alt="piring" class="piring" style="left: 10%;">',
            '<img src="../asset/image/plate.png" alt="piring" class="piring" style="left: 40%;">',
            '<img src="../asset/image/plate.png" alt="piring" class="piring" style="left: 70%;">',
        ],
        benda1: [
            '<img src="../asset/image/semangka.png" alt="1" class="click semangka animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 20%; top:32%;">',
            '<img src="../asset/image/semangka.png" alt="1" class="click semangka animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 14%; top:36%;">',
            '<img src="../asset/image/semangka.png" alt="1" class="click semangka animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 27%; top:36%;">',
            '<img src="../asset/image/semangka.png" alt="1" class="click semangka animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 10%; top:42%;">',
            '<img src="../asset/image/semangka.png" alt="1" class="click semangka animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 19%; top:42%;">',
            '<img src="../asset/image/semangka.png" alt="1" class="click semangka animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 29%; top:42%;">',
            '<img src="../asset/image/semangka.png" alt="1" class="click semangka animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 14%; top:49%;">',
            '<img src="../asset/image/semangka.png" alt="1" class="click semangka animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 24%; top:49%;">',
        ],

        benda2:[
            '<img src="../asset/image/jeruk.png" alt="1" class="click jeruk my-5 mx-3 animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 40%; top:20%;">',
            '<img src="../asset/image/jeruk.png" alt="1" class="click jeruk my-5 mx-3 animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 50%; top:20%;">',
            '<img src="../asset/image/jeruk.png" alt="1" class="click jeruk my-5 mx-3 animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 40%; top:32%;">',
            '<img src="../asset/image/jeruk.png" alt="1" class="click jeruk my-5 mx-3 animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 50%; top:33%;">',
            '<img src="../asset/image/jeruk.png" alt="1" class="click jeruk my-5 mx-3 animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 40%; top:44%;">',
            '<img src="../asset/image/jeruk.png" alt="1" class="click jeruk my-5 mx-3 animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 50%; top:44%;">',
        ],

        benda3: [
            '<img src="../asset/image/apel.png" alt="1" class="click apel animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 70%; top:27%;">',
            '<img src="../asset/image/apel.png" alt="1" class="click apel animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 81%; top:27%;">',
            '<img src="../asset/image/apel.png" alt="1" class="click apel animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 65%; top:39%;">',
            '<img src="../asset/image/apel.png" alt="1" class="click apel animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 73%; top:39%;">',
            '<img src="../asset/image/apel.png" alt="1" class="click apel animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 82%; top:39%;">',
            '<img src="../asset/image/apel.png" alt="1" class="click apel animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 79%; top:50%;">',
            '<img src="../asset/image/apel.png" alt="1" class="click apel animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 70%; top:50%;">',
        ]
    },
    
    
    {
        pertanyaan: "hitung dan bandingkanlah jumlah kelompok donat dan kue, <br> kemudian urutkanlah dari yang paling banyak",
        latar: [
            '<img src="../asset/image/plate.png" alt="piring" class="piring" style="left: 10%;">',
            '<img src="../asset/image/plate.png" alt="piring" class="piring" style="left: 40%;">',
            '<img src="../asset/image/plate.png" alt="piring" class="piring" style="left: 70%;">',
        ],
        benda1: [
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 72%; top:30%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 78%; top:30%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 65%; top:42%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 70%; top:42%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 75%; top:42%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 80%; top:42%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 85%; top:42%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 65%; top:54%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 70%; top:54%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 75%; top:54%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 80%; top:54%;">',
            '<img src="../asset/image/donat1.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung(this); this.onclick=null" style="left: 85%; top:54%;">',
        ],
        benda2: [
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 40%; top:30%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 45%; top:30%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 50%; top:30%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 55%; top:30%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 38%; top:42%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 43%; top:42%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 48%; top:42%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 53%; top:42%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 58%; top:42%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 38%; top:54%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 43%; top:54%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 48%; top:54%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 53%; top:54%;">',
            '<img src="../asset/image/donat3.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung2(this); this.onclick=null" style="left: 58%; top:54%;">',
        ],
        benda3: [
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 15%; top:30%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 20%; top:30%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 25%; top:30%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 10%; top:42%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 15%; top:42%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 20%; top:42%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 25%; top:42%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 30%; top:42%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 10%; top:54%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 15%; top:54%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 20%; top:54%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 25%; top:54%;">',
            '<img src="../asset/image/cake.png" alt="1" class="click donat animate__animated animate__bounceIn" onclick="hitung3(this); this.onclick=null" style="left: 30%; top:54%;">',
        ],
    },
    
]