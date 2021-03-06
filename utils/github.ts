export const getGithubRepository = (userName: string, repositoryName: string) =>
  `https://github.com/${userName}/${repositoryName}`;
export const getGithubPages = (userName: string, repositoryName: string) =>
  `https://${userName}.github.io/${repositoryName}`;
