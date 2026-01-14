/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { faker } from '@faker-js/faker';

const contents = [
  {
    id: 1,
    title: "Comment choisir sa formation en Afrique ?",
    type: "ARTICLE",
  },
  {
    id: 2,
    title: "Interview d’un étudiant innovateur",
    type: "INTERVIEW",
  },
];

const LatestContents = () => {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold mb-8">
        Articles & Interviews récents
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {contents.map((content) => (
          <Card key={content.id}>
            <CardHeader className="flex justify-between items-start">
              <h3 className="font-semibold">{content.title}</h3>
              <Badge variant="outline">{content.type}</Badge>
            </CardHeader>
            <CardContent className='flex space-x-3'>
              <img loading="lazy" src={faker.image.avatarGitHub()} className=" object-cover w-40 aspect-square rounded-md" alt="" />
              <div className='flex flex-col justify-between w-full'>
                <div>
                  <p>Elemetent</p>
                </div>
                <div className='flex justify-end'>
                  <p className="text-sm text-muted-foreground">
                    Read article →
                  </p>
                </div>

              </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default LatestContents