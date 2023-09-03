const { context } = require('esbuild');
const isProduction = process.env.NODE_ENV === 'production';

(async () => {
  const ctx = await context({
    entryPoints: ['js', 'ts', 'tsx'].map(x => `frontend/scripts/**/*.${x}`),
    bundle: true,
    sourcemap: (!isProduction),
    outdir: 'app/assets/builds',
    publicPath: 'assets',
    target: 'es2020',
    logLevel: 'info',
    minify: (!!isProduction)
  });
  await ctx.rebuild();
  if (isProduction) {
    ctx.dispose();
  } else {
    await ctx.watch();
  }
})();
