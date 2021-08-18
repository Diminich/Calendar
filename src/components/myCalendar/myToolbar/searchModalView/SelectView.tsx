import { useDispatch, useSelector } from "react-redux";
import styles from "./selectView.module.css";
import { AppStateType } from '../../../../redux/redux-store';
import { NewEventList } from '../../../componentsType/componentsTypes';
import { action } from '../../../../redux/calendar-reducer';
import { stringOrDate } from "react-big-calendar";
import { useEffect, useState } from "react";

interface SearchModalViewProps {
  searchTitleEvent: string;
  setSearchTitleEvent: (title: string) => void;
  setShowSearchModalView: (isShowModal: boolean) => void;
}

const SelectView = ({ searchTitleEvent, setSearchTitleEvent, setShowSearchModalView }: SearchModalViewProps) => {
  const [searchElement, setSearchElement] = useState<Array<NewEventList>>([])
  const myEventsList = useSelector<AppStateType, Array<NewEventList>>((state) => state.calendarPage.myEventsList);
  const dispatch = useDispatch();

  useEffect(() => {
    setSearchElement(myEventsList.filter((item) => {
      return item.title.toLowerCase().includes(searchTitleEvent.toLowerCase())
    }));
  }, [searchTitleEvent, myEventsList])


  const clickSearchValue = (start: stringOrDate) => {
    dispatch(action.setSearchDate(start))
    setShowSearchModalView(false)
    setSearchTitleEvent('')
  }

  return (
    <div className={styles.wrapperSelectView}>
      <div className={styles.wrapperСloseButtonModal}>
        <button
          className={styles.closeButtonModal}
          onClick={() => setShowSearchModalView(false)}
        >
         X
        </button>
      </div>

      {searchElement.length !== 0 ?
        searchElement.map(({ id, start, title }) => (
          <div
            className={styles.titlesEvent}
            key={id}
            onClick={() => clickSearchValue(start)}
          >
            <span style={{ marginLeft: 5 }}>{title}</span>
          </div>
        ))
        : <div className={styles.notFoundItem}>Ничего не найдено!</div>}
    </div>
  );
};

export default SelectView;