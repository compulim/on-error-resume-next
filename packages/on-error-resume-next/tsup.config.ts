import { defineConfig } from 'tsup';

export default defineConfig([
  {
    dts: true,
    entry: {
      'on-error-resume-next': './src/index.ts',
      'on-error-resume-next.async': './src/index.async.ts',
      'on-error-resume-next.auto': './src/index.auto.ts'
    },
    format: ['cjs', 'esm'],
    sourcemap: true,
    target: 'esnext'
  }
]);
