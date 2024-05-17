import axios, { AxiosError } from "axios";

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

  public static formatError(error: Error | unknown) {
    if (!error) return undefined;

    if (axios.isAxiosError(error) && error.response && typeof error.response.data === "object") {
      const { message, error: errors } = error.response.data;

      if (message === "ValidationError" && errors) {
        return Object.values(errors).join(",");
      }

      return error.response.data.message;
    }
  }
}
