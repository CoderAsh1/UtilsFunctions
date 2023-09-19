export function currentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function convertUnixToDate(unixTimestamp) {
  const date = new Date(
    unixTimestamp * 1000 || Math.floor(new Date().getTime())
  );

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

export const timeDifference = (start, end) => {
  const timestamp1 = start;
  const timestamp2 = end;

  const moment1 = moment.unix(timestamp1);
  const moment2 = moment.unix(timestamp2);

  const differenceInMilliseconds = moment2.diff(moment1);
  const duration = moment.duration(differenceInMilliseconds);

  const hours = Math.floor(duration.asHours());
  const minutes = duration.minutes();

  let result;

  if (hours > 0) {
    result = `${hours} hr${hours > 1 ? 's' : ''} ${minutes} min${minutes !== 1 ? 's' : ''}`;
  } else {
    result = `${minutes} min${minutes !== 1 ? 's' : ''}`;
  }
  return result
}


export function awsTime(timestamp1, timestamp2) {
  const durationInSeconds = Math.abs(timestamp1 - timestamp2);
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = durationInSeconds % 60;

  const awsTimeFormat = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.000`;

  return awsTimeFormat;
}

export function getDuration() {
  const hours = Math.floor(timeDifference / 3600);
  const minutes = Math.floor((timeDifference % 3600) / 60);
  const seconds = timeDifference % 60;

  // Create a string representation of the time difference
  const timeDifferenceString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return timeDifferenceString
}

export const timeFormatter = (date) => {
  var ms = new Date().getTime() - new Date(date).getTime();
  var seconds = Math.floor(ms / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  var months = Math.floor(days / 30);
  var years = Math.floor(months / 12);
  if (seconds < 1) {
    return 'Just now';
  }
  if (seconds < 60) {
    return seconds + 'seconds';
  }
  if (minutes < 60) {
    if (minutes === 1) return minutes + ' minute'
    else return minutes + ' minutes';
  }
  if (hours < 24) {
    if (hours === 1) return hours + ' hour'
    else return hours + ' hours';
  }
  if (days < 30) {
    if (days === 1) return days + " day"
    else return days + ' days';
  }
  if (months < 12) {
    if (months === 1) return months + ' month'
    else return months + ' months';
  } else {
    return years + 'year';
  }
}

export function formattedTime(dateString) {
  try {
    const date = new Date(dateString);
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      date
    );
    const day = new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(
      date
    );
    const year = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
      date
    );
    const hour = date.getHours();
    const minute = date.getMinutes();
    const formattedHour = hour < 10 ? `0${hour}` : hour;
    const formattedMinute = minute < 10 ? `0${minute}` : minute;
    const period = hour >= 12 ? "PM" : "AM";
    const formattedDate = `${month.slice(0, 3)} ${day}, ${year} ${formattedHour}:${formattedMinute} ${period}`;

    return formattedDate;
  } catch (error) {
    console.log(error);
  }
}
