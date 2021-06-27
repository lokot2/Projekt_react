import React from 'react';

import { Fee } from 'types';

import { Table } from 'styles/shared';

interface Props {
  fees: Fee[]
}

const FeesTable: React.FC<Props> = ({fees}) => (
  <Table>
    <thead>
      <td>Year</td>
      <td>Cost center</td>
      <td>Total amount</td>
      <td>Law firm</td>
    </thead>
    <tbody>
    {fees.map(({year, costCenter, lawFirm, totalAmount}) =><tr>
      <td>{year}</td>
      <td>{costCenter}</td>
      <td>{totalAmount}</td>
      <td>{lawFirm}</td>
    </tr>)}
    </tbody>
  </Table>
)

export default FeesTable;