import React, { useState, useEffect } from 'react';

import Input from 'components/Input/Input';
import Pagination from 'components/Pagination/Pagination';

import { ContractWrapper, ContractMeta, ListHeader } from './ContractsList.styles';

import { Comment } from 'types';
import {PeopleIcon, Entities2Icon, BroadcastIcon} from 'styles';
import {FilterSelectWrapper} from "../pages/Entities/components/EntitiesList/EntitiesList.styles";

const ContractsList: React.FC = () => {
  const [filterString, setFilterString] = useState<string>('');
  const [contracts, setContracts] = useState<Comment[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  const handleFilterChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setFilterString((ev.target as HTMLInputElement).value);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((json) => {
        setContracts(json);
        setTotalPages(Math.ceil(json.length / 10));
      });
  }, [])

  const filterContractsByTitle = ({ name }: { name: string }) => {
    if (filterString === '') return true
    return name.toLowerCase().includes(filterString.toLowerCase());
  }

  const handlePaginationPageChange = (selectedItem: {selected: number}) => {
    setCurrentPage(selectedItem.selected);
  }

  const contractsToShow = contracts.filter(filterContractsByTitle).slice(currentPage * 10, (currentPage + 1) * 10);

  return (
    <>
      <ListHeader>
        <h2>Resume your work</h2>

        <div>
          <Input inputType={'search'} align={'left'} placeholder={'Filter by title...'} onChange={handleFilterChange} />

          <FilterSelectWrapper>
            <BroadcastIcon />
            <select>
              <option value="">Followed</option>
            </select>
          </FilterSelectWrapper>
        </div>
      </ListHeader>
      {contractsToShow.map(contract => (
        <ContractWrapper>
          <h3>{contract.name}</h3>
          <p>
            {contract.body}
          </p>
          <ContractMeta>
          <span>
            <PeopleIcon />
            Subsid.corp.
          </span>

            <span>
            <Entities2Icon />
            Supplier contract
          </span>

            <span>
            Updated 1 month ago || {contract.name}
          </span>

          </ContractMeta>
        </ContractWrapper>
      ))}
      <Pagination marginPagesDisplayed={1} pageCount={totalPages} pageRangeDisplayed={2} onPageChange={handlePaginationPageChange} />
    </>
  )
}

export default ContractsList;