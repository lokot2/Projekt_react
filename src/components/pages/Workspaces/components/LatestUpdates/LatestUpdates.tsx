import React, {useEffect, useState} from 'react';

import Input from "components/Input/Input";
import Pagination from "components/Pagination/Pagination";
import { FilterSelectWrapper } from "components/pages/Entities/components/EntitiesList/EntitiesList.styles";

import { LastUpdatesHeader, LatestUpdatesWrapper, FilterTags, Tag, Update, UpdateMeta } from './LatestUpdates.styles';
import { EntitiesIcon, BroadcastIcon } from "styles";

const LatestUpdates: React.FC = () => {
  const [filterString, setFilterString] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [updates, setUpdates] = useState<[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setUpdates(json);
        setTotalPages(Math.ceil(json.length / 9));
      });
  }, [])

  const handleFilterChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setFilterString((ev.target as HTMLInputElement).value);
  }

  const filterUpdatesByTitle = ({ title }: { title: string }) => {
    if (filterString === '') return true
    return title.toLowerCase().includes(filterString.toLowerCase());
  }

  const handlePaginationPageChange = (selectedItem: {selected: number}) => {
    setCurrentPage(selectedItem.selected);
  }

  const filteredUpdates = updates.filter(filterUpdatesByTitle).slice(currentPage * 9, (currentPage + 1) * 9);

  return (
    <LatestUpdatesWrapper>
      <LastUpdatesHeader>
        <h4>Latest updates</h4>

        <div>
          <Input inputType={'search'} align={'left'} placeholder={'Search ...'} onChange={handleFilterChange} />

          <FilterSelectWrapper>
            <BroadcastIcon />
            <select>
              <option value="">Followed</option>
            </select>
          </FilterSelectWrapper>
        </div>
      </LastUpdatesHeader>

      <FilterTags>
        <Tag> All </Tag>
        <Tag textColor={'#667566'}> SAS </Tag>
        <Tag textColor={'#667475'}> SARL </Tag>
        <Tag textColor={'#757366'}> Secondary business </Tag>
        <Tag textColor={'#636363'}> Communities </Tag>
        <Tag textColor={'#8a8a8a'}> POA </Tag>
        <Tag> Survey </Tag>
        <Tag> ... </Tag>
      </FilterTags>

      {filteredUpdates.map(({title, body}) => <Update>
        <h4>{title}</h4>
        <p>{body}</p>

        <UpdateMeta>
          <Tag link> SaaS </Tag>
          <span>Updated 1 month ago by Norbert Lekki</span>
        </UpdateMeta>
      </Update>)}

      <Pagination marginPagesDisplayed={1} pageCount={totalPages} pageRangeDisplayed={2} onPageChange={handlePaginationPageChange} />
    </LatestUpdatesWrapper>
  )
}

export default LatestUpdates;