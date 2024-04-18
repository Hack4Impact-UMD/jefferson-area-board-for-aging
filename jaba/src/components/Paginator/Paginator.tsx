import { Dispatch, SetStateAction } from "react";
import { User } from "../../types/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Styles from "./Paginator.module.css";

type PaginatorProps = {
  pages: number;
  rowsPerPage: number;
  currPage: number;
  fetchUsers: (pages: number, rowsPerPage: number, currPage: number) => void;
  setUsers: Dispatch<SetStateAction<User[]>>;
  setPage: (currPage: number) => void;
};

const Paginator: React.FC<PaginatorProps> = ({
  pages,
  rowsPerPage,
  currPage,
  fetchUsers,
  setUsers,
  setPage,
}) => {
  return (
    <div className={Styles.paginator}>
      <button
        className={Styles.paginatorButton}
        onClick={() => setPage(Math.max(currPage - 1, 1))}
      >
        <FontAwesomeIcon icon={icon({ name: "arrow-left" })} />
      </button>
      <div>
        Page {currPage} of {pages}
      </div>
      <button
        className={Styles.paginatorButton}
        onClick={() => setPage(Math.min(currPage + 1, pages))}
      >
        <FontAwesomeIcon icon={icon({ name: "arrow-right" })} />
      </button>
    </div>
  );
};

export default Paginator;
