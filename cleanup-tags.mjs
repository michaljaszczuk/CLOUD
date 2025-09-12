import fs from 'fs/promises';
import path from 'path';

const directoryPath = path.resolve('src/data/directory.json');

async function cleanupTags() {
  try {
    const fileContent = await fs.readFile(directoryPath, 'utf-8');
    const tools = JSON.parse(fileContent);

    const cleanedTools = tools.map(tool => {
      const newTags = tool.tags.filter(tag => tag !== tool.category);
      return { ...tool, tags: newTags };
    });

    await fs.writeFile(directoryPath, JSON.stringify(cleanedTools, null, 2), 'utf-8');
    console.log('Successfully cleaned up the tags in directory.json!');
  } catch (error) {
    console.error('Error cleaning up tags:', error);
  }
}

cleanupTags();