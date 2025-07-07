import { defineCollection, z } from "astro:content";

const Test = defineCollection({

    schema: z.object({

        title: z.string(),
        description: z.string(),
        dificulty: z.string(),
        time: z.string(),
                mainAdvantage: z.array(z.string()),
        archives: z.array(z.string()),
        solution: z.array(z.string()),
    })
})

export const collections = { Test };