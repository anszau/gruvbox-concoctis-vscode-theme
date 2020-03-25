# Syntax Highlighting

## Changes to syntax.ts

### Template Strings

```json
{
  "name": "TEXT",
  "scope": ["string.template meta.object-literal.key"]
}
```

Use forground color for objects inside template strings.

```js
const url = `${baseUrl}${stringify(
  { prop: 123, anotherProp: "foobar" },
  true
)}`;
```

### Shell script variables

```json
{
  "name": "CONSTANT",
  "scope": [
    "variable.other.normal punctuation.definition.variable.shell",
    "variable.other.bracket.shell",
    "variable.other.normal.shell"
  ]
}
```

Use yellow color for variables in shell scripts.

```shell
DIRECTORY="/Users/john"
echo $DIRECTORY
echo ${DIRECTORY}
```

### Makefile variables

```json
{
  "name": "CONSTANT",
  "scope": ["variable.other.makefile"]
}
```

Use yellow color for variables in Makefiles.

```Makefile
ARCHIVE = baz.zip
```

### Pug file attributes

```json
{
  "name": "CONSTANT",
  "scope": ["meta.tag.other entity.other.attribute-name"]
}
```

Use yellow color for HTML attributes in Makefiles.

```pug
<!DOCTYPE html>
html(lang="en")
```

### Env file strings

```json
{
  "name": "STRING",
  "scope": ["source.env"]
}
```

Use green color for env v.

    NODE_ENV=prod

### CSS Properties

```json
{
  "name": "TEXT",
  "scope": ["support.type.property-name", "support.type.vendored"]
}
```

Use foreground color for CSS properties.

```css
.killer-class {
  background-color: rgba(244, 255, 245, 0.5);
}
```
