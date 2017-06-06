(function(window, $){
    const baseUrl = 'http://localhost:8000/api/';

    $.get({ url: baseUrl + 'summary' , context: window.document.body, success: (
        {visitTimes, ipCount, peakIpCount, totalDuration, averageDuration, platformWeight, browserWeight, areaWeight}) => {
        $('#visitTimes').html(visitTimes);
        $('#ipCount').html(ipCount);
        $('#peakIpCount').html(peakIpCount);
        function format(duration) {
            const h = parseInt(duration / (60*60*1000), 10);
            duration -= h * 60 * 60 *1000;
            const m = parseInt(duration / (60 *1000), 10);
            duration -= m * 60 * 1000;
            const s = parseInt(duration / 1000, 10);
            return `${h}:${m}:${s}`;
        }
        $('#totalDuration').html(format(totalDuration));
        $('#averageDuration').html(format(averageDuration));

        function formatWeight(weight){
            return weight.map(({_id, count}) => [_id, count]);
        }
        function formatAreaWeight(weight){
            return weight.map(({_id, count}) => ({name: _id, value: count}));
        }
        window.setPlatformWeight(formatWeight(platformWeight));
        window.setBrowserWeight(formatWeight(browserWeight));
        window.setAreaWeight(formatAreaWeight(areaWeight));
    }});



    $.get({ url: baseUrl + 'enter' , context: window.document.body, success: function(details){
        const detailDOM = details.map((data) =>
            `<tr><td>${data.begin}</td>
                <td>${data.type}</td>
                <td>${data.ip}</td>
                <td>${data.region}</td>
                <td>${data.city}</td>
                <td>${data.platform}</td>
                <td>${data.browser}</td></tr>`
        );

        $('#detail-table tbody').html(detailDOM.join(''));
    }});



})(window, window.$);