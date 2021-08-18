import { ChangeEvent, useState } from 'react';
import styles from './myToolbar.module.css'
import SelectView from './searchModalView/SelectView';

const MyToolbar = ({ onNavigate, label }: { onNavigate: any, label: string }) => {
    const [searchTitleEvent, setSearchTitleEvent] = useState<string>('');
    const [showSearchModalView, setShowSearchModalView] = useState<boolean>(false)

    const changeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTitleEvent(e.currentTarget.value)
        setShowSearchModalView(true)
    }

    return (
        <div className={styles.wrapperToolbar}>
            <div className={styles.navigatoinButton}>
                <button type="button" onClick={() => onNavigate('PREV')}>{'<'}</button>
                <span>{label}</span>
                <button type="button" onClick={() => onNavigate('NEXT')}>{'>'}</button>
                <button type="button" onClick={() => onNavigate('TODAY')} >Сегодня</button>
            </div>
            <div className={styles.searchModalTitilesView}>
                <input placeholder={'Поиск'} value={searchTitleEvent}
                    onChange={(e => changeSearchInput(e))}
                    className={styles.searchInput}
                />
                {showSearchModalView && <SelectView searchTitleEvent={searchTitleEvent} setSearchTitleEvent={setSearchTitleEvent} setShowSearchModalView={setShowSearchModalView}/>}
            </div>
        </div>
    );
}

export default MyToolbar;