function namaBuah(){

    let buah = ['Pisang', 'Jeruk', 'Apel', 'Mangga'];

    console.log(buah);

    buah.pop();
    console.log(buah);

    let buah2 = buah.shift();
    console.log(buah2);

    return buah;
}

console.log(namaBuah());

