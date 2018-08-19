import React from 'react';
import PropTypes from 'prop-types';

import { Container, Form } from './styles';

import RepositoryList from '../RepositoryList';

const Sidebar = ({
  repositories,
  repositoryInput,
  onChageRepositoryInput,
  onSubmitRepository,
  onSelectRepository,
  repositoryError,
  repositoryLoading,
}) => (
  <Container>
    <Form onSubmit={onSubmitRepository} withError={repositoryError}>
      <input
        type="text"
        placeholder="Novo repositório"
        value={repositoryInput}
        onChange={onChageRepositoryInput}
      />
      <button type="submit">
        {repositoryLoading ? (
          <i className="fa fa-spinner fa-pulse" />
        ) : (
          <i className="fa fa-plus-circle" />
        )}
      </button>
    </Form>
    <RepositoryList repositories={repositories} onSelectRepository={onSelectRepository} />
  </Container>
);

Sidebar.propTypes = {
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
  repositoryInput: PropTypes.string.isRequired,
  repositoryError: PropTypes.bool.isRequired,
  repositoryLoading: PropTypes.bool.isRequired,
  onChageRepositoryInput: PropTypes.func.isRequired,
  onSubmitRepository: PropTypes.func.isRequired,
  onSelectRepository: PropTypes.func.isRequired,
};

export default Sidebar;
