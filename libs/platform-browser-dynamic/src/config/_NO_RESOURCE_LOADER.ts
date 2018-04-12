import { ResourceLoader } from '@angular/compiler';

export const _NO_RESOURCE_LOADER: ResourceLoader = {
  get(url: string): Promise<string> {
    throw new Error(
      `No ResourceLoader implementation has been provided. Can't read the url "${url}"`
    );
  }
};
