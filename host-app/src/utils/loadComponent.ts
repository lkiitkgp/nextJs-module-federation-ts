// utils/loadComponent.ts
export const loadComponent = async (scope: string, module: string) => {
    console.log('Loading component from scope:', scope, 'module:', module);
    try {
      // @ts-ignore
      await __webpack_init_sharing__('default');
      const container = (window as any)[scope] as any; // Type assertion to any
      // @ts-ignore
      await container.init(__webpack_share_scopes__.default);
      const factory = await container.get(module);
      const Module = factory();
      return Module;
    } catch (error) {
      console.error(`Error loading component from scope: ${scope}, module: ${module}`, error);
      throw new Error(`Error loading component from scope: ${scope}, module: ${module}`);
    }
  };
  