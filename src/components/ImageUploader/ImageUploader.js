import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

class ImageUploader extends Component {
  handleFinishedUpload = (info) => {
    console.log('File uploaded with filename', info.filename);
    console.log('Access it on S3 at', info.fileUrl);

    this.props.dispatch({ type: 'SET_DOG_IMAGE', payload: info.fileUrl });
  };
  render() {
    const uploadOptions = {
      server: 'http://localhost:5000', //needs to be https://heypup.herokuapp.com/ for deployed app
      //   signingUrlQueryParams: {
      //     uploadType: 'avatar',
      //   },
    };

    const s3Url = 'https://hey-pup.s3.amazonaws.com';

    return (
      <DropzoneS3Uploader
        onFinish={this.handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
      />
    );
  }
}

export default connect()(ImageUploader);
