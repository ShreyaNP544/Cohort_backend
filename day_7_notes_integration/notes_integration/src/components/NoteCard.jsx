import React from 'react'

const NoteCard = ({note, deleteNote, noteForUpdate}) => {
  return (
    <div className='w-70 border border-white p-4 rounded-xl flex flex-col gap-3'>
      <h1>{note.title}</h1>
      <p className='text-sm'>{note.description.length > 30 ? note.description.substring(0, 30) : note.description }</p>

      <div className='flex justify-between'>
        <button onClick={() => noteForUpdate(note)} className='p-2 bg-green-900 text-white rounded cursor-pointer '>Update</button>
        <button onClick={() => deleteNote(note._id)} className='p-2 bg-red-900 text-white rounded cursor-pointer '>Delete</button>
      </div>
    </div>
  )
}

export default NoteCard
