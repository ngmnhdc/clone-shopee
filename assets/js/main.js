function handleTickInit(tick) {
    var day = (new Date()).getDate() + 1;
    var month = (new Date()).getMonth() + 1;
    var year = (new Date()).getFullYear();
    var nextDay = `${year}-${month}-${day}`;

    Tick.count.down(nextDay, { format: ['h', 'm', 's'] }).onupdate = function(value) {
        tick.value = value;
    };
}