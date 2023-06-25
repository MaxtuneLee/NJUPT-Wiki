import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Giscus from '@giscus/react'

const config: DocsThemeConfig = {
  logo: <span>NJUPT Wiki</span>,
  project: {
    link: 'https://github.com/MaxtuneLee/NJUPT-Wiki',
  },
  main: (props) => {
    return (
      <>
        {props.children}
        <hr style={{ margin: '20px 0' }} />
        <Giscus
          id="comments"
          repo="MaxtuneLee/NJUPT-Wiki"
          repoId="R_kgDOJzgazQ"
          category="Announcements"
          categoryId="DIC_kwDOJzgazc4CXc4-"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="preferred_color_scheme"
          lang="zh-CN"
          loading="lazy"
        />
      </>
    )
  }
  ,
  docsRepositoryBase: 'https://github.com/MaxtuneLee/NJUPT-Wiki/tree/main/',
  footer: {
    text: 'CC BY-NC-SA 4.0 | Powered by Nextra | 如有侵权、不实信息请联系进行删除。',
  },
}

export default config
