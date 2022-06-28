"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgJestCompiler = void 0;
const ts_compiler_1 = require("ts-jest/dist/compiler/ts-compiler");
const downlevel_ctor_1 = require("../transformers/downlevel-ctor");
const replace_resources_1 = require("../transformers/replace-resources");
class NgJestCompiler extends ts_compiler_1.TsCompiler {
    constructor(configSet, jestCacheFS) {
        super(configSet, jestCacheFS);
        this.configSet = configSet;
        this.jestCacheFS = jestCacheFS;
        this._logger.debug('created NgJestCompiler');
    }
    _transpileOutput(fileContent, fileName) {
        const diagnostics = [];
        const compilerOptions = Object.assign({}, this._compilerOptions);
        const options = compilerOptions
            ?
                this._ts.fixupCompilerOptions(compilerOptions, diagnostics)
            : {};
        const defaultOptions = this._ts.getDefaultCompilerOptions();
        for (const key in defaultOptions) {
            if (this._ts.hasProperty(defaultOptions, key) && options[key] === undefined) {
                options[key] = defaultOptions[key];
            }
        }
        for (const option of this._ts.transpileOptionValueCompilerOptions) {
            options[option.name] = option.transpileOptionValue;
        }
        options.suppressOutputPathCheck = true;
        options.allowNonTsExtensions = true;
        const inputFileName = fileName || (compilerOptions && compilerOptions.jsx ? 'module.tsx' : 'module.ts');
        const sourceFile = this._ts.createSourceFile(inputFileName, fileContent, options.target);
        const newLine = this._ts.getNewLineCharacter(options);
        let outputText;
        let sourceMapText;
        const compilerHost = {
            getSourceFile: (fileName) => (fileName === this._ts.normalizePath(inputFileName) ? sourceFile : undefined),
            writeFile: (name, text) => {
                if (this._ts.fileExtensionIs(name, '.map')) {
                    this._ts.Debug.assertEqual(sourceMapText, undefined, 'Unexpected multiple source map outputs, file:', name);
                    sourceMapText = text;
                }
                else {
                    this._ts.Debug.assertEqual(outputText, undefined, 'Unexpected multiple outputs, file:', name);
                    outputText = text;
                }
            },
            getDefaultLibFileName: () => 'lib.d.ts',
            useCaseSensitiveFileNames: () => false,
            getCanonicalFileName: (fileName) => fileName,
            getCurrentDirectory: () => '',
            getNewLine: () => newLine,
            fileExists: (fileName) => fileName === inputFileName,
            readFile: () => '',
            directoryExists: () => true,
            getDirectories: () => [],
        };
        this.program = this._ts.createProgram([inputFileName], options, compilerHost);
        if (this.configSet.shouldReportDiagnostics(inputFileName)) {
            this._ts.addRange(diagnostics, this.program.getSyntacticDiagnostics(sourceFile));
            this._ts.addRange(diagnostics, this.program.getOptionsDiagnostics());
        }
        this.program.emit(undefined, undefined, undefined, undefined, this._makeTransformers(this.configSet.resolvedTransformers));
        if (outputText === undefined)
            return this._ts.Debug.fail('Output generation failed');
        return { outputText, diagnostics, sourceMapText };
    }
    _makeTransformers(customTransformers) {
        return Object.assign(Object.assign(Object.assign({}, super._makeTransformers(customTransformers).after), super._makeTransformers(customTransformers).afterDeclarations), { before: [
                ...customTransformers.before.map((beforeTransformer) => beforeTransformer.factory(this, beforeTransformer.options)),
                (0, replace_resources_1.replaceResources)(this),
                (0, downlevel_ctor_1.constructorParametersDownlevelTransform)(this.program),
            ] });
    }
}
exports.NgJestCompiler = NgJestCompiler;
