import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImage = async ({ page = '', searchQuery = '' }) => {
  const response = await axios.get('/', {
    params: {
      q: searchQuery,
      page,
      key: '31580624-e5f87d112d57e9afad49661fb',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page:12,
    },
  });
  // return response.data.hits;
  return response.data;
};

export default fetchImage;
