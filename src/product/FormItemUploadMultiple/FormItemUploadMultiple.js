import React from 'react';
import PropTypes from 'prop-types';
import { Form, Upload, Modal, Icon } from 'antd';

// import 'antd/dist/antd.css';

const { FormItem } = Form.Item;

class FormItemUploadMultiple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fileImages.length > 0) {
      if (nextProps.fileImages !== this.props.fileImages) {
        this.state.fileList = [];
        this.setState({ fileList: nextProps.fileImages });
      } else if (this.state.fileList.length > 0) {
        this.setState({ fileList: this.state.fileList });
      }
    } else if (nextProps.fileImages.length !== this.props.fileImages.length) {
      this.setState({ fileList: [] });
    }
  }

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleCancelPreview = () => this.setState({ previewVisible: false });

  handleChangeImage = ({ fileList }) => this.setState({ fileList });

  render() {
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    const { form, defaultValue, fieldName, label } = this.props;
    const { previewVisible, previewImage, fileList } = this.state;

    return (
      <FormItem label={label}>
        {form.getFieldDecorator(fieldName, {
          initialValue: defaultValue,
          rules: [
            {
              required: false,
              message: 'Please input'
            }
          ]
        })(
          <Upload
            action="//jsonplaceholder.typicode.com/posts/"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChangeImage}
          >
            {fileList.length >= 5 ? null : uploadButton}
          </Upload>
        )}
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancelPreview}
        >
          <img alt="" style={{ width: '100%' }} src={previewImage} />
        </Modal>
        <br />
        <p style={{ fontWeight: 'normal' }}>
          *Hanya bisa menambahkan maksimal 5 foto dengan format JPG, JPEG, PNG,
          dengan maksimal jumlah ukuran file 10 MB.
        </p>
      </FormItem>
    );
  }
}

FormItemUploadMultiple.propTypes = {
  form: PropTypes.object,
  defaultValue: PropTypes.string,
  fieldName: PropTypes.string
};

export default FormItemUploadMultiple;
