/*!
 * Dependencies
 */

var _ = require('underscore')
  , JSDOM = require('jsdom').JSDOM
  , links = require('./links.json')

/*!
 * Constants
 */

const ARCHIVE = 'http://avc.com/archive/#mba_mondays_archive'
const LIST = '.lcp_catlist'

/**
 * Write a New Link
 * 
 * @param {String} link
 * @return {Promise} fulfills if link has been successfully written
 */

function writeLink(link) {
  var data = {
    created: new Date().toDateString
  , sent: false
  }

  links[link] = data

  return Promise.resolve({ [link]: data })
}

/**
 * Check if link has already been added 
 * 
 * @param {String} link
 * @return {Promise} fulfills if the link has already been added
 */

function hasLink(link) {
  return links[link] ? true : false
}

/**
 * Get link data
 * 
 * @param {String} link
 * @return {Promise} fulfills if the link is fetched
 */

function getData(link) {
  var data = links[link]

  if (data) return Promise.resolve({ [link]: data })
  
  return Promise.reject(new Error(`Link (${link}) is not in the database`))
}

/**
 * Get Link Body
 * 
 * @param {String} link
 * @return {Promise} fulfills if the body is fetched
 */

function getBody(link) {
  return axios(link)
}

/**
 * Mark a link as having been sent
 * 
 * @param {String} link
 * @return {Promise} fulfills if a link is successfully marked as sent
 */

function markSent(link) {
  // TODO
}

/**
 * Fetch links
 * 
 * @return {Promise} fulfills if links are fetched from AVC
 */

function fetchLinks() {
  var prom = JSDOM.fromURL(ARCHIVE)
    .then((dom) => {
        var items = dom.window.document.querySelector(`${LIST}`).childNodes
        // fetch and convert links to an array with data
        , allLinks = [...items].map((item) => {
          var anchor = item.querySelector('a')
            , link = anchor.href
            , title = anchor.title

          return { link, title }
        })
      
      return allLinks
    })

  return prom
}

/**
 * Add new links to the DB that have not already been added
 * 
 * @return {Promise} fulfills if successfully adds new links to the DB 
 */

function updateLinks() {
  // TODO
}

/**
 * Save database. This needs to be called at the end of session of DB updates
 * 
 * @return {Promise} fulfills if DB is successfully saved
 */

function save() {
  // TODO 
}

/*!
 * Exports
 */

module.exports = {

}
