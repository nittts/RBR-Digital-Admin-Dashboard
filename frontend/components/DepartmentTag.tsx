import { Departments } from "@/enums/deparments.enum";
import { departmentsToPt } from "@/mappers/departments";
import { Tag } from "@chakra-ui/react";

export default function DepartmentTag({ tag }: { tag: Departments }) {
  const tagColorsMap = {
    HR: "red.500",
    IT: "teal.500",
    SALES: "blue.500",
    FINANCES: "orange.500",
    MARKETING: "green.500",
    MANAGEMENT: "purple.500",
    PRD: "pink.500",
  };

  return (
    <Tag background={tagColorsMap[tag]} padding={2} variant="solid">
      {departmentsToPt(tag, true)}
    </Tag>
  );
}
