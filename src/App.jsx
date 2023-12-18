import PropTypes from 'prop-types';
import React from 'react';

const itemPropTypes = {
  objectID: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  num_comments: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
};

const List = ({ list }) => (
  <ol>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ol>
);

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(itemPropTypes)).isRequired,
};

const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);

Item.propTypes = {
  item: PropTypes.shape(itemPropTypes).isRequired,
};

const Search = (props) => {

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" onChange={props.handleSearch} />

      <p>Searching for: <strong>{props.searchTerm}</strong> </p>

    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStories = stories.filter(story => story.title.includes(searchTerm))
  

  return (
    <div>
      <h1>My Hacker Stories</h1>
      {/* Passing down the handleSearch function as a prop */}
      <Search handleSearch={handleSearch} searchTerm={searchTerm} />
      <List list={filteredStories} />
    </div>
  );
};

export default App;
