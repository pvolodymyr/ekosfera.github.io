
import React, { useState } from 'react';
import styles from './styles.module.scss';
import cx from 'classnames'
import imagePath from '../../assets/logo.png';

// Hooks
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

// Components
import Button from '../Button';
import LangiageSwitcher from '../LangiageSwitcher';

// Action Creators
import { setNewReportDialogOpen } from '../../store/actions/newReportDialog.actions';

function Header() {
  const [t] = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch();

  const handleOpenReportDialog = () => {
    setIsMenuOpen(false)
    dispatch(setNewReportDialogOpen())
  }
  const handleOpenMenu = () => setIsMenuOpen(!isMenuOpen)
  // const handleCloseMenu = () => setIsMenuOpen(false)

  return (
    <div className={styles['header_wrapper']}>
      <div className={styles['header']}>
        <img
          className={styles['logo']}
          src={imagePath}
          alt="logo"
        />
        <LangiageSwitcher />
        <div className={cx({
            [styles['header_menu']]: true,
            [styles['header_menu--is-open']]: isMenuOpen,
          })}>
          <ul className={styles['header_menu_list']}>
            {/* <li onClick={handleCloseMenu}>{t('Sponsors')}</li> */}
          </ul>
          <Button
            className={styles['header_menu_list_button']}
            handleClick={handleOpenReportDialog}
          >
            {t('Submit a new report')}
          </Button>
        </div>
        <button
          className={styles['header_menu_button']}
          onClick={handleOpenMenu}
        >
          <span /><span /><span />
        </button>
      </div>
    </div>
  )
}

export default Header;
