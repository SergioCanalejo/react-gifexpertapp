import { getGifs } from '../../helpers/getGifs';

describe('Testing GetGifs helper', () => {
  test('Must take 10 elements', async () => {
    const gifs = await getGifs('One Piece');
    expect(gifs).toHaveLength(10);
  });

  test('Must be empty array', async () => {
    const gifs = await getGifs('');
    expect(gifs).toHaveLength(0);
  });
});
