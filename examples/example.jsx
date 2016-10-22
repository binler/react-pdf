import React from 'react';
import ReactPDF from '../';
import lorem from './lorem';

let doc =
  <document title="Lorem Ipsum" author="@diegomura" otherData="Something else">
    <page margin={50}>
      <text height={200} align="center" underline>
        ~ Lorem ipsum ~
      </text>
      <text columns={3} columnGap={15} align='justify'>
        {lorem}
      </text>
    </page>
  </document>

ReactPDF.render(doc, './examples/example.pdf')