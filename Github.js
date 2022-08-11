// https://api.github.com/users/dev-EndLess
// https://api.github.com/users/dev-endless/repos

class Github {
  constructor() {
    this.client_id = '0fae1619a25f2f713e02'
    this.client_secret = '24de56634ad6c53e871d30d1cf1cc563343453ba'
    this.repos_count = 5
    this.repos_sort = 'Created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch
    (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch
    (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_count_sort}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json()
    const repos = await repoResponse.json()

    return {
      profile,
      repos
    }
  }
}




export default Github