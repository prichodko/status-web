import { allDocs } from '@docs'
import { Avatar, Button, Text } from '@status-im/components'
import { BulletIcon, CheckIcon, EditIcon } from '@status-im/icons'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { Admonition } from '@/components/admonition'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Link } from '@/components/link'
import { SearchButton } from '@/components/search-button'
import { SidebarMenu } from '@/components/sidebar-menu'
import { TOC } from '@/components/toc'
import { AppLayout, PageBody } from '@/layouts/app-layout'
import { createTree } from '@/utils/link-tree'

import type { InformationBoxProps } from '@/components/admonition'
import type { Doc } from '@docs'
import type { GetStaticPaths, GetStaticProps, Page } from 'next'
import type { ComponentProps } from 'react'

type Params = { slug: string[] }

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const paths = allDocs.map(doc => ({
    params: { slug: doc.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const doc: Doc = allDocs.find(
    d => d.slug.join('/') === params!.slug.join('/')
  )!

  // root
  const breadcrumbs = [
    {
      label: 'Status Help',
      href: '/learn',
    },
  ]

  // last slug is the current page
  for (const parentSlug of doc.slug.slice(0, -1)) {
    // const parentDoc = allDocs.find(d => d.slug.join('/') === parentSlug.join("/"))!
    breadcrumbs.push({
      label: parentSlug,
      href: `/${parentSlug}`,
    })
  }

  // current page
  breadcrumbs.push({
    label: doc.title,
    href: doc.url,
  })

  return {
    props: {
      doc,
      tree: JSON.stringify(createTree(allDocs)),
      breadcrumbs,
    },
  }
}

const AnchorLink = ({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) => (
  <>
    <span className="absolute -left-6 hidden text-slate-400 dark:text-slate-600 lg:group-hover:inline">
      #
    </span>
    <Link href={`#${id}`} aria-hidden="true" tabIndex={-1}>
      {children}
    </Link>
  </>
)

const components = {
  h1: (props: ComponentProps<'h1'>) => {
    return (
      <h1 {...props} className="group relative text-[40px] font-bold">
        <AnchorLink id={props.id!}>{props.children}</AnchorLink>
      </h1>
    )
  },
  h2: (props: ComponentProps<'h2'>) => {
    return (
      <h2
        {...props}
        className="group relative mb-3 mt-5 scroll-m-[100px] text-[27px] font-semibold"
      >
        <AnchorLink id={props.id!}>{props.children}</AnchorLink>
      </h2>
    )
  },
  h3: (props: ComponentProps<'h3'>) => {
    return (
      <h3
        {...props}
        className="group relative mb-3 mt-5 scroll-m-[100px] text-[19px] font-semibold"
      >
        <AnchorLink id={props.id!}>{props.children}</AnchorLink>
      </h3>
    )
  },
  a: (props: ComponentProps<'a'>) => (
    // @ts-expect-error something with ref
    <Link href={props.href!} {...props}>
      <Text size={15} color="$primary-50" weight="semibold">
        {props.children}
      </Text>
    </Link>
  ),
  p: (props: ComponentProps<'p'>) => (
    <div className="mb-5 mt-3">
      <Text size={15}>{props.children}</Text>
    </div>
  ),
  ul: (props: ComponentProps<'ul'>) => {
    // return <ul className="list-inside list-disc" {...props} />
    return <ul className="grid gap-y-3">{props.children}</ul>
  },
  ol: (props: ComponentProps<'ol'>) => {
    // return <ol className="list-inside list-decimal" {...props} />
    return <ol {...props} />
  },
  li: (props: ComponentProps<'li'>) => {
    const icon =
      props.className === 'task-list-item' ? (
        <CheckIcon size={20} color="$success-50" aria-hidden />
      ) : (
        <BulletIcon size={20} color="$neutral-50" aria-hidden />
      )

    return (
      <li className="flex items-center gap-2">
        {icon}
        {props.children}
      </li>
    )
  },
  hr: (props: ComponentProps<'hr'>) => (
    <div className="my-5 flex justify-center gap-3" role="separator" {...props}>
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-neutral-10 h-2 w-2 rounded-full" />
      ))}
    </div>
  ),
  // img: (props: ImageProps) => (
  //   <Image
  //     alt={props.alt}
  //     sizes="100vw"
  //     style={{ width: '100%', height: 'auto' }}
  //     {...props}
  //   />
  // ),
  // pre: Pre,
  // code: InlineCode,
  Admonition: (props: InformationBoxProps) => (
    <div className="my-5">
      <Admonition {...props} />
    </div>
  ),
}

type Props = {
  doc: Doc
  tree: string
  breadcrumbs: { label: string; href: string }[]
}

const DocsDetailPage: Page<Props> = props => {
  const { doc, tree, breadcrumbs } = props

  const Content = useMDXComponent(doc.body.code)

  return (
    <PageBody>
      {/* Header */}
      <div className="flex">
        <div className="flex-1">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <SearchButton size={32} />
      </div>

      <div className="grid grid-cols-[320px_1fr_380px]">
        {/* Menu */}
        <SidebarMenu items={JSON.parse(tree)} />

        {/* Content */}
        <div className="mx-auto max-w-[542px] py-20">
          <div className="mb-3 flex justify-between">
            <div className="flex items-center gap-1">
              <Link
                href={`https://github.com/${doc.author}`}
                className="flex items-center gap-1"
              >
                <Avatar
                  type="user"
                  name="Jorge Campo"
                  size={20}
                  src={`https://github.com/${doc.author}.png`}
                />
                <Text size={15} weight="semibold">
                  Jorge Campo
                </Text>
              </Link>
              <Text size={15} color="$neutral-50">
                on{' '}
                {new Intl.DateTimeFormat('en-GB', {
                  dateStyle: 'medium',
                }).format(new Date(doc.last_edited))}
              </Text>
            </div>

            <Button
              variant="outline"
              size={24}
              icon={<EditIcon size={12} color="$neutral-50" />}
              onPress={() => {
                window.open(
                  // TODO: move this to config constant
                  `https://github.com/status-im/status-web/tree/main/apps/website/docs/${doc._raw.sourceFilePath}`,
                  '_blank'
                )
              }}
            >
              Edit on GitHub
            </Button>
          </div>

          <h1 className="mb-10 text-[40px] font-bold">
            <AnchorLink id={doc.titleSlug}>{doc.title}</AnchorLink>
          </h1>
          {doc.image && (
            <img src={doc.image.src} alt={doc.image.alt} className="mb-10" />
          )}
          <Content components={components} />
        </div>

        {/* Table of contents */}
        <TOC headings={doc.headings} />
      </div>
    </PageBody>
  )
}

DocsDetailPage.getLayout = AppLayout

export default DocsDetailPage
