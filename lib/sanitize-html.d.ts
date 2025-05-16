declare module "sanitize-html" {
  interface IOptions {
    allowedTags?: string[];
    allowedAttributes?: { [tagName: string]: string[] };
    allowedSchemes?: string[];
    allowedSchemesByTag?: { [tagName: string]: string[] };
    allowProtocolRelative?: boolean;
    enforceHtmlBoundary?: boolean;
    selfClosing?: string[];
    // add more options here if you want
  }

  function sanitize(dirty: string, options?: IOptions): string;

  export = sanitize;
}
