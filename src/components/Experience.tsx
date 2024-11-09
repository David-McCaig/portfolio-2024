import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import careerData from "@/data/career.json";
import educationData from "@/data/education.json";
import { careerSchema, educationSchema } from "@/lib/schemas";
import Timeline from "./Timeline";

export default function Experience() {
  const career = careerSchema.parse(careerData).career;
  const education = educationSchema.parse(educationData).education;

  return (
    <Tabs defaultValue="work">
      <TabsList className="mb-4 grid w-ful h-11 grid-cols-2">
        <TabsTrigger className="text-base" value="work">Work</TabsTrigger>
        <TabsTrigger className="text-base" value="education">Education</TabsTrigger>
      </TabsList>
      <TabsContent value="work">
        <Timeline experience={career}></Timeline>
      </TabsContent>
      <TabsContent value="education">
        <Timeline experience={education}></Timeline>
      </TabsContent>
    </Tabs>
  );
}
