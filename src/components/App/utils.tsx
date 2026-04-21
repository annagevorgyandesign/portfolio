import type { ReactNode } from 'react'
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'
import type { SocialLink } from '../../types/portfolio'

export const getSocialIcon = (icon: SocialLink['icon']): ReactNode => {
  switch (icon) {
    case 'github':
      return <GithubOutlined />
    case 'linkedin':
      return <LinkedinOutlined />
    case 'mail':
      return <MailOutlined />
    default:
      return null
  }
}
