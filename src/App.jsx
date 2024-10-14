import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-10 gap-5">
      <Button variant="">Click me</Button>
      <Slider></Slider>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>J'adore coder</AccordionTrigger>
          <AccordionContent>J'ai menti, hihi.</AccordionContent>
        </AccordionItem>
      </Accordion>

      <Drawer>
        <DrawerTrigger>TriggerDigger</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure skibidi ?</DrawerTitle>
            <DrawerDescription>C'est la fin vous ne pouvez plus revenir en arrière !</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose><Button>Accepter la sentence</Button></DrawerClose>
            <DrawerClose>
              <Button variant="outline">Annulez tous la team !</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
