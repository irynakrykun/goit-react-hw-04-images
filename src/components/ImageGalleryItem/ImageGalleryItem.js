import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ url, largeImageURL, onClick, tags }) => {
  return (
    <GalleryItem>
      <GalleryItemImg
        src={url}
        alt={tags}
        onClick={() => onClick(largeImageURL)}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string.isRequired,

  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
