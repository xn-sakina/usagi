import { useState } from 'react'
import { fabric } from 'fabric'
import styled from 'styled-components'
import {
  Button,
  Form,
  InputNumber,
  Message,
  Popover,
  Spin,
} from '@arco-design/web-react'
import { useDeepCompareEffect, useDebounceFn } from 'ahooks'
import { HexAlphaColorPicker } from 'react-colorful'

const DEFAULT_OUTPUT_SIZE = 600
const DEFAULT_CANVAS_SIZE = DEFAULT_OUTPUT_SIZE
const DEFAULT_STROKE_WIDTH = 15

const loadImage = (url: string) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image()
    img.src = url
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      resolve(img)
    }
  })
}

interface IAddCircleProps {
  imageBase64: string
}

interface IDrawData {
  color: string
  width: number
}

export function AddCircle({ imageBase64 }: IAddCircleProps) {
  const [drawData, setDrawData] = useState<IDrawData>({
    color: '#c51515',
    width: DEFAULT_STROKE_WIDTH,
  })

  return (
    <Box>
      <MultiLines>
        <Form name="add-circle-form">
          <Form.Item label="Color">
            <ColorPicker
              value={drawData.color}
              onChange={(newColor) => {
                setDrawData((pre) => ({ ...pre, color: newColor }))
              }}
            />
          </Form.Item>
          <Form.Item label="Width">
            <InputNumber
              style={{ width: '50%' }}
              min={0}
              value={drawData.width}
              onChange={(newNumber) => {
                setDrawData((pre) => ({ ...pre, width: newNumber || 0 }))
              }}
              step={1}
              precision={0}
            />
          </Form.Item>
        </Form>
      </MultiLines>

      {/* draw elements */}
      <DrawElement drawData={drawData} imageUrl={imageBase64} />
    </Box>
  )
}

function DrawElement({
  drawData,
  onDrawEnd,
  imageUrl,
}: {
  imageUrl: string
  drawData: IDrawData
  onDrawEnd?: (dataUrl: string) => void
}) {
  const [loading, setLoading] = useState(false)

  const [previewUrl, setPreviewUrl] = useState('')

  const draw = async () => {
    // init data
    const size = DEFAULT_CANVAS_SIZE
    const newSize = DEFAULT_OUTPUT_SIZE
    const strokeWidth = Math.min(drawData.width, size / 2)
    if (drawData.width >= size / 2) {
      Message.warning('Stroke width is too large')
    }
    const circleSize = DEFAULT_CANVAS_SIZE - strokeWidth * 2

    // elm
    let elm = document.createElement('canvas')

    // set global config for fabric
    fabric.Object.prototype.selectable = false
    const canvas = new fabric.Canvas(elm, {
      backgroundColor: 'white',
      width: size,
      height: size,
    })

    // add image
    const img = await loadImage(imageUrl)
    const scale = size / img.width
    const clipPath = new fabric.Circle({
      radius: (circleSize / 2) * (1 / scale) + 1, // +1 for border
      originX: 'center',
      originY: 'center',
    })
    const imgObj = new fabric.Image(img, {
      clipPath,
    })
    imgObj.scale(scale)
    canvas.add(imgObj)

    // add circle
    const circle = new fabric.Circle({
      radius: (circleSize + strokeWidth) / 2,
      strokeWidth: strokeWidth,
      stroke: drawData.color,
      fill: 'transparent',
    })
    canvas.add(circle)

    // resize
    const originalWidth = canvas.getWidth()
    const originalHeight = canvas.getHeight()
    const zoom = newSize / size
    canvas.setZoom(zoom)
    canvas.setWidth(originalWidth * canvas.getZoom())
    canvas.setHeight(originalHeight * canvas.getZoom())

    // save
    const dataUrl = canvas.toDataURL({
      width: newSize,
      height: newSize,
      format: 'png',
    })
    onDrawEnd?.(dataUrl)

    // set
    setPreviewUrl(dataUrl)

    // destroy resource
    // @ts-expect-error
    elm = null
    canvas.dispose()
  }

  const deboucneDraw = useDebounceFn(draw, {
    wait: 500,
  })

  useDeepCompareEffect(() => {
    try {
      setLoading(true)
      deboucneDraw.run()
    } finally {
      setLoading(false)
    }
  }, [drawData, imageUrl])

  if (!previewUrl?.length || !imageUrl?.length) {
    return (
      <PreviewNone>
        <Spin loading />
      </PreviewNone>
    )
  }

  return (
    <div>
      <Spin loading={loading}>
        <Preview>
          <img src={previewUrl} alt="preview image" />
        </Preview>
      </Spin>
    </div>
  )
}

const Preview = styled.div`
  width: 70%;
  padding-left: 10%;
  aspect-ratio: 1 / 1;
  /* border: 1px solid black; */

  > img {
    max-width: 100%;
  }
`

const PreviewNone = styled.div`
  width: 70%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Box = styled.div`
  padding: 20px;
  width: 60vw;
`

const MultiLines = styled.div`
  display: flex;
  flex-direction: column;
`

const ColorPickerPopoverWrapper = styled.div`
  /* padding: 10px; */
  /* border-radius: 4px; */
  /* box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1); */
`

const ColorPickerBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`

const ColorPickerText = styled.div`
  padding-right: 10px;
  font-family: monospace;
  font-size: 15px;
`

const SMALL_PREVIEW_SIZE = 12

const ColorPickerSmallPreview = styled.div`
  background-color: ${(props) => props.color};
  width: ${SMALL_PREVIEW_SIZE}px;
  height: ${SMALL_PREVIEW_SIZE}px;
  border-radius: 50%;
  margin-right: 10px;
  flex-shrink: 0;
`

function ColorPicker({
  value,
  onChange,
}: {
  value: string
  onChange: (color: string) => void
}) {
  return (
    <ColorPickerBox>
      <ColorPickerSmallPreview color={value} />
      <ColorPickerText>{value}</ColorPickerText>
      <Popover
        content={
          <ColorPickerPopoverWrapper>
            <HexAlphaColorPicker
              color={value}
              onChange={(newColor) => {
                onChange(newColor)
              }}
            />
          </ColorPickerPopoverWrapper>
        }
        trigger="click"
      >
        <Button shape="round" size="small" type="dashed">
          Select color
        </Button>
      </Popover>
    </ColorPickerBox>
  )
}
