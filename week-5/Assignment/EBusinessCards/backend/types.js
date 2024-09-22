const zod = require('zod');

const createCards = zod.object({
    name: zod.string().min(1, { message: "Name is required" }),
    description: zod.string().min(1, { message: "Description is required" }),
    interests: zod.array(zod.string()).nonempty({ message: "At least one interest is required" }),
    linkedin: zod.string().url({ message: "LinkedIn must be a valid URL" }),
    twitter: zod.string().url({ message: "Twitter must be a valid URL" }),
    otherSocialMedia: zod.object({
        url: zod.string().url({ message: "Other social media must be a valid URL" }),
        label: zod.string().min(1, { message: "Label is required" })
    }).optional()
});

const updateCards = zod.object({
    id: zod.string()
})

module.exports = {
    createCards: createCards,
    updateCards: updateCards
}