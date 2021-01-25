import Moment from 'moment';

const DEFAULT_FORMAT = "YYYYMMDD-hh:mm";

export function getRelativeTime(date) {
    const today = Moment(),
        givenDate = Moment(date, DEFAULT_FORMAT),
        daysDiff = today.diff(givenDate, 'days');
    if (daysDiff === 1)
        return "Yesterday";
    if (daysDiff > 1)
        return givenDate.format("D MMM");
    return givenDate.fromNow();
}

export function getCurrentDate(fomrat = DEFAULT_FORMAT) {
    return Moment().format(fomrat);
}

export function getTime(date, format = "hh:mm") {
    return Moment(date, DEFAULT_FORMAT).format(format);
}