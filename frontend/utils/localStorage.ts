export class LSUtils {
  public static get(key: string) {
    try {
      const item = localStorage.getItem(key);

      return typeof item !== "string" ? undefined : JSON.parse(item);
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }

  public static set(key: string, value: any) {
    const stringify = JSON.stringify(value);

    localStorage.setItem(key, stringify);

    return value;
  }

  public static delete(key: string) {
    localStorage.removeItem(key);
  }
}
