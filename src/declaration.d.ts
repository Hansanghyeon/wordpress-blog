// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module "package-without-declarations"

// And to shim assets, use (one file extension per `declare`):
// declare module "*.png"

// types/mdx.d.ts
declare module '*.mdx' {
  const MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

export interface ThemeProperty {
  background: string;
  backgroundElevated: string;
  color: string;
  mdx: {
    callOut: {
      background: string;
    }
  }
}
