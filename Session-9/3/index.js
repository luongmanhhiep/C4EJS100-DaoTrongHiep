const banHang = fetch('https://sheetdb.io/api/v1/ltc83d1no78gd');
banHang.then(connect =>{
    const data = connect.json();
    console.log(data);
});
