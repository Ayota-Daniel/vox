"use server";
// save-json.ts
import * as fs from "fs";
import * as path from "path";

// import { nanoid } from "nanoid";
import { faker } from "@faker-js/faker";

/**
 * Writes a JavaScript object to a JSON file.
 * @param filePath - The path where the JSON file will be saved.
 * @param data - The data object to be saved.
 * @param pretty - Whether to format the JSON with indentation.
 */
export async function writeJsonFile<T>(
  filePath: string,
  data: T,
  pretty: boolean = true
) {
  try {
    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Convert object to JSON string
    const jsonString = pretty
      ? JSON.stringify(data, null, 2) // Pretty print with 2 spaces
      : JSON.stringify(data);

    // Write file
    fs.writeFileSync(filePath, jsonString, { encoding: "utf8" });

    console.log(`✅ JSON file created at: ${filePath}`);
  } catch (error) {
    console.error(`❌ Failed to write JSON file: ${(error as Error).message}`);
  }
}

// Example usage
// const sampleData = {
//   name: "John Doe",
//   age: 30,
//   skills: ["TypeScript", "Node.js", "JSON"],
//   active: true,
// };

// writeJsonFile("./output/user-data.json", sampleData);

export async function generateArticles() {
  const articles = Array.from({ length: 100 }, () => ({
    title: faker.book.title(),
    description: faker.lorem.paragraphs(),
    image: faker.image.url(),
    href: `/articles/${faker.string.uuid()}`,
    category: faker.company.buzzNoun(),
    author: {
      name: faker.person.fullName(),
    },
    date: faker.date.anytime().toDateString(),
    readingTime: faker.date.anytime().toDateString(),
    tags: ["startup", "business", "ia", "education", "future"],
  }));
  writeJsonFile("./src/data/articles.json", articles);
}
