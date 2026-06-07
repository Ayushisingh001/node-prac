const os=require("os");

//1.get os platform and user info
console.log("platform",os.platform());//Returns the operating system platform (Windows, Linux, macOS)
console.log("user info",os.userInfo());//Returns details about the current user

//3.Returns the CPU architecture (x64, arm64, etc.)
console.log("CPU-archi",os.arch());


//Returns available/free RAM in bytes
console.log("free memory",os.freemem());

//4.Returns total RAM in bytes
console.log("total memory",os.totalmem());

//5. Returns how long the system has been running (in seconds)
console.log("uptime",os.uptime());

//6. Returns the current user's home directory path
console.log("home directory",os.homedir());

//7. Returns the computer's host name
console.log("host name",os.hostname());

//8.Returns information about network connections/interfaces
console.log("network interfaces",os.networkInterfaces());

//Returns details about all CPU cores
console.log("cpu info",os.cpus());

//10. Returns the system's temporary folder path
console.log("temporary dorectory",os.tmpdir());

console.log("type",os.type());