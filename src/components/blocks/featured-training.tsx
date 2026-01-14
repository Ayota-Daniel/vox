/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { faker } from "@faker-js/faker";
import { PlusIcon } from "lucide-react"

const trainings = [
  { id: 1, title: "Informatique", level: "Licence", domain: "Tech" },
  { id: 2, title: "Génie Civil", level: "Master", domain: "Ingénierie" },
  { id: 3, title: "Sciences Économiques", level: "Licence", domain: "Économie" },
];

export default function FeaturedTrainings() {
  return (
    <section className="py-16 bg-muted/50 px-6">
      <h2 className="text-2xl font-semibold mb-8">
        Formations les plus consultées
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {trainings.map((training) => (
          <div key={training.id} className="border border-black/20 dark:border-white/20 flex flex-col items-start max-w-sm mx-auto p-4 relative h-130 ">
            <PlusIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <PlusIcon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <PlusIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <PlusIcon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            {/* <EvervaultCard text="hover" /> */}
            <img loading="lazy" src={faker.image.dataUri()} className=" object-cover aspect-auto min-w-75 md:max-w-90 min-h-75 h-90" alt="" />
            <h3 className="dark:text-white text-black mt-4 font-semibold">
              {training.title}
            </h3>
            <div>
              <Badge className="rounded-sm">{training.level}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Domaine : {training.domain}
            </p>
            <p className="text-sm border font-light dark:border-white/20 border-black/20 rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              Explore
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
