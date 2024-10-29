import _kebabCase from 'lodash/kebabCase'

interface ModuleImportInterface {
    default: object
}

export default {
    install(app: { component: (arg0: string, arg1: object) => void }) {
        const componentFiles = import.meta.glob('./../components/**/*.vue', {
            eager: true,
        })
        const componentFilesEntries = Object.entries(componentFiles)
        for (const [componentPath, moduleImport] of componentFilesEntries) {
            const componentName: string | undefined = _kebabCase(componentPath
                .split('/')
                .pop()
                ?.replace('.vue', ''))

            if (!componentName) {
                console.warn(`The componentName couldn't be extracted from path > ${componentPath} `)
                continue
            }
            app.component(`v-${componentName.replaceAll('-', '')}`!, (moduleImport as ModuleImportInterface).default)
        }
    },
}
