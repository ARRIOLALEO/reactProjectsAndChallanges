import React from 'react';

const List = ({people}) => {
  console.log(people.name)
  return (
    <>
    <article className="person">
        <img src={people.image} />
        <div>
          <h4>{people.name}</h4>
          <p>{people.age} Years</p>
        </div>
        
    </article>
      
    </>
  );
};

export default List;
