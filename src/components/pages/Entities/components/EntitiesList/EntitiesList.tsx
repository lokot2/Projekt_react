import React, { useEffect, useState, useContext } from 'react';

import Input from 'components/Input/Input';
import FilterSelect from './components/FilterSelect';
import { EntitiesWrapper, Entity, EntitiesHeader, ViewSwitch, ViewSwitchButton, EntitiesFilters, FilterButton, FiltersSeparator, FilterSelectWrapper, EntitiesContentWrapper } from './EntitiesList.styles';

import companyIcon from 'assets/images/company-icon.png';
import Pagination from "components/Pagination/Pagination";
import { FullscreenContext } from 'contexts/fullscreen.context';
import { MenuIcon, GridIcon, ListIcon, FilterIcon, ArrowsFullscreen, ArrowsFullscreenExit, ShareIcon, BroadcastIcon } from 'styles/icons';

import { EntityType } from 'types';

const EntitiesList: React.FC = () => {
  const [entities, setEntities] = useState<EntityType[]>([]);
  const {isFullscreenActive, setFullscreenActive} = useContext(FullscreenContext);

  const [filterString, setFilterString] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  const handleFilterChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setFilterString((ev.target as HTMLInputElement).value);
  }

  const toggleFullscreenActive = () => {
    setFullscreenActive(!isFullscreenActive);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setEntities(json);
        setTotalPages(Math.ceil(json.length / 12));
      });
  }, [])

  const filterContractsByTitle = ({ title }: { title: string }) => {
    if (filterString === '') return true
    return title.toLowerCase().includes(filterString.toLowerCase());
  }

  const handlePaginationPageChange = (selectedItem: {selected: number}) => {
    setCurrentPage(selectedItem.selected);
  }

  const entitiesToShow = entities.filter(filterContractsByTitle).slice(currentPage * 12, (currentPage + 1) * 12);

  return (
    <EntitiesContentWrapper>
      <EntitiesHeader>
        <h3>Entities</h3>
        <ViewSwitch>
          <ViewSwitchButton active><GridIcon /> Mosaic</ViewSwitchButton>
          <ViewSwitchButton><MenuIcon /> </ViewSwitchButton>
        </ViewSwitch>
      </EntitiesHeader>
      <EntitiesFilters>
        <div>
          <FilterSelect />
          <FilterButton><ListIcon /> Sort</FilterButton>
          <FilterButton><FilterIcon /> Filters</FilterButton>
          <FiltersSeparator />
          <FilterButton onClick={toggleFullscreenActive}>
            {isFullscreenActive ? <ArrowsFullscreenExit/> : <ArrowsFullscreen />}
          </FilterButton>
          <FiltersSeparator />
          <FilterButton><ShareIcon /> Share</FilterButton>
        </div>

        <div>
          <Input inputType={'search'} align={'left'} placeholder={'Search ...'} onChange={handleFilterChange} />

          <FilterSelectWrapper>
            <BroadcastIcon />
            <select>
              <option value="">Followed</option>
            </select>
          </FilterSelectWrapper>
        </div>
      </EntitiesFilters>

      <EntitiesWrapper isFullscreenMode={isFullscreenActive}>
        {entitiesToShow.map(({title, body}) => (
          <Entity>
            <img src={companyIcon} alt=""/>
            <h4>{title.slice(0, 22)}..</h4>
            <p>{body.slice(0, 50)}...</p>
          </Entity>
        ))}
      </EntitiesWrapper>

      <Pagination marginPagesDisplayed={1} pageCount={totalPages} pageRangeDisplayed={1} onPageChange={handlePaginationPageChange} />
    </EntitiesContentWrapper>
  )
}

export default EntitiesList;