import { Roles } from "@/enums/roles.enum";

export function rolesToPt(role: Roles, capitalize?: boolean) {
  const ptRoles = {
    MANAGER: "gerente",
    SUPERVISOR: "supervisor",
    EMPLOYEE: "funcionário",
  };

  if (capitalize) {
    return ptRoles[role].charAt(0).toUpperCase() + ptRoles[role].slice(1);
  }

  return ptRoles[role];
}
