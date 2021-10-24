const blogEntries = [
  {
    id: 1,
    categories: ["frontEnd"],
    date: "10/24/21",
    title: "Create React App",
    body: "This application was built by following the Create React App guide found here https://create-react-app.dev/",
  },
  {
    id: 2,
    categories: ["hosting"],
    date: "",
    title: "Hosting with Digital Ocean",
    body: `I wanted to be able to show this project off and easily deploy changes.  I was already familiar Digital Ocean's droplets, but saw they introduced "Apps" that make it easy to deploy code without needing to manage the server.`,
  },
  {
    id: 3,
    categories: [],
    date: "10/24/24",
    title: "Code Snippets",
    body: "I wanted to be able to show code examples, so I added the react-syntax-highlighter package to this project and created a wrapper component to be used throughout.",
    code: `
// syntax highlighter
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeSnippetProps {
  code: string;
}

const CodeSnippet = ({ code }: CodeSnippetProps) => {
  return (
    <SyntaxHighlighter language="javascript" style={a11yDark}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
`,
  },
];

export default blogEntries;
