import React from 'react';
import { ImageCard } from '../molecules/ImageCard';
import { ProfileCard } from '../molecules/ProfileCard';

// Basic Card Component
export const BasicCard = ({ title, body, footer }) => (
  <ImageCard>
    <div className="card__header">{title}</div>
    <div className="card__body">{body}</div>
    <div className="card__footer">{footer}</div>
  </ImageCard>
);

// Image Card Component
export const CustomImageCard = ({ image, title, body }) => (
  <ImageCard>
    <img src={image} alt={title} className="card__image" />
    <div className="card__header">{title}</div>
    <div className="card__body">{body}</div>
  </ImageCard>
);

// Profile Card Component
export const CustomProfileCard = ({ avatar, name, description }) => (
  <ProfileCard>
    <img src={avatar} alt={name} className="card__avatar" />
    <div className="card__info">
      <div className="card__name">{name}</div>
      <div className="card__description">{description}</div>
    </div>
  </ProfileCard>
);
