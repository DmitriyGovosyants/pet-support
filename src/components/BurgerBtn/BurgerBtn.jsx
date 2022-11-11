import { Btn } from './BurgerBtn.styled';


export default function BurgerBtn({ toggleNav }) {
  return (
    <Btn onClick={toggleNav} type="button">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_201_1503)">
          <path
            d="M5 30H35V26.6667H5V30ZM5 21.6667H35V18.3333H5V21.6667ZM5 10V13.3333H35V10H5Z"
            fill="#212121"
          />
        </g>
      </svg>
    </Btn>
  );
}