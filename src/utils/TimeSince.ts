const convertDateBRToISO = (dateBR: string) => {
  const parts = dateBR.split(" ");
  const dateParts = parts[0].split("/");
  const timePart = parts[1];
  return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T${timePart}`;
};

export const TimeSince = (dateBR: string) => {
  const dateISO = convertDateBRToISO(dateBR);
  const seconds: number = Math.floor((new Date().getTime() - new Date(dateISO).getTime()) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + " anos";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " meses";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " dias";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " horas";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutos";
  }
  return Math.floor(seconds) + " segundos";
}