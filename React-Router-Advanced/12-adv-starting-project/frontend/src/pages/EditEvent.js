import React from 'react'
import EventForm from '../components/EventForm'
import { useLoaderData } from 'react-router-dom'
function EditEvent() {

    const data = useLiaderData();
    
    
  return (
    <EventForm/>
  )
}

export default EditEvent