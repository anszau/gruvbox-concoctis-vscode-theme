export default [
  {
    name: "COMMENT",
    scope: [
      "comment",
      "punctuation.definition.comment",
      "punctuation.definition.tag",
      "comment.block.documentation punctuation.definition.bracket",
      "source.ocaml comment constant.regexp meta.separator"
    ],
    settings: {
      foreground: "#5b858b"
    }
  },
  {
    name: "TEXT",
    scope: [
      "constant.character",
      "constant.escape",
      "text.html.markdown",
      "punctuation.definition.list_item",
      "keyword.begin.tag.ejs",
      "constant.name.attribute.tag.pug",
      "source.clojure meta.symbol",
      "constant.other.description.jsdoc",
      "keyword.other.array.phpdoc.php",
      "keyword.operator.other.powershell",
      "meta.link.inline punctuation.definition.string",
      "source.sql",
      "source meta.brace",
      "source punctuation",
      "text.html punctuation",
      "markup meta punctuation.definition",
      "meta.bracket.julia",
      "meta.array.julia",
      "punctuation.separator.key-value",
      "entity.name.footnote",
      "source.ocaml punctuation.definition.tag",
      "source.ocaml entity.name.filename",
      "source.reason entity.name.filename",
      "entity.other.attribute-name strong",
      "binding.fsharp keyword.symbol.fsharp",
      "entity.name.record.field.elm",
      "entity.name.record.field.accessor.elm",
      "storage.modifier.array.bracket",
      "source.css entity.other",
      "meta.attribute-selector punctuation.definition.entity",
      "string.template meta.object-literal.key" // Added.
    ],
    settings: {
      foreground: "#b2cacd"
    }
  },
  {
    name: "KEYWORD",
    scope: [
      "keyword",
      "keyword.control",
      "keyword.other.template",
      "keyword.other.substitution",
      "storage.modifier",
      "meta.tag.sgml",
      "punctuation.accessor",
      "constant.other.color",
      "entity.name.section",
      "markup.heading",
      "markup.heading punctuation.definition",
      "entity.other.attribute-name.pseudo-class",
      "entity.other.attribute-name.pseudo-element",
      "tag.decorator.js entity.name.tag.js",
      "tag.decorator.js punctuation.definition.tag.js",
      "storage.type.function.pug",
      "text.pug storage.type",
      "text.pug meta.tag.other",
      "source.clojure storage.control",
      "meta.expression.clojure",
      "punctuation.separator.slice.python",
      "punctuation.separator.question-mark.cs",
      "punctuation.definition.parameters.varargs",
      "source.go keyword.operator",
      "punctuation.separator.pointer-access",
      "punctuation.separator.other.ruby",
      "keyword.package",
      "keyword.import",
      "punctuation.definition.keyword",
      "punctuation.separator.hash.cs",
      "variable.parameter.rest.lua",
      "entity.other.attribute-name.pseudo-class.css punctuation.definition.entity.css",
      "entity.other.attribute-name.pseudo-element.css punctuation.definition.entity.css",
      "source.kotlin storage.type.import",
      "source.kotlin storage.type.package",
      "constant.string.documentation.powershell",
      "punctuation.section.directive",
      "storage.type.rust",
      "punctuation.definition.attribute",
      "punctuation.definition.preprocessor",
      "punctuation.separator.namespace",
      "punctuation.separator.method",
      "keyword.control punctuation.definition.function",
      "source.ocaml variable.interpolation string",
      "source.reason variable.interpolation",
      "punctuation.definition.directive",
      "storage.type.modifier",
      "keyword.other.class.fileds",
      "source.toml entity.other.attribute-name",
      "source.css entity.name.tag.custom",
      "sharing.modifier",
      "keyword.control.class.ruby",
      "keyword.control.def.ruby"
    ],
    settings: {
      foreground: "#df769b"
    }
  },
  {
    name: "VARIABLE",
    scope: [
      "variable",
      "variable.object",
      "variable.other",
      "variable.parameter",
      "support",
      "entity.name.module",
      "variable.import.parameter",
      "variable.other.class",
      "meta.toc-list.id.html",
      "source.json meta.structure.dictionary.json support.type.property-name.json",
      "markup.list",
      "meta.var.clojure",
      "entity.name.variable",
      "source.java meta.class.body.java",
      "entity.name.package.go",
      "source.c",
      "source.cpp",
      "source.go",
      "source.python",
      "meta.function-call.arguments.python",
      "source.ruby",
      "source.coffee.embedded.source",
      "source.coffee",
      "storage.modifier.import",
      "storage.modifier.package",
      "storage.type.annotation",
      "punctuation.definition.annotation",
      "source.groovy.embedded.source",
      "punctuation.definition.variable",
      "source.powershell",
      "string.quoted.interpolated.vala constant.character.escape.vala",
      "source.apacheconf",
      "source.objc",
      "source.crystal",
      "string.quoted.double.kotlin entity.string.template.element.kotlin",
      "entity.name.package.kotlin",
      "meta.template.expression.kotlin",
      "parameter.variable.function",
      "variable.other.constant.elixir",
      "source.elixir.embedded.source",
      "source.sql.embedded",
      "punctuation.definition.placeholder",
      "source.swift",
      "source.julia",
      "source.shell",
      // "variable.other.normal punctuation.definition.variable.shell", // Removed.
      "source.reason variable.language",
      "source.reason variable.language string.other.link",
      "source.elm meta.value",
      "source.elm meta.declaration.module",
      "meta.embedded.block variable punctuation.definition.variable.php",
      "string.quoted.double.class.other",
      "source.toml keyword",
      "support.type.nim",
      "source.tf meta.template.expression",
      "source.scala entity.name.import"
    ],
    settings: {
      foreground: "#e4b781"
    }
  },
  {
    name: "ANNOTATION",
    scope: [
      "support.variable.property",
      "constant.other.symbol.hashkey.ruby",
      "constant.other.symbol.hashkey.ruby punctuation.definition.constant.ruby",
      "entity.other.attribute-name.id",
      "entity.other.attribute-name.id punctuation.definition.entity",
      "entity.name.type.annotation.kotlin",
      "support.type.primitive",
      "meta.type.parameters entity.name.type",
      "meta.type.annotation entity.name.type",
      "punctuation.definition.typeparameters",
      "source.python support.type.python",
      "comment.block.documentation.phpdoc.php keyword.other.type.php",
      "storage.type.php",
      "keyword.type",
      "storage.type.cs",
      "storage.type.c",
      "storage.type.objc",
      "punctuation.definition.storage.type.objc",
      "markup punctuation.definition",
      "storage.type.powershell",
      "comment.block.documentation entity.name.type",
      "source.java storage.type",
      "storage.type.primitive",
      "source.groovy storage.type",
      "storage.type.r",
      "source.haskell storage.type",
      "punctuation.separator.clause-head-body",
      "source.go storage.type",
      "storage.type.core.rust",
      "storage.class.std.rust",
      "storage.modifier.lifetime.rust",
      "entity.name.lifetime.rust",
      "support.type.vb",
      "entity.name.type.kotlin",
      "support.type.julia",
      "constant.other.reference",
      "source.graphql support.type",
      "source.reason support.type string",
      "entity.name.type.fsharp",
      "source.elm storage.type",
      "storage.type.user-defined",
      "storage.type.built-in",
      "support.type.builtin",
      "source.swift support.type",
      "support.class.crystal",
      "storage.type.integral",
      "source.cpp storage.type.cpp",
      "source.vala storage.type",
      "source.hlsl storage.type.basic",
      "source.hlsl support.type.other",
      "source.apex storage.type",
      "source.nim storage.type",
      "source.cpp entity.name.type",
      "support.class.builtin",
      "source.tf meta.keyword.string",
      "source.tf meta.keyword.number",
      "source.scala entity.name.class"
    ],
    settings: {
      foreground: "#d67e5c"
    }
  },
  {
    name: "CONSTANT",
    scope: [
      "constant",
      "variable.other.constant",
      "support.constant",
      "punctuation.definition.entity",
      "constant.character.entity",
      "support.variable.magic",
      "markup.quote",
      "entity.name.type.type-parameter.cs",
      "punctuation.bracket.angle",
      "entity.name.function.preprocessor.c",
      "storage.type.scala",
      "entity.helper.apacheconf",
      "variable.language.crystal",
      "punctuation.definition.constant",
      "support.constant punctuation.definition.variable",
      "constant.character.math",
      "support.class.math",
      "source.graphql constant.character",
      "source.reason constant.language.list",
      "source.cpp variable.other.enummember",
      "meta.table.lua variable.other",
      "support.variable.class.hideshow",
      "entity.other.attribute-name.class",
      "meta.attribute.id entity.other.attribute-name",
      "text.html entity.other.attribute-name",
      "meta.tag.attributes entity.other.attribute-name",
      "text.xml entity.other.attribute-name",
      "source.cs entity.other.attribute-name",
      "constant.character.format.placeholder",
      "constant.other.placeholder",
      "variable.other.normal", // Added.
      "variable.other.normal punctuation.definition.variable.shell", // Added.
      "variable.other.makefile" // Added.
    ],
    settings: {
      foreground: "#d5971a"
    }
  },
  {
    name: "TAG",
    scope: [
      "variable.language",
      "variable.parameter.function.language.special",
      "markup.bold",
      "markup.italic",
      "punctuation.definition.italic",
      "punctuation.definition.bold",
      "entity.name.tag",
      "variable.language punctuation.definition.variable",
      "keyword.control.clojure",
      "support.type.exception.python",
      "keyword.other.this.cs",
      "keyword.other.base.cs",
      "keyword.other.var.cs",
      "storage.modifier.super",
      "source.go keyword",
      "keyword.function.go",
      "meta.separator",
      "keyword.other.fn.rust",
      "storage.modifier.static.rust",
      "source.r meta.function.r keyword.control.r",
      "storage.type.def",
      "meta.class.identifier storage.modifier",
      "source.scala keyword.declaration",
      "storage.type",
      "comment.block.documentation punctuation.definition.block.tag",
      "comment.block.documentation punctuation.definition.inline.tag",
      "entity.tag.apacheconf",
      "keyword.other.julia",
      "source.julia storage.modifier",
      "constant.language.empty-list.haskell",
      "meta.function.powershell storage.type.powershell",
      "keyword.control.fun",
      "punctuation.terminator.function",
      "keyword.other.rust",
      "keyword.other.declaration-specifier.swift",
      "keyword.control.function-end.lua",
      "keyword.control.class",
      "keyword.control.def",
      "source.ocaml keyword markup.underline",
      "source.ocaml storage.type markup.underline",
      "binding.fsharp keyword",
      "function.anonymous keyword",
      "function.anonymous keyword.symbol.fsharp",
      "meta.embedded.block variable.language punctuation.definition.variable.php",
      "keyword.declaration.dart",
      "source.wsd keyword.other.class",
      "source.wsd keyword.other.linebegin",
      "keyword.other.skinparam.keyword",
      "keyword.other.nim",
      "markup.deleted.diff",
      "source.tf support.class.variable"
    ],
    settings: {
      foreground: "#e66533"
    }
  },
  {
    name: "STRING",
    scope: [
      "string",
      "punctuation.definition.string",
      "source.css support.constant",
      "entity.name.import.go",
      "markup.raw.texttt",
      "markup.inserted.diff",
      "source.scala punctuation.definition.character",
      "constant.character.literal.scala",
      "source.tf entity.name",
      "source.env" // Added.
    ],
    settings: {
      foreground: "#49e9a6"
    }
  },
  {
    name: "STRINGINTERPOLATED",
    scope: [
      "string.template",
      "punctuation.definition.string.template",
      "string.interpolated.python string.quoted.single.python",
      "string.quoted.double.heredoc",
      "string.quoted.interpolated.vala",
      "string.quoted.interpolated.vala punctuation.definition.string",
      "string.regexp.apacheconf",
      "markup.inline.raw.string",
      "markup.inline.raw punctuation.definition.raw",
      "string.quoted.double.interpolated.crystal",
      "string.quoted.double.interpolated.crystal punctuation.definition.string",
      "text.tex markup.raw"
    ],
    settings: {
      foreground: "#16b673"
    }
  },
  {
    name: "NUMBER",
    scope: [
      "constant.numeric",
      "constant.language",
      "punctuation.separator.decimal.period.php",
      "keyword.operator.null-conditional.cs",
      "punctuation.separator.question-mark.cs",
      "constant.integer.apacheconf",
      "keyword.operator.nullable-type",
      "constant.language punctuation.definition.variable",
      "constant.others.fsharp",
      "keyword.other.unit",
      "string.quoted.double.skinparam.value",
      "source.toml constant"
    ],
    settings: {
      foreground: "#7060eb"
    }
  },
  {
    name: "FUNCTION",
    scope: [
      "variable.function",
      "support.type.property-name",
      "entity.name.function",
      "string.other.link",
      "markup.link",
      "support.type.vendored",
      "support.other.variable",
      "meta.function-call.generic.python",
      "meta.method-call.groovy meta.method.groovy",
      "meta.class.body.groovy meta.method.body.java storage.type.groovy",
      "punctuation.definition.decorator",
      "support.function.any-method",
      "text.tex support.function",
      "text.tex punctuation.definition.function",
      "entity.name.section.fsharp entity.name.section.fsharp",
      "support.variable.class.function",
      "keyword.control.cucumber.table",
      "punctuation.decorator",
      "source.tf support.class",
      "support.function.builtin.shell" // Added.
    ],
    settings: {
      foreground: "#16a3b6"
    }
  },
  {
    name: "SUPPORT",
    scope: [
      "entity.name",
      "entity.other",
      "support.orther.namespace.use.php",
      "meta.use.php",
      "support.other.namespace.php",
      "support.type",
      "support.class",
      "punctuation.definition.parameters",
      "support.function",
      "support.function.construct",
      "markup.changed.git_gutter",
      "markup.underline.link",
      "markup.underline.link.image",
      "markup.underline",
      "meta.symbol.namespace.clojure",
      "entity.mime-type.apacheconf",
      "keyword.operator.function.infix",
      "entity.name.function.infix",
      "entity.name.function.call.kotlin",
      "text.tex support.function.verb",
      "text.tex support.function.texttt",
      "source.reason constant.language.unit",
      "source.ocaml constant.language constant.numeric entity.other.attribute-name.id.css",
      "source.reason entity.other.attribute-name constant.language constant.numeric",
      "constant.language.unit.fsharp",
      "source.wsd support.class.preprocessings",
      "keyword.language.gherkin.feature.scenario",
      "source.nim keyword.other.common.function",
      "entity.name.type.namespace",
      "entity.name.scope-resolution.function.call"
    ],
    settings: {
      foreground: "#49d6e9"
    }
  },
  {
    name: "MISC",
    scope: [
      "source.js constant.other.object.key.js string.unquoted.label.js",
      "source.js punctuation.section.embedded",
      "punctuation.definition.template-expression",
      "support.class",
      "entity.name.type",
      "storage.type.string.python",
      "string.interpolated.pug",
      "support.constant.handlebars",
      "source.clojure punctuation.section.set",
      "source.clojure punctuation.section.metadata",
      "entity.global.clojure",
      "source.python meta.function-call.python support.type.python",
      "entity.other.inherited-class.python",
      "punctuation.definition.interpolation",
      "punctuation.section.embedded.begin.ruby",
      "punctuation.section.embedded.end.ruby source.ruby",
      "support.constant.math",
      "entity.namespace.r",
      "meta.method-call.groovy storage.type.groovy",
      "entity.name.function-table.lua",
      "source.scala entity.name.class.declaration",
      "constant.character.escape",
      "support.function.macro.julia",
      "string.replacement.apacheconf",
      "storage.modifier.using.vala",
      "constant.other.haskell",
      "source.objc entity.name.tag",
      "string.quoted.other.literal.upper.crystal punctuation.definition.string",
      "meta.embedded.line.crystal punctuation.section.embedded",
      "meta.embedded.line.crystal punctuation.section.embedded source.crystal",
      "punctuation.section.embedded",
      "punctuation.section.tag",
      "punctuation.section.embedded source.swift",
      "variable.other.bracket punctuation.definition.variable",
      "string.interpolated.dollar punctuation.definition.string",
      "constant.character.escape punctuation.definition.keyword",
      "source.ocaml entity.name.class constant.numeric",
      "source.reason entity.name.class",
      "keyword.format.specifier.fsharp",
      "support.module.elm",
      "meta.embedded.block.php punctuation.definition.variable.php",
      "support.variable.lua",
      "source.vala storage.type",
      "support.variable.class.group",
      "entity.name.type.class",
      "source.tf meta.keyword.list",
      "source.tf meta.keyword.map"
    ],
    settings: {
      foreground: "#49ace9"
    }
  },
  {
    name: "INVALID",
    scope: ["invalid", "invalid.illegal"],
    settings: {
      foreground: "#e3541c"
    }
  },
  {
    name: "ITALIC",
    scope: [
      "comment",
      "storage.modifier",
      "punctuation.definition.comment",
      "entity.other",
      "variable.language",
      "support.type.vendored",
      "support.constant.vendored",
      "markup.quote",
      "markup.italic",
      "tag.decorator.js entity.name.tag.js",
      "tag.decorator.js punctuation.definition.tag.js",
      "keyword.control.clojure",
      "source.clojure meta.symbol.dynamic",
      "keyword.other.this.cs",
      "keyword.other.base.cs",
      "variable.other.member.c",
      "support.type.core.rust",
      "variable.other.object.property",
      "variable.other.property",
      "source.r meta.function.r keyword.control.r",
      "comment.line.roxygen.r keyword",
      "comment.line.roxygen.r variable.parameter.r",
      "keyword.control.inheritance.coffee",
      "comment.block.documentation.phpdoc.php keyword",
      "keyword.other.array.phpdoc.php",
      "storage.type.modifier",
      "comment.block.javadoc.java keyword",
      "comment.block.javadoc.java variable.parameter.java",
      "keyword.operator.documentation.powershell",
      "variable.other.table.property.lua",
      "storage.type.scala",
      "variable.parameter.function.language.special",
      "comment.block.documentation.scala keyword",
      "comment.block.documentation.scala variable.parameter",
      "support.function.builtin.go",
      "constant.other.symbol.hashkey.ruby",
      "constant.other.symbol.hashkey.ruby punctuation.definition.constant.ruby",
      "constant.other.symbol.ruby",
      "source.vala storage.type.generic",
      "constant.other.table-name",
      "constant.other.placeholder",
      "variable.other.field",
      "keyword.function.go",
      "entity.alias.import.go",
      "source.swift keyword.other.declaration-specifier",
      "support.variable.swift",
      "keyword.other.capture-specifier",
      "text.tex support.function.emph",
      "constant.other.math",
      "support.function.textit",
      "entity.name.footnote",
      "entity.name.function.directive.graphql",
      "source.graphql support.type.enum",
      "source.ocaml entity.name.filename",
      "source.reason entity.name.filename",
      "abstract.definition.fsharp keyword",
      "abstract.definition.fsharp entity",
      "function.anonymous keyword",
      "entity.name.record.field.accessor.elm",
      "support.type.primitive",
      "support.type.builtin",
      "keyword.type.cs",
      "storage.type.built-in",
      "storage.type.primitive",
      "source.python support.type.python",
      "storage.type.core.rust",
      "source.swift support.type",
      "source.go storage.type",
      "storage.type.php",
      "storage.type.function.kotlin",
      "entity.name.type.kotlin",
      "support.type.julia",
      "variable.other.member",
      "keyword.other.import",
      "keyword.package",
      "keyword.import",
      "source.wsd keyword.control.diagram",
      "keyword.language.gherkin.feature.step",
      "source.hlsl storage.type.basic",
      "source.apex keyword.type",
      "sharing.modifier",
      "source.nim storage.type.concrete",
      "meta.preprocessor.pragma.nim",
      "storage.type.integral",
      "entity.name.scope-resolution.function.call",
      "support.class.builtin",
      "comment.block.documentation storage.type.class",
      "source.tf meta.keyword.string",
      "source.tf meta.keyword.number",
      "source.scala entity.name.class",
      "meta.import keyword.control",
      "keyword.control.export"
    ],
    settings: {
      fontStyle: ""
    }
  },
  {
    name: "BOLD",
    scope: [
      "keyword",
      "keyword.control",
      "keyword.operator",
      "keyword.other.template",
      "keyword.other.substitution",
      "storage.type.function.arrow",
      "constant.other.color",
      "punctuation.accessor",
      "entity.name.section",
      "markup.bold",
      "markup.bold string",
      "markdown.heading",
      "markup.inline.raw punctuation.definition.raw",
      "markup.heading",
      "storage.type.function.pug",
      "storage.type.function.python",
      "storage.type.annotation",
      "punctuation.bracket.angle",
      "keyword.other.new",
      "punctuation.separator.question-mark.cs",
      "storage.type.generic.wildcard",
      "source.go keyword.operator",
      "punctuation.separator.namespace",
      "constant.other.symbol.ruby punctuation.definition.constant.ruby",
      "variable.parameter",
      "support.function.builtin.rust",
      "storage.type.function.coffee",
      "entity.name.variable.parameter",
      "punctuation.separator.hash.cs",
      "constant.other.symbol.ruby punctuation.definition.constant.ruby",
      "constant.other.symbol.hashkey.ruby punctuation.definition.constant.ruby",
      "meta.function.parameters variable.other",
      "entity.name.type.annotation.kotlin",
      "storage.type.objc",
      "parameter.variable.function",
      "markup punctuation.definition",
      "punctuation.section.directive",
      "punctuation.definition.preprocessor",
      "source.ruby punctuation.definition.variable",
      "punctuation.separator.method",
      "support.function.textbf",
      "source.graphql support.type.builtin",
      "source.ocaml variable.interpolation string",
      "entity.name.function.definition.special.constructor",
      "entity.name.function.definition.special.member.destructor.",
      "meta.function.parameters variable punctuation.definition.variable.php",
      "source.wsd keyword.other.activity",
      "keyword.control.class.ruby",
      "keyword.control.def.ruby"
    ],
    settings: {
      fontStyle: ""
    }
  },
  {
    name: "BOLD-ITALIC",
    scope: [
      "markup.bold markup.italic",
      "markup.italic markup.bold",
      "markup.quote markup.bold",
      "markup.bold markup.italic string",
      "markup.italic markup.bold string",
      "markup.quote markup.bold string",
      "text.html punctuation.section.embedded",
      "variable.other.c",
      "storage.modifier.lifetime.rust",
      "entity.name.lifetime.rust",
      "source.rust meta.attribute.rust",
      "meta.attribute.id entity.other.attribute-name",
      "keyword.other.fn.rust",
      "source.ocaml punctuation.definition.tag emphasis",
      "source.tf entity.name"
    ],
    settings: {
      fontStyle: ""
    }
  },
  {
    name: "NORMAL",
    scope: [
      "keyword.begin.tag.ejs",
      "source.python meta.function.decorator.python support.type.python",
      "source.cs keyword.other",
      "keyword.other.var.cs",
      "source.go keyword",
      "storage.modifier.static.rust",
      "variable.parameter.r",
      "variable.parameter.handlebars",
      "storage.modifier.import",
      "storage.modifier.package",
      "meta.class.identifier storage.modifier",
      "keyword.operator.other.powershell",
      "source.lua storage.type.function",
      "source.css variable.parameter",
      "string.interpolated variable.parameter",
      "source.apacheconf keyword",
      "keyword.other.julia",
      "storage.modifier.using.vala",
      "source.objc keyword.other.property.attribute",
      "source.sql keyword.other",
      "keyword.other.using.vala",
      "keyword.operator.function.infix",
      "keyword.control.directive",
      "keyword.other.rust",
      "keyword.other.declaration-specifier.swift",
      "entity.name.function.swift",
      "keyword.control.function-end.lua",
      "keyword.control.class",
      "keyword.control.def",
      "punctuation.definition.variable",
      "entity.name.section.latex",
      "source.ocaml keyword markup.underline",
      "source.ocaml constant.language constant.numeric entity.other.attribute-name.id.css",
      "source.reason entity.other.attribute-name constant.language constant.numeric",
      "keyword.format.specifier.fsharp",
      "entity.name.section.fsharp",
      "binding.fsharp keyword",
      "binding.fsharp keyword.symbol",
      "record.fsharp keyword",
      "keyword.symbol.fsharp",
      "entity.name.section.fsharp keyword",
      "namespace.open.fsharp keyword",
      "namespace.open.fsharp entity",
      "storage.type",
      "source.cpp keyword.other",
      "source.c keyword.other",
      "keyword.other.unit",
      "storage.modifier.array.bracket",
      "keyword.control.default",
      "meta.import.haskell keyword",
      "keyword.declaration.dart",
      "source.wsd keyword.other",
      "keyword.other.skinparam",
      "source.css keyword.control",
      "source.css keyword.operator",
      "keyword.language.gherkin.feature.scenario",
      "keyword.control.cucumber.table",
      "source.toml entity.other.attribute-name",
      "source.toml keyword",
      "keyword.other.nim",
      "source.nim keyword.other.common.function",
      "source.nim keyword.other",
      "source.scala keyword.declaration",
      "source.scala entity.name.class.declaration"
    ],
    settings: {
      fontStyle: ""
    }
  }
];
