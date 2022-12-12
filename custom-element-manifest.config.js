import { generateCustomData } from "cem-plugin-vs-code-custom-data-generator";

export default {
    globs: ["src/**/*.ts"],
    exclude: ["**/*.styles.ts", "**/*.test.ts"],
    plugins: [
        // Generate custom VS Code data
        generateCustomData({
            outdir: "dist",
            htmlFileName: null,
            cssFileName: null,
        }),
    ],
};
