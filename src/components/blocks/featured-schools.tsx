/* eslint-disable @next/next/no-img-element */
import { faker } from "@faker-js/faker";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const schools = [
  { id: 1, name: "Université de Dakar", country: "Sénégal" },
  { id: 2, name: "Université de Yaoundé", country: "Cameroun" },
  { id: 3, name: "Université de Lomé", country: "Togo" },
  { id: 4, name: "Université de Dakar", country: "Sénégal" },
  { id: 5, name: "Université de Yaoundé", country: "Cameroun" },
  { id: 6, name: "Université de Lomé", country: "Togo" },
];

export default function FeaturedSchools() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold mb-8">
        Écoles & Universités mises en avant
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {schools.map((school) => (
          <Card key={school.id}>
            <CardHeader className="max-w-120">
              {/* <Image src={`https://picsum.photos/200/300`} alt="" width={480} height={480} className=" object-contain"/> */}
              <img loading="lazy" src={faker.image.url()} className=" object-cover md:w-120 aspect-video rounded-md" alt="" />
              <h3 className="font-semibold">{school.name}</h3>
            </CardHeader>
            <CardContent >
              <div>
                <p>
                  What Makes Campus Life at E-JUST Unique?
                  Secure, Comfortable, and Supervised
                  Private, air-conditioned rooms with desks, wardrobes, and high-speed Wi-Fi
                  Room options (small, medium, large) with or without private bathrooms
                  Fully furnished dormitories with laundry facilities, TV lounges, and study areas
                  Kitchenettes equipped with refrigerators, stoves, and microwaves for independent living
                </p>

              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {school.country}
                </span>
              </div>
              <Badge variant="secondary">Vérifiée</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
