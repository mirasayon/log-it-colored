export const string_format = (...content: unknown[]) => {
    return content
        .map((c) => {
            if (typeof c === "string") return c;
            if (c === undefined) return "undefined";
            if (c === null) return "null";
            try {
                return typeof c === "object" ? JSON.stringify(c, null, 2) : String(c);
            } catch {
                // fallback for circular objects
                try {
                    return String(c);
                } catch {
                    return "[Unserializable]";
                }
            }
        })
        .join(" ");
};
