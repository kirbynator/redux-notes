import React from 'react';

const NoteList = () => {
  return (
    <div>
      <ul>
        { todos.map( t => {
          return (
           <li key={t.id}>
            { t.name }
           </li>
          )
        })
        }
</ul>
    </div>
  )
}

export default NoteList;