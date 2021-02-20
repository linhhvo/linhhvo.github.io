import React from 'react';

import {FilterBar} from './FilterBar';
import {Project} from './Project';

export const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>

      <FilterBar />

      <Project />
    </div>
  );
};
