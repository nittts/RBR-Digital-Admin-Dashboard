import { Roles } from "@/enums/roles.enum";
import { rolesToPt } from "@/mappers/roles";
import { Tag } from "@chakra-ui/react";

export default function RoleTag({ tag }: { tag: Roles }) {
  const roleTagColorMap = {
    MANAGER: "red.700",
    SUPERVISOR: "teal.700",
    EMPLOYEE: "green.700",
  };

  return (
    <Tag background={roleTagColorMap[tag]} padding="1vh" variant="solid" textAlign="center">
      {rolesToPt(tag, true)}
    </Tag>
  );
}
