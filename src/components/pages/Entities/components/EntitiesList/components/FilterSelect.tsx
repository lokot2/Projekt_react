import React from 'react';
import useDropdown from 'react-dropdown-hook';

import { FilterDropdownButton, FilterDropdownContent, FilterDropdownWrapper, FilterSelectInfo, Filter, AddFilterWrapper, AddFilterButton } from "./FilterSelect.styles";
import {ChevronDownIcon, PlusIcon, XIcon} from "styles";

const FilterSelect: React.FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();

  return (
    <FilterDropdownWrapper ref={wrapperRef}>
      <FilterDropdownButton onClick={toggleDropdown}>All filters <ChevronDownIcon /></FilterDropdownButton>
      {dropdownOpen && <FilterDropdownContent>
          <FilterSelectInfo>Rows are filtered by the following conditions starting from the top.</FilterSelectInfo>
          <Filter>
              <XIcon />
              Where
              <select name="" id="">
                  <option value="">Company</option>
              </select>

              <select name="" id="">
                  <option value="">Contains</option>
              </select>

              <input type="text" placeholder={'Type...'}/>
          </Filter>

          <Filter>
              <XIcon />
              Where
              <select name="" id="">
                  <option value="">Status</option>
              </select>

              <select name="" id="">
                  <option value="">Is</option>
              </select>

              <input type="text" placeholder={'Type...'}/>

              <select name="" id="">
                  <option value="">In</option>
              </select>

              <input type="text" placeholder={'Entity...'}/>
          </Filter>

          <Filter>
              <XIcon />
              And
              <select name="" id="">
                  <option value="">Status</option>
              </select>

              <select name="" id="">
                  <option value="">Ends before</option>
              </select>

              <input type="text" placeholder={'Date...'}/>

              <select name="" id="">
                  <option value="">In</option>
              </select>

              <input type="text" placeholder={'Entity...'}/>
          </Filter>

          <AddFilterWrapper>
              <AddFilterButton>
                  <PlusIcon />
                  Add filter
              </AddFilterButton>

              <select name="" id="">
                  <option value="">choose property</option>
                  <option value="">Company name</option>
                  <option value="">Description</option>
              </select>
          </AddFilterWrapper>
      </FilterDropdownContent>}
    </FilterDropdownWrapper>
  )
}

export default FilterSelect;