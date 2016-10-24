import React from 'react'
import classNamesBind from 'classnames/bind'
import * as Dialog from '../../../Dialog'
import * as Button from '../../../Button'
import * as Paragraph from '../../../Paragraph'
import * as Title from '../../../Title'
import Link from '../../../Link'
import defaultStyles from './styles.scss'

const baseClass = 'chrome--centered'

const classes = {
  title: `${baseClass}__title`,
  paragraphPrimary: `${baseClass}__paragraph--primary`,
  buttonAccept: `${baseClass}__button--accept`,
  buttonCancel: `${baseClass}__button--cancel`,
  legal: `${baseClass}__paragraph--legal`
}

export default function Centered ({
  className,
  children,
  labels,
  illustration,
  onAccept,
  onCancel,
  styles
}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const paragraphs = labels.summary instanceof Array
    ? labels.summary
    : [labels.summary]

  return <Dialog.Main className={classNames(baseClass, className)}>
    <Dialog.Content>
      {illustration}

      <Title.Primary
        className={classNames(classes.title)}>
        {labels.title}
      </Title.Primary>

      {paragraphs.map((text, index) => (<Paragraph.Secondary
        key={index}
        className={classNames(classes.paragraphPrimary)}>
        {text}
      </Paragraph.Secondary>))}

      {children}

      {labels.accept && onAccept && <Button.Primary
        onClick={onAccept}
        className={classNames(classes.buttonAccept)}>
        {labels.accept}
      </Button.Primary>}

      {labels.cancel && onCancel && <Paragraph.Primary
        className={classNames(classes.buttonCancel)}>
        <Link onClick={onCancel}>
          {labels.cancel}
        </Link>
      </Paragraph.Primary>}
    </Dialog.Content>
    <Dialog.Footer>
      {labels.legal && <Paragraph.Legal className={classNames(classes.legal)}>
        {labels.legal}
      </Paragraph.Legal>}
    </Dialog.Footer>
  </Dialog.Main>
}