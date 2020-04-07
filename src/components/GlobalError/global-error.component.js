import React from 'react';
import {useTranslation} from 'react-i18next';
import {
    DetailWrapper,
    ErrorDetail,
    ErrorInfo,
    ErrorTitle,
    GlobalErrorWrapper,
    ImageWrapper
} from './global-error.style';

type Props = {
  info: Object
};
/**
 * Global Component to show error on app
 * has basic markup and will render into ErrorBoundary component
 */
 const GlobalError = ({ info }: Props) => {
    const {t} = useTranslation();
    return (
        <GlobalErrorWrapper>
            <ImageWrapper>
                <img src="img/error-ufo.svg" alt="Error"/>
            </ImageWrapper>
            <DetailWrapper>
                <ErrorTitle data-testid="error-title">{t('globalError.title')}</ErrorTitle>
                <ErrorInfo data-testid="error-info">{t('globalError.info')}</ErrorInfo>
                <ErrorDetail className="subheadline">
                    {t('globalError.msg')}
                </ErrorDetail>
                <ErrorDetail>{info.componentStack}</ErrorDetail>
            </DetailWrapper>
        </GlobalErrorWrapper>
    );
};

 export default GlobalError;
