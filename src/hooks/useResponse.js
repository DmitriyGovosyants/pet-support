const useResponse = res => {
  return res === '/favorites' ? 'favoriteNotices' : res;
};

export default useResponse;
