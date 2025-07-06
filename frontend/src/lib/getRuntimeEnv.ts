// lib/getRuntimeEnv.ts
export function getRuntimeEnv(key: string): string | undefined {
  if (typeof window !== "undefined" && window.__RUNTIME_CONFIG__) {
    return window.__RUNTIME_CONFIG__[key];
  }
  return undefined;
}
