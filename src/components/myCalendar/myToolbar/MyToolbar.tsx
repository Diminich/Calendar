import styles from './myToolbar.module.css'

const MyToolbar = ({ onNavigate, label }: { onNavigate: any, label: string }) => {
    return (
        <div className={styles.wrapperToolbar}>
            <button type="button" onClick={() => onNavigate('PREV')}>{'<'}</button>
            <span>{label}</span>
            <button type="button" onClick={() => onNavigate('NEXT')}>{'>'}</button>
            <button type="button" onClick={() => onNavigate('TODAY')} >Сегодня</button>
        </div>
    );
}

export default MyToolbar;