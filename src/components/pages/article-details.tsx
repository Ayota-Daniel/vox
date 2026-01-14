/* eslint-disable @next/next/no-img-element */

import articlesJSON from "@/data/articles.json"
import { Badge } from "../ui/badge";

const article = articlesJSON[1];

const ArticleDetailsPageComponent = () => {
  return (
    <div className="min-h-svh max-w-7xl mx-auto">
      <div className="">
        <img src={article.image}  alt=""/>
      </div>
      <div className="mt-7 mb-3 space-y-3">
        <h2 className="font-semibold text-3xl text-center">{article.title}</h2>
        <div className="flex items-center justify-center">
          {article.tags.map((tag, index) => (
            <Badge variant={`secondary`} key={index}>{tag}</Badge>
          ))}
        </div>
        <p>{article.description}</p>
      </div>
      <div>
        <div className="flex justify-between text-xl">
          <p>{article.author.name}</p>
          <p>{article.date}</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetailsPageComponent