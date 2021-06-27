import React from 'react';

import { Entity } from 'types';

import { Table } from 'styles/shared';

interface Props {
    entities: Entity[]
}

const ProposalsTable: React.FC<Props> = ({entities}) => (
  <Table>
    <thead>
    <td>Name</td>
    <td>Entity</td>
    <td>Location</td>
    <td>Expertise</td>
    <td>Date</td>
    <td>Firm</td>
    </thead>
    <tbody>
        {entities.map(({name, entity, location, expertise, date, firm}) => <tr>
            <td>{name}</td>
            <td>{entity}</td>
            <td>{location}</td>
            <td>{expertise}</td>
            <td>{date}</td>
            <td>{firm}</td>
        </tr>)}
    </tbody>
  </Table>
)

export default ProposalsTable;