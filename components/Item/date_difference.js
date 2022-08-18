function getYearDifference(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24 * 365);
}

function getMonthDifference(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24 * 30);
}

function getDayDifference(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
}

function getHourDifference(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60);
}

function getMinuteDifference(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60);
}

export function dateDiffInSting(date1, date2) {
    var dateDiff = Math.floor(getYearDifference(date1, date2));
    if(dateDiff > 0){
        if(dateDiff > 1){
            return dateDiff+' years ago';
        }
        return dateDiff+' year ago';
    }
    dateDiff = Math.floor(getMonthDifference(date1, date2));
    if(dateDiff > 0){
        if(dateDiff > 1){
            return dateDiff+' months ago';
        }
        return dateDiff+' month ago';
    }
    dateDiff = Math.floor(getDayDifference(date1, date2));
    if(dateDiff > 0){
        if(dateDiff > 1){
            return dateDiff+' days ago';
        }
        return dateDiff+' day ago';
    }
    dateDiff = Math.floor(getHourDifference(date1, date2));
    if(dateDiff > 0){
        if(dateDiff>1){
            return dateDiff+' hours ago';
        }
        return dateDiff+' hour ago';
    }
    dateDiff = Math.floor(getMinuteDifference(date1, date2));
    if(dateDiff > 0){
        return dateDiff+' minutes ago';
    }
    return dateDiff+' minute ago';
}