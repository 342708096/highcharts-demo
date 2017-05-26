$(function () {
    $.getJSON('detail.json', function (detail) {
        var detailDOM = detail.map(function(data){
           return `<tr><td>${data.time}</td><td>${data.type}</td><td>${data.ip}</td><td>${data.province}</td><td>${data.city}</td><td>${data.device}</td><td>${data.app}</td></tr>`
        });
        
        $('#detail-table tbody').html(detailDOM.join(''));
    });
});