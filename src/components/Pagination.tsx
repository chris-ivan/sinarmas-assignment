import { FC } from "react";

interface IPagination {
  activePage: number;
  totalPages: number;
  onSelectPage: (page: number) => void;
}

interface IPage {
  page: number;
  isActive: boolean;
  onSelectPage: (page: number) => void;
}

const Page: FC<IPage> = ({ page, isActive, onSelectPage }) => {
  const style = isActive ? "text-blue-500" : "text-gray-500";

  const handleSelectPage = () => {
    onSelectPage(page);
  };

  return (
    <div
      onClick={handleSelectPage}
      className={`${style} mx-2 hover:cursor-pointer`}
    >
      {page}
    </div>
  );
};

const Pagination: FC<IPagination> = ({
  activePage,
  totalPages,
  onSelectPage,
}) => {
  return (
    <div className="flex w-20 mx-auto">
      {Array.from({ length: totalPages }).map((_, key: number) => (
        <Page
          key={key}
          onSelectPage={onSelectPage}
          page={key + 1}
          isActive={key + 1 === activePage}
        />
      ))}
    </div>
  );
};

export default Pagination;
