import React from 'react';
import { useParams } from 'react-router-dom';
import trainers from '../TrainersMock';

function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainers.find(t => t.trainerId === parseInt(id));

  if (!trainer) {
    return <p>Trainer not found!</p>;
  }

  return (
    <div>
      <h2>{trainer.name} - {trainer.technology}</h2>
      <p><b>Email:</b> {trainer.email}</p>
      <p><b>Phone:</b> {trainer.phone}</p>
      <p><b>Skills:</b> {trainer.skills.join(', ')}</p>
    </div>
  );
}

export default TrainerDetails;
