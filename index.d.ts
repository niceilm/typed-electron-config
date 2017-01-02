declare module 'electron-config' {
  class Config {
    constructor(options?: { name: string; });

    get(key: string): any;

    set(key: string, value: any): void;

    delete(key: string): void;
  }

  export = Config;
}