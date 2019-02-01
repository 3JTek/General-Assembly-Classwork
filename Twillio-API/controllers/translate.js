const rp = require('request-promise')
const accountSid = process.env.SID
const authToken = process.env.AUTHTOKEN
const client = require('twilio')(accountSid, authToken)

function requestTranslation(text, lang){
  return rp(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${process.env.YANDEX_API}&text=${text}&lang=${lang}`)
}

function sendTextMessage(text, phoneNb){
  return client.messages
    .create({
      body: text,
      from: process.env.PHONE_NR,
      to: phoneNb
    })
}

function translate (req, res) {
  const text = req.body.message
  const lang = req.body.lang
  let translatedMessage = ''

  requestTranslation(text, lang)

    .then(textObj => {
      translatedMessage = JSON.parse(textObj).text[0]
      sendTextMessage(JSON.parse(textObj).text[0], process.env.MY_NR)
    })
    .then(() => res.status(200).json(`Your text message '${translatedMessage}' has been sent correctly to ${process.env.MY_NR}`))

    .catch(err => res.status(422).json(err.message))
}

module.exports = {
  translate: translate
}
