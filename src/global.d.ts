export {};
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly API_KEY: string;
      readonly CONTEXT_KEY: string;
    }
  }
}
