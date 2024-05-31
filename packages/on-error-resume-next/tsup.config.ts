import { defineConfig } from 'tsup';

export default defineConfig([
  {
    dts: true,
    entry: {
      'on-error-resume-next': './src/index.ts',
      'on-error-resume-next.async': './src/index.async.ts'
    },
    format: ['cjs', 'esm'],
    sourcemap: true
  }
]);
