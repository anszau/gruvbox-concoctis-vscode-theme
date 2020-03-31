# Syntax Highlighting

## Changes to syntax.ts

The following are documented deviations from the Noctis theme for general reference.

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

### CSS ID selectors

```json
{
  "name": "MISC",
  "scope": [
    "entity.other.attribute-name.id",
    "entity.other.attribute-name.id punctuation.definition.entity"
  ]
}
```

Use Misc color for CSS properties.

```css
#someID {
  background-color: rgb(255, 255, 243);
}
```

### CSS Attribute selectors

```json
({
  "name": "TEXT",
  "scope": ["meta.attribute-selector entity.other.attribute-name"]
},
{
  "name": "ITALIC",
  "scope": ["meta.attribute-selector entity.other.attribute-name"]
})
```

Use italic font for Attribute selectors when italic font is enabled and use Foreground palette for text.

```css
main[type="foobar"] {
  margin-top: 24px;
}
```

### CSS colors

```json
{
  "name": "KEYWORD",
  "scope": [
    "entity.other.attribute-name.id",
    "entity.other.attribute-name.id punctuation.definition.entity"
  ]
}
```

Use Keyword color for CSS colors to match 'constant.other.color'.

```css
#someID {
  background-color: #ffffff;
}
```

### HTML/JSX/TSX attributes

```json
({
  "name": "ITALIC",
  "scope": ["meta.tag.attributes entity.other.attribute-name",
      "text.html entity.other.attribute-name"]
}
```

Use italic font for HTML JSX/TSX attributes.

```html
<div class="foo">bar</div>
```

### JSDoc/TSDoc comments

```json
[
  {
    "name": "COMMENT_EMPHASIS",
    "scope": [
      "comment.block.documentation storage.type.class",
      "comment.block.documentation punctuation.definition.block.tag",
      "comment.block.documentation punctuation.definition.inline.tag",
      "comment.block.documentation variable.other"
    ]
  },
  {
    "name": "BOLD-ITALIC",
    "scope": ["comment.block.documentation variable.other"]
  }
]
```

Use emphasized comment color for certain scopes relating to JSDoc/TSDoc. Use bold font with variables within the comment block.

```tsx
/**
 * Fetcher utility
 *
 * @param args - Get funky
 * @return A really sweet dance move
 */
const func = () => null;
```
