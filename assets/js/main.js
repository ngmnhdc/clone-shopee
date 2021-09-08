function handleTickInit(tick) {
    // var nextYear = (new Date()).getFullYear() + 1;
    Tick.count.down('2021-09-09', { format: ['h', 'm', 's'] }).onupdate = function(value) {
        tick.value = value;
    };
}