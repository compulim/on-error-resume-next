import { defineConfig } from 'tsup';

export default defineConfig([
  {
    dts: true,
    entry: {
      'on-error-resume-next': './src/index.ts'
    },
    format: ['cjs', 'esm'],
    sourcemap: true,
    target: 'esnext'
  }
]);
