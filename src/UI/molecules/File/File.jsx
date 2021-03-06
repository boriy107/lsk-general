import React, { Component } from 'react';
import autobind from 'core-decorators/lib/autobind';
import Remove from 'react-icons2/mdi/close-circle-outline';
import fileTypes from '../../../utils/fileTypes';
import Box from '../Box';
import { Row, Col } from '../../../Grid/index';
import Typography from '../../atoms/Typography';
import { containerStyle, typeStyle, urlStyle, PrewImage, RemoveButton } from './File.styles';

class File extends Component {
  static determineType(url) {
    let [, ext] = url.match(/.+\.(\w+)\??.*$/) || [];
    const isType = Object.keys(fileTypes).includes(ext);
    if (!isType) ext = 'other';
    return ext;
  }
  shouldComponentUpdate(nextProps) {
    return this.props.url !== nextProps.url;
  }

  @autobind
  removeFile() {
    const { value, item } = this.props;
    value.splice(item, 1);
  }

  render() {
    const { url } = this.props;
    const type = this.constructor.determineType(url);
    const Icon = fileTypes[type];
    const fileName = url.substring(url.lastIndexOf('/') + 1);
    const urlImage = url.match(/[^/]+(jpg|jpeg|exif|bmp|png|gif|tiff|webp|heif)$/);
    return (
      <Box
        componentClass="a"
        href={url}
        target="_blank"
        className={containerStyle}
      >
        <Row>
          <Col xs={4}>
            { urlImage ? <PrewImage src={url} alt={fileName} /> : <Icon size={32} />}
          </Col>
          <Col xs={8}>
            <Typography
              color="#9b9b9b"
              variant="caption"
              className={typeStyle}
            >
              {type}
            </Typography>
            <Typography className={urlStyle}>{fileName}</Typography>
            <RemoveButton>
              <Remove onClick={this.removeFile} />
            </RemoveButton>
          </Col>
        </Row>
      </Box>
    );
  }
}

export default File;