import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function LikeButton({ card, onCardClick, onCardLike, onCardDelete }) {
  const cardStyle = { backgroundImage: `url(${card.link})` };

  function handleLikeClick() {
    onCardLike(card);
  }

  const currentUser = React.useContext(CurrentUserContext);

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${isLiked && 'card__like-button_is-active'}`;

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  );

  return (
      <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
  );
}

export default LikeButton;
