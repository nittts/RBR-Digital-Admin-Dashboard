import { Departments } from "@/enums/deparments.enum";

export function departmentsToPt(department: Departments, capitalize?: boolean) {
  const ptDepartments = {
    HR: "recursos humanos",
    IT: "tecnologia da informação",
    SALES: "vendas",
    FINANCES: "finanças",
    MARKETING: "marketing",
    MANAGEMENT: "gerencia",
    PRD: "produção, pesquisa e desenvovimento",
  };

  if (capitalize) {
    return ptDepartments[department].charAt(0).toUpperCase() + ptDepartments[department].slice(1);
  }

  return ptDepartments[department];
}
