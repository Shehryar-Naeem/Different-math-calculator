import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function App() {
  return (
    <MathJaxContext>
      <h2>Basic MathJax example with MathML</h2>
      <MathJax>
        <math>
          <mtable>
            <mtr>
              <mtd><mn>1</mn></mtd>
              <mtd><mn>1</mn></mtd>
            </mtr>
            <mtr>
              <mtd><mn>2</mn></mtd>
              <mtd><mn>2</mn></mtd>
            </mtr>
          </mtable>
        </math>
      </MathJax>
    </MathJaxContext>
  );
}