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
