const moment = require('moment');

const getDateObject = (req, res) => {
    const { date } = req.params;
    const isTimestamp = /^\d+$/;
    const format = 'ddd, DD MMM YYYY HH:mm:ss [GMT]';

    if (isTimestamp.test(date)) {
        const time = moment(parseInt(date));

        return res.json({ unix: time.valueOf(), utc: time.format(format) });
    }

    if (moment(date).isValid()) {
        const time = moment(date);

        return res.json({ unix: time.valueOf(), utc: time.format(format) });
    }

    return res.status(500).json({ utc: 'invalid entered value' });
}

module.exports = {
    getDateObject
}