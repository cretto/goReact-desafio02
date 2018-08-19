import React, { Component } from 'react';
import api from '../../services/api';

import { Container } from './styles';

import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositoryError: false,
    repositoryLoading: false,
    repositories: [],
    selectedRepository: null,
    selectedStatus: 'open',
    issues: [],
    issuesLoading: false,
    issuesError: false,
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ repositoryLoading: true });

    try {
      const { repositories, repositoryInput } = this.state;
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositoryError: false,
        repositories: [...repositories, repository],
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ repositoryLoading: false });
    }
  };

  handleSelectRepository = (id) => {
    const { repositories } = this.state;
    this.setState(
      {
        selectedRepository: repositories.find(repository => repository.id === id),
        selectedStatus: 'open',
      },
      this.getIssues,
    );
  };

  handleChangeStatus = (status) => {
    this.setState({ selectedStatus: status }, this.getIssues);
  };

  getIssues = async () => {
    this.setState({ issuesLoading: true });
    try {
      const {
        selectedRepository: {
          owner: { login },
          name,
        },
        selectedStatus,
      } = this.state;

      const { data: issues } = await api.get(
        `/repos/${login}/${name}/issues?state=${selectedStatus}`,
      );

      this.setState({ issues, issuesError: false });
    } catch (err) {
      this.setState({ issuesError: true });
    } finally {
      this.setState({ issuesLoading: false });
    }
  };

  render() {
    const {
      repositories,
      repositoryInput,
      repositoryError,
      repositoryLoading,
      selectedRepository,
      selectedStatus,
      issues,
      issuesLoading,
      issuesError,
    } = this.state;
    return (
      <Container>
        <Sidebar
          repositories={repositories}
          repositoryInput={repositoryInput}
          onChageRepositoryInput={e => this.setState({ repositoryInput: e.target.value })}
          onSubmitRepository={this.handleAddRepository}
          onSelectRepository={this.handleSelectRepository}
          repositoryError={repositoryError}
          repositoryLoading={repositoryLoading}
        />
        {selectedRepository && (
          <Content
            selectedRepository={selectedRepository}
            selectedStatus={selectedStatus}
            onChangeStatus={this.handleChangeStatus}
            issues={issues}
            issuesLoading={issuesLoading}
            issuesError={issuesError}
          />
        )}
      </Container>
    );
  }
}
