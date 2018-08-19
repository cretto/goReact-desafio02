import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Header, Repository, Issues, Issue, Info, Loading, Error,
} from './styles';

const Content = ({
  selectedRepository,
  selectedStatus,
  onChangeStatus,
  issues,
  issuesLoading,
  issuesError,
}) => (
  <Container>
    <Header>
      <Repository>
        <img src={selectedRepository.owner.avatar_url} alt={selectedRepository.owner.login} />
        <div className="title">
          <strong>{selectedRepository.name}</strong>
          <span>{selectedRepository.owner.login}</span>
        </div>
      </Repository>
      <select
        name="status"
        id="status"
        placeholder="Status"
        value={selectedStatus}
        onChange={e => onChangeStatus(e.target.value)}
      >
        <option value="open">Abertas</option>
        <option value="close">Fechadas</option>
        <option value="all">Todas</option>
      </select>
    </Header>

    {issuesLoading ? (
      <Loading>
        <i className="fa fa-spinner fa-pulse" />
      </Loading>
    ) : (
      <Issues>
        {issuesError ? (
          <Error>
            <p>Erro ao carregar Issues</p>
          </Error>
        ) : (
          issues.map(issue => (
            <Issue key={issue.id}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <Info>
                <p>{issue.title}</p>
                <span>{issue.user.login}</span>
                <button type="button" onClick={() => window.open(issue.html_url)}>
                  <i className="fa fa-external-link" />
                  abrir issue
                </button>
              </Info>
            </Issue>
          ))
        )}
      </Issues>
    )}
  </Container>
);

Content.propTypes = {
  selectedRepository: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  }).isRequired,
  selectedStatus: PropTypes.string.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      html_url: PropTypes.string,
      title: PropTypes.string,
      user: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
    }),
  ).isRequired,
  issuesLoading: PropTypes.bool.isRequired,
  issuesError: PropTypes.bool.isRequired,
};

export default Content;
