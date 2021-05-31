const state = {
  articles: require('@/data/articles.json'),
  drawer: false,
  items: [
    {
      text: 'Home',
      href: '#!',
    },
    {
      text: 'About',
      href: '#about',
    },
  ],
}
/*The initial job state is set by checking if the user viewing the job that he want to apply for or not*/
const getters = {
  categories: state => {
    const categories = []

    for (const article of state.articles) {
      if (
        !article.category ||
        categories.find(category => category.text === article.category)
      ) continue

      const text = article.category

      categories.push({
        text,
        href: '#!',
      })
    }

    return categories.sort().slice(0, 4)
  },
  links: (state, getters) => {
    return state.items.concat(getters.categories)
  },
}

const mutations = {
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => (state.drawer = !state.drawer),
}

const actions = {

}

export const articles = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
