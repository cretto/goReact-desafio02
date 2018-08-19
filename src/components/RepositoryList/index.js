import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository, Info } from './styles';

const RepositoryList = ({ repositories, onSelectRepository }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id} onClick={() => onSelectRepository(repository.id)}>
        <Info>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <div className="title">
            <strong>{repository.name}</strong>
            <span>{repository.owner.login}</span>
          </div>
        </Info>
        <span>
          <i className="fa fa-angle-right" />
        </span>
      </Repository>
    ))}
  </Container>
);

RepositoryList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
    }),
  ).isRequired,
  onSelectRepository: PropTypes.func.isRequired,
};

export default RepositoryList;
