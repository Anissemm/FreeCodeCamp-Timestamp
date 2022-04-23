const getDateObject = (req, res) => {
    const { date } = req.params;
    const isTimestamp = /^\d+$/;
    
    if (date === undefined) {
        const time = Date.now();
        return res.json({ unix: time, utc: new Date(time).toUTCString() });
    }

    if (isTimestamp.test(date)) {
        const time = new Date(parseInt(date));

        return res.json({ unix: time.getTime(), utc: time.toUTCString() });
    }

    if (!isNaN(Date.parse(date))) {
        const time = new Date(date);

        return res.json({ unix: time.getTime(), utc: time.toUTCString() });
    }

    return res.status(500).json({ error: 'Invalid Date' });
}


module.exports = {
    getDateObject
}