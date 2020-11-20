import { get } from '@yotie/micron';
import redirects from '../redirects.json';

export default get(({ res, query, notFound }) => {
  const { shortcut='' } = query;
  const [redirect] = Object.entries(redirects)
    .filter(([key, url]) => key.split(',').includes(shortcut));

  if (!redirect)  
    return notFound(`Redirect not found for key: ${shortcut}`);
  
  return res.redirect(redirect[1])
})