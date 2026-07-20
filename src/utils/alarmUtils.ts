/**
 * Formats an internal 24-hour time string ("HH:MM") into either 12-hour or 24-hour representation.
 * @param timeString The "HH:MM" 24-hour time string
 * @param format "12h" or "24h"
 */
export function formatAlarmTime(timeString: string, format: '12h' | '24h' = '12h'): string {
  if (!timeString || !timeString.includes(':')) return timeString;
  const [hrsStr, minsStr] = timeString.split(':');
  const hrs = parseInt(hrsStr, 10);
  const mins = parseInt(minsStr, 10);
  if (isNaN(hrs) || isNaN(mins)) return timeString;

  if (format === '24h') {
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
  } else {
    const ampm = hrs >= 12 ? 'PM' : 'AM';
    let hrs12 = hrs % 12;
    if (hrs12 === 0) hrs12 = 12;
    return `${hrs12}:${String(mins).padStart(2, '0')} ${ampm}`;
  }
}
