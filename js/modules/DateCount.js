class DateCount {
    static timeSince(date) {
        let currentSecond = Math.floor((Date.now() - date)/ 1000);         
        let interval = currentSecond / 31536000;
        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = currentSecond / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = currentSecond / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = currentSecond / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = currentSecond / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return currentSecond + " seconds";
    }
}

export default DateCount;