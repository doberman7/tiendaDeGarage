import React from 'react';

const Search = ({ input: keyword, onChange: setKeyword }) => {
  const BarStyling = {
    width: '20rem',
    background: '#303030',
    // #1D99A9
    // #303030
    border: 'none',
    padding: '0.5rem',
    color: '#1D99A9',
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={'search product'}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default Search;
