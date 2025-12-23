import { Controls } from '@storybook/addon-docs/blocks';
import MessageStripDesign from '@ui5/webcomponents/dist/types/MessageStripDesign.js';
import type { ComponentProps, ReactNode } from 'react';
import classes from './ControlsWithNote.module.css';
import { DomRefTable } from './DomRefTable';
import { MessageStrip } from '@ui5/webcomponents-react';

interface ControlsWithNotePropTypes {
  hideHTMLPropsNote?: boolean;
  /**
   * Customize the text of the note above the table.
   *
   * Defaults to: "This component supports all HTML attributes."
   */
  noteText?: ReactNode | ReactNode[];
}

export function ControlsWithNote(props: ComponentProps<typeof Controls> & ControlsWithNotePropTypes) {
  const { hideHTMLPropsNote, noteText, ...rest } = props;

  return (
    <div className={classes.container}>
      {!hideHTMLPropsNote && (
        <MessageStrip design={MessageStripDesign.Information} hideCloseButton className={classes.strip}>
          {noteText ?? 'This component supports all HTML attributes.'}
        </MessageStrip>
      )}
      <Controls {...rest} />
      <DomRefTable of={props.of} />
    </div>
  );
}
