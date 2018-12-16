const program = require('commander');
const carlo = require('carlo');

program
  .arguments('<uri>')
  .option('-w, --width <width>')
  .option('-h --height <height>')
  .action(async (uri, cmd) => {
    const width = (program.width ? Number(program.width) : 640);
    const height = (program.height ? Number(program.height) : 480);

    const app = await carlo.launch({
      width: width,
      height: height,
    });

    app.on('exit', () => process.exit());
    await app.load(uri);
  });

program.parse(process.argv);
