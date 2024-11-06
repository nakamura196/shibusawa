// global.d.ts
interface Window {
  TL: {
    Timeline: new (
      elementId: string,
      data: string,
      options?: Record<string, unknown>
    ) => void;
  };
  KLStoryMap: {
    StoryMap: new (
      elementId: string,
      data: string,
      options?: Record<string, unknown>
    ) => void;
  };
}
