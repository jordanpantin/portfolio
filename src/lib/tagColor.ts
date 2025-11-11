const PALETTE = [
    "primary",
    "secondary",
    "accent",
    "info",
    "success",
    "warning",
    "error",
];

// maps a color to several tag variants.
const GROUPS: Array<{ color: string; tags: string[] }> = [
    { color: "accent", tags: ["azure", "bicep", "docker"] },
    {
        color: "primary",
        tags: [
            ".net",
            ".net maui",
            "maui",
            "api",
            "api rest",
            "sql",
            "sql server",
            "entity framework",
            "razor",
        ],
    },
    { color: "success", tags: ["mobile", "maui", "flutter", "android", "ios"] },
    {
        color: "warning",
        tags: [
            "ci/cd",
            "git",
            "azure devops",
            "gitlab ci",
            "gitlab",
            "jira",
            "bitbucket",
            "elk",
            "grafana",
            "bicep",
            "Revue de code"
        ],
    },
    {
        color: "info",
        tags: [
            "angular",
            "typescript",
            "tailwind css",
            "tailwind",
            "html/css",
            "svelte",
            "web",
        ],
    },
    { color: "secondary", tags: ["bac +5", "alternance", "architecture"] },
    {
        color: "error",
        tags: ["neos-sdi", "teletech international", "bpce it", "perso"],
    },
];

// Build a lookup map from normalized tag to color.
const OVERRIDES: Record<string, string> = GROUPS.reduce((map, g) => {
    g.tags.forEach((t) => (map[t.toLowerCase()] = g.color || "primary"));
    return map;
}, {} as Record<string, string>);

// djb2 hash
function hashString(s: string) {
    let h = 5381;
    for (let i = 0; i < s.length; i++) h = (h << 5) + h + s.charCodeAt(i);
    return h >>> 0;
}

export function colorForTag(tag?: string | null) {
    if (!tag) return "primary";
    const normalized = String(tag).trim().toLowerCase();

    // exact match
    if (OVERRIDES[normalized]) return OVERRIDES[normalized];

    // fuzzy contains match
    for (const key in OVERRIDES)
        if (normalized.includes(key)) return OVERRIDES[key];

    // deterministic fallback
    return PALETTE[hashString(normalized) % PALETTE.length];
}

export default { colorForTag };
