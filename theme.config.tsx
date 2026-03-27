import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <strong>판도 CRM 비즈니스 정책</strong>,
  project: {
    link: 'https://github.com/dev-spogym/admin-pando',
  },
  docsRepositoryBase: 'https://github.com/dev-spogym/admin-pando',
  footer: {
    text: '판도 CRM 비즈니스 정책 문서',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    title: '목차',
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="판도 CRM 비즈니스 정책" />
      <meta property="og:description" content="대형 피트니스 센터 CRM 비즈니스 정책 문서" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s - 판도 CRM 정책',
    }
  },
  i18n: [],
}

export default config
