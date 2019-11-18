/* eslint-disable react/no-did-update-set-state */
/* eslint-disable no-alert */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Upload from 'antd/es/upload';

import ImageDefault from '../../base/svg-icon/svg/ImageDefault';

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
        <Style.Box>
          <Style.Icon>
            <ImageDefault width="56" height="56" fill={c.DarkNeutral} />
          </Style.Icon>
        </Style.Box>
        <Style.Desc>
          <Text variant="ui-small" color="highlight" tag="p" weight="medium">
            {this.props.label}
          </Text>
        </Style.Desc>
      </>
    );

    // When has content
    const hasContent = (
      <>
        <Style.Box>
          <img src={this.state.imageUrl} className="result" />
        </Style.Box>
        <Text
          variant="ui-small"
          color="highlight"
          tag="p"
          weight="medium"
          style={{ textAlign: 'center' }}
        >
          {this.props.changeLabel}
        </Text>
      </>
    );

    // loading process
    const Loading = (
      <Style.Container>
        {this.state.loading ? (
          <Style.Box>
            <Loader />
          </Style.Box>
        ) : (
          emptyState
        )}
      </Style.Container>
    );

    const uploadButton = (
      <>
        {/* {this.props.label && (
          <Row>
            <Col span={12}>
              <Text variant="ui-small" color="primary" tag="p" weight="medium">
                {this.props.label}
              </Text>
            </Col>
          </Row>
        )} */}
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
  changeLabel: PropTypes.string,
  actionAPI: PropTypes.string,
  fieldName: PropTypes.string,
  imageUrl: PropTypes.string,
  beforeUpload: PropTypes.func,
  onChange: PropTypes.func,
  onPreview: PropTypes.func
};

UploadImage.defaultProps = {
  label: undefined,
  actionAPI: undefined,
  changeLabel: 'Unggah Ulang'
};

export default UploadImage;
