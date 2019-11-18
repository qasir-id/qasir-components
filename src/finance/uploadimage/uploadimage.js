/* eslint-disable react/no-did-update-set-state */
/* eslint-disable no-alert */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Upload from 'antd/es/upload';

import Camera from '../../base/svg-icon/svg/Camera';

// Qasir Components
import Text from '../../base/text';
import Loader from '../../base/loader';
import { Row, Col } from '../../base/grid';
import * as c from '../../shared/constants/color';

// Style
import * as Style from './uploadimage.style';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

class UploadImage extends Component {
  state = {
    loading: false,
    imageUrl: this.props.imageUrl
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageUrl !== this.props.imageUrl) {
      this.setState({
        imageUrl: this.props.imageUrl
      });
    }
  }

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }

    this.props.handleChange && this.props.handleChange(info);
  };

  render() {
    // When field empty
    const emptyState = (
      <>
        <Style.Icon>
          <Camera width="36" height="36" fill={c.DarkNeutral} />
        </Style.Icon>
        <Style.Desc>
          <Text variant="ui-small" color="neutral" tag="p" weight="medium">
            {this.props.placeholder}
          </Text>
        </Style.Desc>
      </>
    );

    // When has content
    const hasContent = (
      <>
        <Row>
          <Col span={12}>
            {this.props.label && (
              <Text variant="ui-small" color="primary" tag="p" weight="medium">
                {this.props.label}
              </Text>
            )}
          </Col>
          <Col span={12}>
            <Text
              variant="ui-small"
              color="highlight"
              tag="p"
              weight="medium"
              style={{ textAlign: 'right' }}
            >
              {this.props.changeLabel}
            </Text>
          </Col>
        </Row>
        <Style.Container className="imgContainer">
          <img src={this.state.imageUrl} className="result" />
        </Style.Container>
      </>
    );

    // loading process
    const Loading = (
      <Style.Container style={{ border: `2px dashed ${c.DarkSecondary}` }}>
        {this.state.loading ? <Loader /> : emptyState}
      </Style.Container>
    );

    const uploadButton = (
      <>
        {this.props.label && (
          <Row>
            <Col span={12}>
              <Text variant="ui-small" color="primary" tag="p" weight="medium">
                {this.props.label}
              </Text>
            </Col>
          </Row>
        )}
        {Loading}
      </>
    );
    const { imageUrl } = this.state;
    const { actionAPI, fieldName, beforeUpload, onPreview } = this.props;
    return (
      <Style.Wrapper>
        <Upload
          name={fieldName}
          accept="image/x-png,image/gif,image/jpeg"
          listType="picture-card"
          className="uploader"
          showUploadList={false}
          action={actionAPI}
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
          onPreview={onPreview}
        >
          {imageUrl
            && (this.state.loading ? (
              <Style.LoaderActive>
                <Loader /> {hasContent}
              </Style.LoaderActive>
            ) : (
              hasContent
            ))}
          {!imageUrl && uploadButton}
        </Upload>
      </Style.Wrapper>
    );
  }
}

UploadImage.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  changeLabel: PropTypes.string,
  actionAPI: PropTypes.string,
  fieldName: PropTypes.string,
  imageUrl: PropTypes.string,
  beforeUpload: PropTypes.func,
  onChange: PropTypes.func,
  onPreview: PropTypes.func
};

UploadImage.defaultProps = {
  placeholder: 'Tambah Foto',
  label: undefined,
  actionAPI: undefined,
  changeLabel: 'Unggah Ulang'
};

export default UploadImage;
