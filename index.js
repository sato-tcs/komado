const program = require('commander');
const carlo = require('carlo');

program
  .arguments('<uri>')
  .option('--width <width>')
  .option('--height <height>')
  .action(async (uri, cmd) => {
    const width = (cmd.width ? Number(cmd.width) : 640);
    const height = (cmd.height ? Number(cmd.height) : 480);

    const app = await carlo.launch({
      width: width,
      height: height,
    });

    app.on('exit', () => process.exit());
    await app.load(uri);
  });

program.parse(process.argv);
