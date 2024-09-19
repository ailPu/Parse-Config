import { createVueSchemaFromConfig } from "@dummy-hokify/integration-helpers";
import {Project} from "ts-morph";


function generateVueSchema() {
    const project = new Project({
        compilerOptions: {
            strictNullChecks: true
        }
    });

    const sourceFile = project.addSourceFileAtPath(`./types/PostConfig.ts`);
    const interfaceDeclaration = sourceFile.getInterfaceOrThrow(`IPostSourceConfig`);
    // return createVueSchemaFromConfig(interfaceDeclaration);
}

const vueSchema = generateVueSchema();
console.log('vueSchema',vueSchema)
console.log('createVueSchemaFromConfig',createVueSchemaFromConfig)
