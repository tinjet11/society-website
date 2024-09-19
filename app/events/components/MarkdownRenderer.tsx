import React from "react";

type Props = {
  markdown: string;
};
import { marked } from "marked";

const MarkdownRenderer = ({ markdown }: Props) => {
  const htmlContent = marked(markdown);
  //const sanitizedHtmlContent = purify.sanitize(htmlContent.toString());

  return (
    <div
      className="text-black"
      dangerouslySetInnerHTML={{ __html: htmlContent.toString() }}
    />
  );
};

export default MarkdownRenderer;
