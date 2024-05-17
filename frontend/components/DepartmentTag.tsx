import { Departments } from "@/enums/deparments.enum";
import { departmentsToPt } from "@/mappers/departments";
import { Tag } from "@chakra-ui/react";

export default function DepartmentTag({ tag }: { tag: Departments }) {
  const tagColorsMap = {
    HR: "red.700",
    IT: "teal.700",
    SALES: "blue.700",
    FINANCES: "orange.700",
    MARKETING: "green.700",
    MANAGEMENT: "purple.700",
    PRD: "pink.700",
  };

  return (
    <Tag background={tagColorsMap[tag]} padding="1vh" variant="solid" textAlign="center">
      {departmentsToPt(tag, true)}
    </Tag>
  );
}
