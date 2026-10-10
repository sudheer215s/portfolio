export type FormStatus = "idle" | "submitting" | "success" | "error";

export interface FieldErrors {
  fullName?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
  agreement?: string;
}
