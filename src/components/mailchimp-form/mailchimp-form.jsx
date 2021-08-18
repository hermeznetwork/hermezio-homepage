import React from 'react'
import { useTheme } from 'react-jss'
import Title from '../shared/title/title.component'

import useMailchimpFormStyles from './mailchimp-form.styles'

export const MailchimpForm = () => {
  const theme = useTheme()
  const classes = useMailchimpFormStyles()

  return (
    <div className={classes.formWrapper}>
      <div className={classes.title}>
        <Title>Get the latest news from Polygon Hermez</Title>
      </div>
      <div className={classes.form}>
        <div id='mc_embed_signup'>
          <form action='https://hermez.us7.list-manage.com/subscribe/post?u=4d96b01e302d75cb435c3dd2f&amp;id=00ad3fad98' method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' class='validate' target='_blank' novalidate>
            <div id='mc_embed_signup_scroll'>
              <div class='mc-field-group'>
                <input
                  type='email'
                  name='EMAIL'
                  class='required email'
                  id='mce-EMAIL'
                  placeholder='you@example.com'
                  style={{
                    color: theme.palette.gray.lighter,
                    width: '100%',
                    border: '0',
                    height: `${theme.spacer * 6.5}px`,
                    outline: 'none',
                    padding: `${theme.spacer * 2}px ${theme.spacer * 9}px ${theme.spacer * 2}px ${theme.spacer * 2}px`,
                    caretColor: theme.palette.orange.light,
                    borderRadius: 16,
                    textOverflow: 'ellipsis'
                  }}
                />
              </div>
              <div id='mce-responses' class='clear'>
                <div class='response' id='mce-error-response' style={{ display: 'none' }} />
                <div class='response' id='mce-success-response' style={{ display: 'none' }} />
              </div>
              {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden='true'>
                <input type='text' name='b_4d96b01e302d75cb435c3dd2f_00ad3fad98' tabindex='-1' value='' />
              </div>
              <div class='clear' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <input
                  type='submit'
                  value='Subscribe'
                  name='subscribe'
                  id='mc-embedded-subscribe'
                  class='button'
                  style={{
                    background: theme.palette.orange.main,
                    color: theme.palette.white,
                    border: `1px solid ${theme.palette.orange.main}`,
                    display: 'block',
                    marginTop: `-${theme.spacer * 6.5}px`,
                    width: 'fit-content',
                    cursor: 'pointer',
                    padding: `${theme.spacer * 2}px ${theme.spacer * 3.5}px`,
                    textAlign: 'center',
                    fontWeight: '500',
                    lineHeight: `${theme.spacer * 2.25}px`,
                    borderRadius: 16
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
