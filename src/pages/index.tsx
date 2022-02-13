import React, { useCallback, useRef, useState } from 'react'
import {
  Typography,
  Grid,
  Upload,
  Button,
  Message,
  Spin,
  Skeleton,
  Divider,
  Modal,
  Alert,
  Link,
  Affix,
} from '@arco-design/web-react'
import styles from './index.module.scss'
import { debounce, isNumber, noop } from 'lodash-es'
import Cropper from 'react-cropper'
import { getImageSize } from '@/utils/image'
import { useSize } from 'ahooks'
import { default as CropperIns } from 'cropperjs'
import cx from 'classnames'
import { IImageInfo } from './interface'
import { downloadFile } from '@/utils/file'
import { base64ToUrl } from '@/utils/transform'
import { IconPlus, IconDelete, IconDownload } from '@arco-design/web-react/icon'
import { Footer } from '@/components/Footer'
import { Title } from '@/components/Title'

const WIDTH = '90%'

export const Home: React.FC = () => {
  // base
  const [src, setSrc] = useState('')
  const [loading, setLoading] = useState(false)
  const [cropperHeight, setCropperHeight] = useState<number>()
  const [result, setResult] = useState('')
  const [imgInfo, setImgInfo] = useState<IImageInfo>()
  const [isCropping, setIsCropping] = useState(false)

  // affix
  const [sticky, setSticky] = useState(false)

  // observe size
  const sizeObserverRef = useRef<any>()
  const observerSize = useSize(sizeObserverRef)

  // status
  const isDisabledSelectImage = Boolean(src.length)

  const onUpload = async (file: File) => {
    setLoading(true)
    try {
      const blob = new Blob([file], { type: file.type })
      const url = URL.createObjectURL(blob)
      const size = await getImageSize(url)
      if (size.width <= 0 || size.height <= 0) {
        Message.error(`Parse image error`)
        return
      }

      const cropperExceptWidth = isNumber(observerSize?.width)
        ? (observerSize!.width / size.width) * size.height - 5
        : 500

      // save info
      setImgInfo({ filename: file.name, type: file.type })

      // set values
      setCropperHeight(cropperExceptWidth)
      setSrc(url)
    } catch {
      Message.error(`Load image process error`)
    } finally {
      setLoading(false)
    }
  }
  const onClear = () => {
    setSrc('')
    setLoading(false)
    setCropperHeight(undefined)
    setResult('')
  }

  const [visible, setVisible] = useState(false)
  const onSave = () => {
    setVisible(true)
  }

  // cropper
  const cropperRef = useRef<any>()
  const onCrop = () => {
    setIsCropping(true)
    try {
      const imageElement: any = cropperRef?.current
      const cropper = imageElement?.cropper as CropperIns | undefined
      const base64 = cropper?.getCroppedCanvas().toDataURL(imgInfo?.type, 92)
      if (base64?.length) {
        setResult(base64)
      }
    } finally {
      setIsCropping(false)
    }
  }
  const debounceCrop = useCallback(debounce(onCrop, 500), [])
  const cropWrapper = () => {
    if (!isCropping) {
      setIsCropping(true)
    }
    debounceCrop()
  }

  // download
  const onDownloadResult = async () => {
    Message.info('Downloading...')
    const url = await base64ToUrl(result)
    console.log('imgInfo: ', imgInfo)
    downloadFile({ url, filename: imgInfo?.filename, type: imgInfo?.type })
  }

  return (
    <div>
      <Title />

      <Divider />

      <div className={styles.wrapper}>
        <div>
          <Typography.Title style={{ marginTop: 0 }} heading={6}>
            Upload Image
          </Typography.Title>

          <Grid.Row className={styles.btn_line}>
            <Upload
              accept="image/jpeg,image/png,image/webp"
              multiple={false}
              fileList={[]}
              showUploadList={false}
              action=""
              customRequest={noop}
              beforeUpload={onUpload}
              disabled={isDisabledSelectImage}
              className={styles.btn}
            >
              <Button
                icon={<IconPlus />}
                type="primary"
                disabled={isDisabledSelectImage}
              >
                Select
              </Button>
            </Upload>
            <Button
              icon={<IconDelete />}
              disabled={!isDisabledSelectImage}
              className={styles.btn}
              onClick={onClear}
            >
              Clear
            </Button>
            <Button
              icon={<IconDownload />}
              onClick={onSave}
              className={styles.btn}
              disabled={!isDisabledSelectImage}
              loading={isCropping}
              type="secondary"
              status="success"
            >
              Save
            </Button>
          </Grid.Row>

          <Divider />

          <Typography.Title heading={6}>Crop Image</Typography.Title>

          <div style={{ width: WIDTH }} ref={sizeObserverRef}></div>

          <Grid.Row
            className={styles.imgs}
            style={{
              display: !cropperHeight ? 'none' : undefined,
            }}
          >
            <Affix offsetTop={0} onChange={setSticky}>
              <div
                className={cx(
                  styles.imgs_box,
                  sticky && styles.imgs_box_sticky
                )}
              >
                {!result?.length && isDisabledSelectImage ? (
                  <div className={styles.no_imgs}>
                    <Skeleton
                      className={styles.preview_loading}
                      text={false}
                      image={{ shape: 'circle' }}
                      animation
                    />
                    <Skeleton
                      className={styles.preview_loading}
                      image={{ shape: 'circle' }}
                      text={false}
                      animation
                    />
                  </div>
                ) : (
                  <Spin loading={isCropping} style={{ display: 'block' }}>
                    <div className={styles.imgs_preview}>
                      <div
                        className={styles.preview}
                        style={{ borderRadius: '50%' }}
                      >
                        <img src={result} />
                      </div>
                      <div
                        className={styles.preview}
                        style={{ borderRadius: 13 }}
                      >
                        <img src={result} />
                      </div>
                    </div>
                  </Spin>
                )}
              </div>
            </Affix>
          </Grid.Row>

          <Grid.Row>
            {loading ? (
              <Spin className={styles.center_loading} />
            ) : (
              <div>
                {cropperHeight && cropperHeight > 0 ? (
                  <div className={styles.cropper_box}>
                    <Cropper
                      src={src}
                      style={{ height: cropperHeight, width: WIDTH }}
                      aspectRatio={1 / 1}
                      guides={false}
                      crop={cropWrapper}
                      ref={cropperRef}
                      className={styles.j_cropper}
                    />
                    <Alert
                      showIcon={false}
                      className={styles.scroll_area}
                      content="scroll area"
                    />
                  </div>
                ) : (
                  <div>Please select some one image</div>
                )}
              </div>
            )}
          </Grid.Row>

          <Modal
            visible={visible}
            title="Croper Result"
            style={{ width: '90%' }}
            okText="Close"
            maskClosable={false}
            closable={false}
            onOk={() => {
              setVisible(false)
            }}
            cancelButtonProps={{
              style: {
                display: 'none',
              },
            }}
          >
            <div className={styles.result}>
              <Alert
                type="success"
                content={<div>Please long press to save</div>}
                style={{ marginBottom: 10 }}
              />
              <img src={result} alt="cropper result" style={{ width: '60%' }} />
              <Divider />
              <Alert
                type="warning"
                content={
                  <div className={styles.can_not_save}>
                    <div>Can't save? Try</div>
                    <Link style={{ marginLeft: 3 }} onClick={onDownloadResult}>
                      Download
                    </Link>
                  </div>
                }
              />
            </div>
          </Modal>
        </div>

        <Footer />
      </div>
    </div>
  )
}
