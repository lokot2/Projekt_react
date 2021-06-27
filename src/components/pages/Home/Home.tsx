import React from 'react';
import LatestPublications from 'components/LatestPublications/LatestPublications';
import WorkspacesSlider from 'components/WorkspacesSlider/WorkspacesSlider';
import ContractsList from 'components/ContractsList/ContractsList';

const Home: React.FC = () => {
  return (
    <div>
      <LatestPublications />
      <WorkspacesSlider />
      <ContractsList />
    </div>
  )
}

export default Home;