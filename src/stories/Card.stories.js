import React from 'react';
import Card from '../components/card/Card';

export default {
  title: 'Example/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const DogCard = Template.bind({});
DogCard.args = {
  imgURL: 'https://images.dog.ceo/breeds/labrador/n02099712_209.jpg',
  name: 'Firilucho',
  description:
    "Some quick example text to build on the card title and make up bulk of the card's content",
};
