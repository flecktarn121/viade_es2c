import React, {Component} from 'react';
import {Dropdown} from '@util-components';
import {toast} from 'react-toastify';

const languages = {
  en: {
    id: 'en',
    icon: ''
  },
  es: {
    id: 'es',
    icon: ''
  },
  'en-US': {
    id: 'en-US',
    icon: ''
  }
};

type Props = {
  i18n: Object,
  t: Function
};

class LanguageDropdown extends Component<Props> {
  constructor() {
    super();
    this.state = { language: this.getLanguage() };
  }

  getLanguage = () => localStorage.getItem('i18nextLng') || 'en';

  onLanguageSelect = nextLanguage => {
    const { i18n } = this.props;
    toast.dismiss();
    i18n.changeLanguage(nextLanguage);
    this.setState({
      language: this.getLanguage()
    });
  };

  render() {
    const { t } = this.props;
    const { language } = this.state;
    const profileOpts = [
      {
        label: t('navBar.languages.en'),
        onClick: () => this.onLanguageSelect('en'),
        icon: '',
        customIcon: true
      },
      {
        label: t('navBar.languages.es'),
        onClick: () => this.onLanguageSelect('es'),
        icon: '',
        customIcon: true
      }
    ];
    return (
      <Dropdown actions={profileOpts} hover>
        <div
          // className={`flag-icon flag-icon-${
          //   language && languages[language] ? languages[language].icon : 'us'
          // }`}
        >
          {profileOpts[language==='es'?1:0].label}
        </div>
      </Dropdown>
    );
  }
}

export default LanguageDropdown;
