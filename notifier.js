const notifier = require("node-notifier");
const args = process.argv.splice(2);
setTimeout(() => {
    notifier.notify({
        title: "Ding! Ding! Ding!",
        message: args[0]
      });
}, parseInt(args[1]) * 60 * 1000);
