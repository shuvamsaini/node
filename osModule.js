const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
const upTime = os.uptime();
console.log(`The System Uptime is ${upTime / 3600} hours`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totlalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  hostname: os.hostname(),
};

console.log(currentOs);
