const validator = require('./validator');
const interpreter = require('./interpreter');

const args = process.argv.slice(2);

const input = args[0].split(' ');
const [minute, hour, dayOfMonth, month, dayOfWeek] = input.splice(0, 5);
const command = input.join(' ');

if (validator.isValidInput(minute, hour, dayOfMonth, month, dayOfWeek)) {
  console.log('minute: ', interpreter.getMinute(minute));
  console.log('hour: ', interpreter.getHour(hour));
  console.log('day of month: ', interpreter.getDayOfMonth(dayOfMonth));
  console.log('month: ', interpreter.getMonth(month));
  console.log('day of week: ', interpreter.getDayOfWeek(dayOfWeek));
  console.log('command: ', command);
} else {
  console.log('Invalid input');
}
