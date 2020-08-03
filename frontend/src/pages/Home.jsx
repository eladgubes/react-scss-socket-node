import React from 'react';
import SearchItems from '../cmps/SearchItems';
import { Categories } from '../cmps/Categories';
import { connect } from 'react-redux'
import { loadUsers } from '../store/actions/userActions'
import categoryService from '../service/categoryService'
class Home extends React.Component {

  state = {
    categories: [],
    bgClass: ''
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadCategories()
  }


  loadCategories = () => {
    categoryService.getCategories()
      .then(res => {
        let categories = res
        this.setState({ categories })
      })

  }
  searchTag = (value) => {
    let filter = {
      searchKey: value,
      place: ''
    }
    this.onSearch(filter)
  }


  onSearch = (filter) => {
    this.props.loadUsers(filter)
    this.props.history.push('/market')
  }

  render() {
    const { categories, bgClass } = this.state
    if (!categories.length) return 'loading...'
    return (
      <div className="home">
        <header>
          <div className="container margin-center">
            <div className="hero-search-bar flex column justify-center">
              <div className="main-hero-text " >
                <h1 className="hero-text"> EVENT IN A SECOND</h1>
              </div>
              <div className="main-categories">
                <SearchItems history={this.props.history} />
              </div>
            </div>
          </div>
        </header>
        <h1 className="categories-title">CHOOSE A CATEGORY</h1>
        <section className="categories ">
          {categories.map((cat, idx) => <Categories idx={idx} category={cat} key={idx} onSearch={this.searchTag} />)}
        </section>

      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    navBar: state.navBar.isSideOpen
  }
}


const mapDispatchToProps = {
  loadUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)