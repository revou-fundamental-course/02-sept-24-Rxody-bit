function hitungluas(){
    alas = document.getElementById("alas").value;
    tinggi = document.getElementById("tinggi").value;
    luas = 1/2*alas*tinggi;
    document.getElementById("luas").value=luas}

    function hitungkeliling(){
        sisi1 = +document.getElementById("S1").value;
        sisi2 = +document.getElementById("S2").value;
        sisi3 = +document.getElementById("S3").value;
        keliling = sisi1 + sisi2 + sisi3;
        document.getElementById("keliling").value=keliling;
    }
    function resetkel(){
        sisi1 = +document.getElementById("S1").value;
        sisi2 = +document.getElementById("S2").value;
        sisi3 = +document.getElementById("S3").value;
    }
    function ResetLuas(){
        alas = document.getElementById("alas").value;
        tinggi = document.getElementById("tinggi").value;
    }