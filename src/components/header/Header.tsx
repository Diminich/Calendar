import { MenuType } from '../componentsType/componentsTypes';
import styles from './header.module.css';
import { NavLink } from "react-router-dom";
import { menu } from '../constants';

export type PeoplesSelectProps = {
    isLogin: boolean
}

const renderMenuItems = (isLogin: boolean) => {
    return menu.map(({ route, id, element }: MenuType) => {
        if (route === '/calendar' && !isLogin) {
            return undefined
        }
        return (
            <NavLink key={id} className={styles.textMenuElement} to={route}>
                {element}
            </NavLink>
        )
    })
}

const Header = ({ isLogin }: PeoplesSelectProps) => {
    return (
        <div className={styles.wrapperHeader}>
            <div>{isLogin ? 'Admin' : 'Не авторизован'}</div>
            {renderMenuItems(isLogin)}
        </div>
    );
}

export default Header;