import QRCodeSvg from 'react-native-qrcode-svg'
import colors from 'tailwindcss/colors'

interface IQRCode {
  value: string
  size: number
}

export const QRCode = ({ value, size }: IQRCode) => {
  return (
    <QRCodeSvg
      size={size}
      value={value}
      color={colors.white}
      backgroundColor="transparent"
    />
  )
}
