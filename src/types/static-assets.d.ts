/// <reference types="next/image-types/global" />

// Static asset module declarations not covered by Next's image types.

declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.webm" {
  const src: string;
  export default src;
}
