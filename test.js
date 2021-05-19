const path = require("path");
const { spawn } = require("child_process");
/**
 * Run python myscript, pass in `-u` to not buffer console output
 * @return {ChildProcess}
 */
function runScript() {
  return spawn("python3.7", [
    "-u",
    path.join(__dirname, "/views/python/generator.py"),
    "The Wine",
  ]);
}
const subprocess = runScript();
// print output of script
subprocess.stdout.on("data", (data) => {
  console.log(`output:${data}`);
});
subprocess.stderr.on("data", (data) => {
  console.log(`error:${data}`);
});
subprocess.stderr.on("close", () => {
  console.log("Closed");
});
