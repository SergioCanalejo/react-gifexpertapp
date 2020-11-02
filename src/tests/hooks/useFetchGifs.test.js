const { renderHook } = require('@testing-library/react-hooks');
const { useFetchGifs } = require('../../hooks/useFetchGifs');

describe('Testing in useFetchGifs hook', () => {
  test('should return the initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('One Piece')
    );

    const { gifs, loading } = result.current;
    await waitForNextUpdate();

    expect(gifs).toHaveLength(0);
    expect(loading).toBeTruthy();
  });

  test('should trigger useEffect', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('One Piece')
    );

    await waitForNextUpdate();
    const { gifs, loading } = result.current;
    expect(gifs).toHaveLength(10);
    expect(loading).toBeFalsy();
  });
});
