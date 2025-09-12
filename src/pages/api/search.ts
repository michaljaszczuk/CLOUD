// src/pages/api/search.ts
import type { APIRoute } from 'astro';
import toolsData from '../../data/directory.json';
import type { Tool } from '../../types';

export const GET: APIRoute = async ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('q')?.toLowerCase();

    if (!query) {
        return new Response(JSON.stringify([]), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    const tools: Tool[] = toolsData as Tool[];

    const filteredTools = tools.filter(
        (tool) =>
            tool.title.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query) ||
            tool.tags.some((tag) => tag.toLowerCase().includes(query))
    );

    return new Response(JSON.stringify(filteredTools), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};