import React from 'react';

type ISourceData = {
  name: string;
  mailReceivedDate: string;
  solutionSentDate?: string;
  isBackgroundColorRed?: boolean;
};

interface LabeledValue {
  source: ISourceData[];
}

const Grid: React.FC<LabeledValue> = ({ source }) => {
  const tableRender = source.map((item) => (
    <tr>
      <td style={{ background: item.isBackgroundColorRed ? 'red' : '' }}>{item.name}</td>
      <td style={{ background: item.isBackgroundColorRed ? 'red' : '' }}>
        {item.mailReceivedDate}
      </td>
      <td style={{ background: item.isBackgroundColorRed ? 'red' : '' }}>
        {item.solutionSentDate}
      </td>
    </tr>
  ));

  return (
    <table id="dgpays">
      <tbody>{tableRender}</tbody>
    </table>
  );
};

export default Grid;
