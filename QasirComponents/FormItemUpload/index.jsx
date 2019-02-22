import React from 'react'
import { Upload, Icon, message, Form } from 'antd';

const FormItem = Form.Item


function beforeUpload(file) {
  const isFileImage = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isFileImage) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isFileImage && isLt2M;
}

class FormItemUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            imagePreview: ""
        }
    }

    getBase64(img, callback) {
        const reader = new FileReader()
        reader.addEventListener('load', () => callback(reader.result))
        reader.readAsDataURL(img)
    }

    returnPromiseTrue(file) {
        return Promise.resolve(true)
    }

    handleChange = (info) => {
        this.getBase64(info.file.originFileObj, (imagePreview) => {
            this.setState({
                imagePreview,
                loading: false,
            })
        })
    }
    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { label, form, fieldName, defaultValue, imagePath } = this.props
        const {imagePreview} = this.state
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
            })(<Upload
                name={fieldName}
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action={this.returnPromiseTrue}
                beforeUpload={beforeUpload}
                onChange={this.handleChange.bind(this)}
            >
                {imagePreview ? <img src={imagePreview} alt="" /> : (imagePath ? <img src={imagePath} alt="" /> : uploadButton)}
            </Upload>)}
            </FormItem>
        );
    }
}

export default FormItemUpload