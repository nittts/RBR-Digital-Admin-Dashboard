import { Roles } from "@/enums/roles.enum";
import { rolesToPt } from "@/mappers/roles";
import { Tag } from "@chakra-ui/react";

export default function RoleTag({ tag }: { tag: Roles }) {
  const roleTagColorMap = {
    MANAGER: "red.500",
    SUPERVISOR: "teal.500",
    EMPLOYEE: "green.500",
  };

  return (
    <Tag background={roleTagColorMap[tag]} padding={2} variant="solid">
      {rolesToPt(tag, true)}
    </Tag>
  );
}
