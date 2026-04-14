import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/stories/components/**/*.test.tsx"],
    coverage: {
      provider: "v8",
      thresholds: {
        statements: 95,
        lines: 95,
        functions: 95,
        branches: 85,
      },
    },
  },
});
