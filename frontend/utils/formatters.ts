export class formatterUtils {
  public static formatDate(date: Date) {
    const formatter = new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return formatter.format(new Date(date));
  }
}
