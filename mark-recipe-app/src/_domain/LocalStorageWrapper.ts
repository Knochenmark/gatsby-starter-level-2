export class LocalStorageWrapper {
  private prefix = '_knochenmark_';

  public setItem(key: string, item: any) {
    localStorage.setItem(this.prefixKey(key), JSON.stringify(item));
  }

  public getItem(key: string) {
    const item: any = localStorage.getItem(this.prefixKey(key));
    return JSON.parse(item);
  }

  private prefixKey(key: string) {
    return `${this.prefix}${key}`;
  }
}
