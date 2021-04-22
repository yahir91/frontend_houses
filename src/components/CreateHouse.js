import { useState } from 'react';
import createHouse from '../request/createHouseRequest';

const CreateHouse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rent, setRent] = useState('');
  const [image, setImage] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('rent', rent);
    formData.append('image', image);
    createHouse(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
        <input type="text" name="title" onChange={e => setTitle(e.target.value)} />
      </label>
      <label htmlFor="description">
        Description
        <input type="text" name="description" onChange={e => setDescription(e.target.value)} />
      </label>
      <label htmlFor="rent">
        Rent
        <input type="text" name="rent" onChange={e => setRent(e.target.value)} />
      </label>
      <label htmlFor="image">
        Upload image
        <input type="file" name="image" accept="image/*" onChange={e => setImage(e.target.files[0])} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CreateHouse;
