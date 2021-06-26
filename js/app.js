function click_ky_tu(so_moi) {
    var so_cu = document.getElementById('kq').innerHTML;
    document.getElementById('kq').innerHTML = so_cu + so_moi;
}
function bang() {
    //lay gia tri cua o kq
    var gia_tri = document.getElementById('kq').innerHTML;
    //eval bo gia tri o kq vao
    var kq = eval(gia_tri);
    //ghi lai gia tri vua tinh dc vao o kq
    document.getElementById('kq').innerHTML = kq;
}

function click_clean() {
    document.getElementById('kq').innerHTML = ' ';
}
function click_del() {
    //lay vi tri 0 den vi tri cuoi - 1

    var del = document.getElementById('kq').innerHTML;
    var kq = del.substring(0, del.length - 1);
    document.getElementById('kq').innerHTML = kq;
}