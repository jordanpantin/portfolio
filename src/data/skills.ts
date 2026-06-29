export const skillGroups = [
    {
        title: "Applications web et mobile",
        copy: "Langages, frameworks et données pour construire et faire évoluer des produits métier, des APIs et des interfaces.",
        items: [
            { name: ".NET" },
            { name: "Angular" },
            { name: "SQL" },
            { name: "Tailwind" },
            { name: ".NET MAUI" },
            { name: "Flutter" },
        ],
    },
    {
        title: "Plateforme et livraison",
        copy: "Cloud, conteneurs, versioning et observabilité pour déployer, exploiter et maintenir un socle en entreprise.",
        items: [
            { name: "Azure" },
            { name: "Docker" },
            { name: "Git" },
            { name: "Jira" },
            { name: "ELK Stack" },
        ],
    },
] as const;
