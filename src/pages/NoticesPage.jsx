import {
  NoticesSearch,
  NoticesCategoriesNav,
  NoticesCategoriesList,
  AddNoticeButton,
} from 'components';

const NoticesPage = () => {
  return (
    <>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
      <AddNoticeButton />
    </>
  );
};

export default NoticesPage;
