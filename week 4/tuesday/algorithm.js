// let day = 27;
// let month = 12;
// let year = 1985;

const zellarsAg = (d, m, y) =>{
    

    if (m <3 ){
        m = m + 12
        y = y - 1
    }

    f = Math.floor(y / 100);
    l = y -(100 * f)

    let s = Math.floor(2.6 * m - 5.39) + Math.floor(l / 4) + Math.floor(f / 4) + d + l -(2 * f);
    x = s - (7 * Math.floor(s / 7));
    day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    return day[x];
}

console.log(zellarsAg(27, 12, 1985))