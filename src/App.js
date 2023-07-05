import { useState } from 'react'
import { marked } from 'marked'
import './App.css';

function App() {
  const [text, setText] = useState(`
# H1 Heading
## H2 Sub Heading
[Link Title](https://www.example.com)
\`inline code\`

\`\`\`
// Code Block
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 30
}
\`\`\`

- List Item 1
- List Item 2
- List Item 3

> Blockquote

![Image Alt Text](image.jpg)

**Bold Text**
`);


  marked.setOptions({
    breaks: true
  })
  return (
    <div className="App">
      <h1 className="headings">Editor</h1>
     <textarea id="editor" onChange={(event) => {setText(event.target.value);
    }} value={text}>
      
    </textarea>
    <h1 className="headings">Previewer</h1>
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(text),}}></div>
    </div>
  )
} 

export default App;
