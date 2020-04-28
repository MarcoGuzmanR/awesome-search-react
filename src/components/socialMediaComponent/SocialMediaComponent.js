import React from 'react';

import './SocialMediaComponent.scss';

const instagramProfile = (user) => {
  const instagramUsername = user.instagram_username ? user.instagram_username : '';

  if (instagramUsername) {
    const instagramUrl = `https://instagram.com/${instagramUsername}`;

    return (
      <p>Instagram: <a href={instagramUrl} rel="noopener noreferrer" target="_blank">@{instagramUsername}</a></p>
    );
  }
  else {
    return <p>Instagram: None</p>;
  }
};

const twitterProfile = (user) => {
  const twitterUsername = user.twitter_username ? user.twitter_username : '';

  if (twitterUsername) {
    const twitterUrl = `https://twitter.com/${twitterUsername}`;

    return (
      <p>Twitter: <a href={twitterUrl} rel="noopener noreferrer" target="_blank">@{twitterUsername}</a></p>
    );
  }
  else {
    return <p>Twitter: None</p>;
  }
};

const portfolioProfile = (user) => {
  const portfolioUrl = user.portfolio_url ? user.portfolio_url : '';

  if (portfolioUrl) {
    return (
      <p>Portfolio: <a href={portfolioUrl} rel="noopener noreferrer" target="_blank">{portfolioUrl}</a></p>
    );
  }
  else {
    return <p>Portfolio: None</p>;
  }
};

const SocialMediaComponent = (user) => {
  user = user.user;

  return (
    <div className="search-result-content__user-info">
      <p>Username: {user.username}</p>
      {instagramProfile(user)}
      {twitterProfile(user)}
      {portfolioProfile(user)}
    </div>
  );
}

export default SocialMediaComponent;
