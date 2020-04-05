import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ButtonStyled, ImageProfileLoader, ImageProfileWrapper, LoaderText} from './image-profile.style';
import {useTranslation} from 'react-i18next';

type Props = {
  photo: String,
  overrideEventDefaults: () => void,
  onDragLeave: () => void,
  onDragEnter: () => void,
  onDrop: () => void,
  onClickFile: () => void,
  inProgress: boolean,
  uploadedFiles: Array<Object>,
  uploadingText?: String,
  text?: String
};

const ImageProfile = (props: Props) => {
  const {
    uploadedFiles,
    photo: img,
    overrideEventDefaults,
    onDragLeave,
    onDragEnter,
    onDrop,
    onClickFile,
    inProgress,
  } = props;
  const photo =
    uploadedFiles && uploadedFiles.length > 0 ? uploadedFiles[uploadedFiles.length - 1].uri : img;
  const { t } = useTranslation();

  return (
    <ImageProfileWrapper
      {...{
        onDragStart: overrideEventDefaults,
        onDragOver: overrideEventDefaults,
        onDragEnd: overrideEventDefaults,
        onDrag: overrideEventDefaults,
        onDragLeave,
        onDragEnter,
        onDrop,
        style: photo && photo !== '' && { backgroundImage: `url(${photo})` }
      }}
    >
      <ButtonStyled onClick={onClickFile} className="button-upload">
        <FontAwesomeIcon icon="upload" className="upload-icon" />
        {t('imageProfile.text')}
      </ButtonStyled>
      {inProgress && (
        <ImageProfileLoader className="image-profile-loader">
          <FontAwesomeIcon icon="spinner" spin size="2x" />
          <LoaderText>{t('imageProfile.upload')}</LoaderText>
        </ImageProfileLoader>
      )}
    </ImageProfileWrapper>
  );
};

export default ImageProfile;
