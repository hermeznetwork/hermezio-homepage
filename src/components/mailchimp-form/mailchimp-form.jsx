import React from 'react'

export const MailchimpForm = () => {
  return (
    <>
      <link href='//cdn-images.mailchimp.com/embedcode/slim-10_7.css' rel='stylesheet' type='text/css' />
      <div id='mc_embed_signup'>
        <form action='https://hermez.us7.list-manage.com/subscribe/post?u=4d96b01e302d75cb435c3dd2f&amp;id=00ad3fad98' method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' class='validate' target='_blank' novalidate>
          <div id='mc_embed_signup_scroll'>
            <input type='email' value='' name='EMAIL' class='email' id='mce-EMAIL' placeholder='email address' required />
            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden='true'><input type='text' name='b_4d96b01e302d75cb435c3dd2f_00ad3fad98' tabindex='-1' value='' /></div>
            <div class='clear'><input type='submit' value='Subscribe' name='subscribe' id='mc-embedded-subscribe' class='button' /></div>
          </div>
        </form>
      </div>
    </>
  )
}
